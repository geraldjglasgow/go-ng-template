npm install -g @angular/cli
ng new ums-ui
ng s
ng t

Server
StyleGuide
https://github.com/uber-go/guide/blob/master/style.md

Creating the application
download Go from
https://go.dev/dl/

add go to PATH
sudo vim ~/.zshrc
Add export PATH=$PATH:/usr/local/go/bin, then save and exit
source ~/.zshrc
run go version
the output should look something like this: **go version go1.22.10 darwin/arm64**

create project with go mod init <module_name>
install echo web framework
go get github.com/labstack/echo/v4
insatll squirrel API for building SQL queries
go get github.com/Masterminds/squirrel
install ginkgo unit testing framework
go get github.com/onsi/ginkgo
install matcher/assertion library
go get **github.com/onsi/gomega

Running the program
from the server directory
go mod tidy
go run server.go

from the client diretory
ng build

Build Docker
docker build --no-cache -t my-go-app .
