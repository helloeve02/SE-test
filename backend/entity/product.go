package entity

import "gorm.io/gorm"

type Products struct {
	gorm.Model
	Name string
	Description string
	Price int
	Stock uint
}