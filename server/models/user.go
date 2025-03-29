package models

type Status string

const (
	Inactive   Status = "I"
	Active     Status = "A"
	Terminated Status = "T"
)

type User struct {
	UserID     int64  `json:"id"`
	UserName   string `json:"username"`
	FirstName  string `json:"first_name"`
	LastName   string `json:"last_name"`
	Email      string `json:"email"`
	Status     Status `json:"status"`
	Department string `json:"department"`
}

var Users = []User{
	{
		UserID:     1,
		UserName:   "alice123",
		FirstName:  "Alice",
		LastName:   "Johnson",
		Email:      "alice@example.com",
		Status:     Active,
		Department: "Engineering",
	},
	{
		UserID:     2,
		UserName:   "bob456",
		FirstName:  "Bob",
		LastName:   "Smith",
		Email:      "bob@example.com",
		Status:     Inactive,
		Department: "Marketing",
	},
}
