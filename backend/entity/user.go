package entity


import (

   "time"

   "gorm.io/gorm"

)

type Users struct {

   gorm.Model

   FirstName string    `json:"firstname"`
   LastName  string    `json:"lastname"`
   UserName  string    
   Phone     string    `json:"phone_number"`   
   Email     string    `json:"email"`
   Password  string    
   Seller    bool      `json:"seller"`
   Role      string    `json:"role"`
   BirthDay  time.Time `json:"birthday"`
   GenderID  uint      `json:"gender_id"`
   Gender    *Genders  `gorm:"foreignKey: gender_id" json:"gender"`

   Order	[]Orders	`gorm:"foreignKey:UserID"` 
	
	Cartitem	[]CartItems	`gorm:"foreignKey:UserID"`

	Orderitem	[]OrderItems	`gorm:"foreignKey:UserID"`

	Product	[]Products `gorm:"foreignKey:UserID"`
}