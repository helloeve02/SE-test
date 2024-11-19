package entity

import "gorm.io/gorm"

type OrderStatus struct {
	gorm.Model
	Status string

	Order	[]Orders `gorm:"foreignKey:OrderstatusID"`
}