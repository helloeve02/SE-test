package entity

import (
	"time"

	"gorm.io/gorm"
)

type MailBox struct {
	gorm.Model
	Date time.Time
	AdminResponse string
}