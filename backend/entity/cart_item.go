package entity

import "gorm.io/gorm"

type CartItems struct {
	gorm.Model
	Quantity    int     
	Price       float64 
	TotalPrice  float64 

	ProductID   uint    
	UserID	uint
}