package entity

import "gorm.io/gorm"

type HelpCenterStatus struct {
	gorm.Model
	Status string
}