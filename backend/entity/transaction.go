package entity

import "gorm.io/gorm"

type Transactions struct {
	gorm.Model
	Amount int
	History string
}