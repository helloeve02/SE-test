package entity

import "gorm.io/gorm"

type InvoiceType struct {
	gorm.Model
	Type string
}