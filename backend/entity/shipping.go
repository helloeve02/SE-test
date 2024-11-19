package entity

import (
	"time"

	"gorm.io/gorm"
)

type Shipping struct {
	gorm.Model
	Fee int
	ShippingDate time.Time

	OrderID	uint
	ShippingstatusID	uint
}