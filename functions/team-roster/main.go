package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"os"
	"strconv"
	"strings"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Response struct {
	Data []ZwiftPowerUser `json:"data"`
}

type ZwiftPowerUser struct {
	Div        int           `json:"div"`
	Divw       int           `json:"divw"`
	Flag       string        `json:"flag"`
	R          string        `json:"r"`
	Ftp        []interface{} `json:"ftp"`
	Name       string        `json:"name"`
	Aid        string        `json:"aid"`
	Age        string        `json:"age"`
	Zada       int           `json:"zada"`
	W          []interface{} `json:"w"`
	Rank       string        `json:"rank"`
	Skill      int           `json:"skill"`
	Distance   int           `json:"distance"`
	Climbed    int           `json:"climbed"`
	Energy     int           `json:"energy"`
	Time       int           `json:"time"`
	SkillRace  int           `json:"skill_race"`
	SkillSeg   int           `json:"skill_seg"`
	SkillPower int           `json:"skill_power"`
	Zwid       int           `json:"zwid"`
	Status     string        `json:"status"`
	Reg        int           `json:"reg"`
	Email      string        `json:"email"`
	H1200Watts string        `json:"h_1200_watts,omitempty"`
	H1200Wkg   string        `json:"h_1200_wkg,omitempty"`
	H15Watts   string        `json:"h_15_watts,omitempty"`
	H15Wkg     string        `json:"h_15_wkg,omitempty"`
}

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	teamId := request.QueryStringParameters["teamId"]
	response := events.APIGatewayProxyResponse{}
	if teamId == "" {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Pass in a teamId param",
		}, nil
	}

	users, err := SendZwiftPowerRequest(teamId, authenticatedClient())
	if err != nil {
		return events.APIGatewayProxyResponse{}, err
	} else {
		response.Headers = map[string]string{
			"Content-Type":  "application/json",
			"Cache-Control": "public, s-maxage=720",
		}
		usersStr, _ := json.Marshal(users)
		response.Body = string(usersStr)
	}
	return response, nil
}

func main() {
	lambda.Start(Handler)
}
func TestApp() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// riderId := 12320
		teamId := r.URL.Query().Get("teamId")
		if teamId == "" {
			w.WriteHeader(http.StatusBadRequest)
			io.WriteString(w, "Pass a teamId param")
			return
		}

		users, err := SendZwiftPowerRequest(teamId, authenticatedClient())
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			io.WriteString(w, err.Error())
		} else {
			w.Header().Add("Content-Type", "application/json")
			json.NewEncoder(w).Encode(users)
		}
	})
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func authenticatedClient() http.Client {
	fmt.Println("hello")
	jar, _ := cookiejar.New(&cookiejar.Options{})
	client := http.Client{
		Jar: jar,
	}
	u, _ := url.Parse("https://zwiftpower.com")
	log.Println(len(client.Jar.Cookies(u)))
	data := url.Values{}
	data.Set("username", os.Getenv("ZP_UID"))
	data.Set("password", os.Getenv("ZP_PASS"))
	data.Set("redirect", "./events.php")

	r, _ := http.NewRequest("POST", "https://zwiftpower.com/ucp.php?mode=login", strings.NewReader(data.Encode()))
	r.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	r.Header.Add("Content-Length", strconv.Itoa(len(data.Encode())))

	_, err := client.Do(r)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(len(client.Jar.Cookies(u)))
	return client
}

func SendZwiftPowerRequest(teamId string, client http.Client) ([]ZwiftPowerUser, error) {
	url := fmt.Sprintf("https://zwiftpower.com/api3.php?do=team_riders&id=%s", teamId)

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36 Edg/92.0.902.84")
	req.Header.Add("Accept", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	bytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	fmt.Printf("%s", bytes)
	var zp = new(Response)
	err = json.Unmarshal(bytes, zp)
	if err != nil {
		return nil, err
	}
	return zp.Data, nil
}
