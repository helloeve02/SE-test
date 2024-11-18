package entity

import "gorm.io/gorm"

type Wallets struct {
	gorm.Model
	Balance float64
}