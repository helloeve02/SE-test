package entity

import "gorm.io/gorm"

type CartItems struct {
	gorm.Model
	Quantity int
}