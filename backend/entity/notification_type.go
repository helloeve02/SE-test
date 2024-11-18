package entity

import "gorm.io/gorm"

type NotificationType struct {
	gorm.Model
	Type string
	Description string
}