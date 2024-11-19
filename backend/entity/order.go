package entity

import (
	"time"
	"gorm.io/gorm"
)

type Orders struct {
	gorm.Model
	TotalPrice int
	OrderDate time.Time

	OrderstatusID uint      
	UserID        uint      
	PaymentID     uint      

	Shipping	[]Shipping 	`gorm:"foreignKey:OrderID"`
	Orderitem	[]OrderItems `gorm:"foreignKey:OrderID"`
}