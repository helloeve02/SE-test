package entity

import "gorm.io/gorm"

type Notifications struct {
	gorm.Model
	Content string
}