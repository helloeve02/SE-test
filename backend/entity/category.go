package entity

import "gorm.io/gorm"

type Categories struct {
	gorm.Model
	Name string
	Description string
}