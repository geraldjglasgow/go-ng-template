package handlers_test

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"

	"server/handlers"
	"server/models"

	"github.com/labstack/echo/v4"
)

var _ = Describe("UserHandler", func() {
	var e *echo.Echo

	BeforeEach(func() {
		e = echo.New()
		models.Users = []models.User{
			{
				UserID:     1,
				UserName:   "alice123",
				FirstName:  "Alice",
				LastName:   "Johnson",
				Email:      "alice@example.com",
				Status:     models.Active,
				Department: "Engineering",
			},
		}
	})

	Describe("SaveUser", func() {
		It("should create a new user and return 201", func() {
			newUser := models.User{
				UserName:   "bob456",
				FirstName:  "Bob",
				LastName:   "Smith",
				Email:      "bob@example.com",
				Status:     models.Inactive,
				Department: "Marketing",
			}
			body, _ := json.Marshal(newUser)

			req := httptest.NewRequest(http.MethodPost, "/users", bytes.NewReader(body))
			req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
			rec := httptest.NewRecorder()
			c := e.NewContext(req, rec)

			err := handlers.SaveUser(c)
			Expect(err).ShouldNot(HaveOccurred())

			Expect(rec.Code).To(Equal(http.StatusCreated))

			var createdUser models.User
			err = json.Unmarshal(rec.Body.Bytes(), &createdUser)
			Expect(err).ShouldNot(HaveOccurred())
			Expect(createdUser.UserID).To(Equal(int64(2)))
			Expect(createdUser.UserName).To(Equal("bob456"))
		})
	})

	Describe("GetUser", func() {
		It("should return a user by ID", func() {
			req := httptest.NewRequest(http.MethodGet, "/users/1", nil)
			rec := httptest.NewRecorder()
			c := e.NewContext(req, rec)
			c.SetParamNames("id")
			c.SetParamValues("1")

			err := handlers.GetUser(c)
			Expect(err).ShouldNot(HaveOccurred())
			Expect(rec.Code).To(Equal(http.StatusOK))

			var u models.User
			err = json.Unmarshal(rec.Body.Bytes(), &u)
			Expect(err).ShouldNot(HaveOccurred())
			Expect(u.UserName).To(Equal("alice123"))
		})

		It("should return 404 if user not found", func() {
			req := httptest.NewRequest(http.MethodGet, "/users/99", nil)
			rec := httptest.NewRecorder()
			c := e.NewContext(req, rec)
			c.SetParamNames("id")
			c.SetParamValues("99")

			err := handlers.GetUser(c)
			Expect(err).ShouldNot(HaveOccurred())
			Expect(rec.Code).To(Equal(http.StatusNotFound))
		})
	})
})
