build: ui functions
clean:
	rm -rf build .netlify/functions

ui:
	npm run build

functions:
	mkdir -p .netlify/functions
	GOOS=linux
	GOARCH=amd64
	GO111MODULE=on
	GOBIN=${PWD}/.netlify/functions go get ./functions/...
	GOBIN=${PWD}/.netlify/functions go install ./functions/...