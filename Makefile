build:
   npm run build
   mkdir -p .netlify/functions
   GOOS=linux
   GOARCH=amd64
   GO111MODULE=on
   GOBIN=${PWD}/.netlify/functions go get ./functions/...
   GOBIN=${PWD}/.netlify/functions go install ./functions/...
