package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/cookiejar"
	"os"
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

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// riderId := 12320
		teamId := r.URL.Query().Get("teamId")
		if teamId == "" {
			w.WriteHeader(http.StatusBadRequest)
			io.WriteString(w, "Pass a teamId param")
			return
		}

		users, err := SendZwiftPowerRequest(teamId)
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

func SendZwiftPowerRequest(teamId string) ([]ZwiftPowerUser, error) {
	url := fmt.Sprintf("https://zwiftpower.com/api3.php?do=team_riders&id=%s", teamId)
	jar, _ := cookiejar.New(&cookiejar.Options{})
	client := http.Client{
		Jar: jar,
	}

	cookie := &http.Cookie{
		Name:  "phpbb3_lswlk_sid",
		Value: os.Getenv("ZP_SID"),
	}
	req, _ := http.NewRequest("GET", url, nil)
	req.AddCookie(cookie)

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	bytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	var zp = new(Response)
	err = json.Unmarshal(bytes, zp)
	if err != nil {
		return nil, err
	}
	return zp.Data, nil
}
