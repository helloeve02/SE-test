package entity

import (
	"time"
	"gorm.io/gorm"
)

type Orders struct {
	gorm.Model
	TotalPrice int
	OrderDate time.Time
}