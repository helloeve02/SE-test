package entity

import "gorm.io/gorm"

type OrderItems struct {
	gorm.Model
	Quantity int
	Price int
	TotalPrice  float32 

	OrderID     uint    
	ProductID   uint    
	UserID	uint
}