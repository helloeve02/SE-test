package entity

import "gorm.io/gorm"

type ProductStatus struct {
	gorm.Model
	Status string
}