package entity 

import "gorm.io/gorm"

type PromotionProduct struct {
	gorm.Model
	DiscountValue int
}