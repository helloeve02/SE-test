package entity

import (
	"time"

	"gorm.io/gorm"
)

type HelpCenter struct {
	gorm.Model
	Date time.Time
	Subject string
	Description string
	Image string

}