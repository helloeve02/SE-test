package entity

import "gorm.io/gorm"

type Topics struct {
	gorm.Model
	Topic string
}