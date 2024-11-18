package entity


import (

   "time"

   "gorm.io/gorm"

)

type Users struct {

   gorm.Model

   FirstName string    `json:"first_name"`
   LastName  string    `json:"last_name"`
   UserName  string    `json:"user_name"`
   Phone     string    `json:"phone_number"`   
   Email     string    `json:"email"`
   Password  string    `json:"-"`
   Seller    bool      `json:"seller"`
   Role      string    `json:"role"`
   BirthDay  time.Time `json:"birthday"`
   GenderID  uint      `json:"gender_id"`
   Gender    *Genders  `gorm:"foreignKey: gender_id" json:"gender"`

}