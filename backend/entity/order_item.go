package entity

import "gorm.io/gorm"

type OrderItems struct {
	gorm.Model
	Quantity int
	Price int
}