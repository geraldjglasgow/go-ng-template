package handlers

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"

	"server/models"
)

func SaveUser(c echo.Context) error {
	var user models.User
	if err := c.Bind(&user); err != nil {
		return c.String(http.StatusBadRequest, "Invalid request body")
	}
	user.UserID = int64(len(models.Users) + 1)
	models.Users = append(models.Users, user)
	return c.JSON(http.StatusCreated, user)
}

func GetUser(c echo.Context) error {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		return c.String(http.StatusBadRequest, "Invalid ID")
	}

	for _, user := range models.Users {
		if user.UserID == id {
			return c.JSON(http.StatusOK, user)
		}
	}
	return c.NoContent(http.StatusNotFound)
}

func GetAllUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, models.Users)
}

func UpdateUser(c echo.Context) error {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		return c.String(http.StatusBadRequest, "Invalid ID")
	}

	var updatedUser models.User
	if err := c.Bind(&updatedUser); err != nil {
		return c.String(http.StatusBadRequest, "Invalid request body")
	}

	for i, u := range models.Users {
		if u.UserID == id {
			models.Users[i].UserName = updatedUser.UserName
			models.Users[i].FirstName = updatedUser.FirstName
			models.Users[i].LastName = updatedUser.LastName
			models.Users[i].Email = updatedUser.Email
			models.Users[i].UserStatus = updatedUser.UserStatus
			models.Users[i].Department = updatedUser.Department
			return c.JSON(http.StatusOK, models.Users[i])
		}
	}
	return c.NoContent(http.StatusNotFound)
}

func DeleteUser(c echo.Context) error {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		return c.String(http.StatusBadRequest, "Invalid ID")
	}

	for i, u := range models.Users {
		if u.UserID == id {
			models.Users = append(models.Users[:i], models.Users[i+1:]...)
			return c.NoContent(http.StatusOK)
		}
	}
	return c.NoContent(http.StatusNotFound)
}
