package entity

import (
	"time"
	"gorm.io/gorm"
)

type Promotions struct {
	gorm.Model
	Name string
	DiscountType bool
	Value int
	UsageLimit	int
	StartDate	time.Time
	EndDate	time.Time
}