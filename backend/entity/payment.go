package entity

import (
	"time"

	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	Amount int
	PaymentDate time.Time

	Order	[]Orders `gorm:"foreignKey:PaymentID"`
}