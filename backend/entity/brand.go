package entity

import "gorm.io/gorm"

type Brands struct {
	gorm.Model
	Name string
	Description string
}