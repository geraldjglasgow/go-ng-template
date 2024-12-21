package main

import (
	"server/handlers"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Root:   "../dist",
		Index:  "index.html",
		Browse: true,
		HTML5:  true,
	}))

	e.POST("/users", handlers.SaveUser)
	e.GET("/users", handlers.GetAllUsers)
	e.GET("/users/:id", handlers.GetUser)
	e.PUT("/users/:id", handlers.UpdateUser)
	e.DELETE("/users/:id", handlers.DeleteUser)

	e.Start(":3000")
}
