package entity

import "gorm.io/gorm"

type Products struct {
	gorm.Model
	Name string
	Description string
	Price int
	Stock uint

	// BrandID	uint
	// StatusID	uint
	UserID		uint
	// CategoryID	uint

	Cartitem	[]CartItems	`gorm:"foreignKey:ProductID"`
	Orderitem	[]OrderItems `gorm:"foreignKey:ProductID"`
}