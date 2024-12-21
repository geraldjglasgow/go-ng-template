package models

type UserStatus string

const (
	Inactive   UserStatus = "I"
	Active     UserStatus = "A"
	Terminated UserStatus = "T"
)

type User struct {
	UserID     int64      `json:"user_id"`
	UserName   string     `json:"user_name"`
	FirstName  string     `json:"first_name"`
	LastName   string     `json:"last_name"`
	Email      string     `json:"email"`
	UserStatus UserStatus `json:"user_status"`
	Department string     `json:"department"`
}

var Users = []User{
	{
		UserID:     1,
		UserName:   "alice123",
		FirstName:  "Alice",
		LastName:   "Johnson",
		Email:      "alice@example.com",
		UserStatus: Active,
		Department: "Engineering",
	},
	{
		UserID:     2,
		UserName:   "bob456",
		FirstName:  "Bob",
		LastName:   "Smith",
		Email:      "bob@example.com",
		UserStatus: Inactive,
		Department: "Marketing",
	},
}
