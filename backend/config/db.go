package config

import (
	"example.com/sa-67-example/entity"
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("sedatabase.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {
    // Automigrate Tables
    err := db.AutoMigrate(
        &entity.CartItems{},
        &entity.Orders{},
        &entity.OrderItems{},
        &entity.OrderStatus{},
        &entity.Products{},
        &entity.Shipping{},
        &entity.ShippingStatus{},
        &entity.Users{},
		&entity.Payment{},
    )
    if err != nil {
        panic("failed to migrate database: " + err.Error())
    }
    fmt.Println("Database tables migrated successfully")

    // Seed Users
    hashedPassword, _ := HashPassword("123456")
    users := []entity.Users{
        {FirstName: "Supaluck", LastName: "Tohthong", Email: "se@gmail.com", UserName: "Eveamare", Password: hashedPassword, Phone: "0987654321", Seller: true, Role: "User"},
        {FirstName: "danuporn", LastName: "seesin", Email: "aum@gmail.com", UserName: "aumaa", Password: hashedPassword, Phone: "0921345671", Seller: false, Role: "User"},
        {FirstName: "admin", LastName: "adminaa", Email: "admin@gmail.com", UserName: "adminjaa", Password: hashedPassword, Phone: "0999999999", Seller: false, Role: "Admin"},
    }

    for _, user := range users {
        if err := db.Create(&user).Error; err != nil {
            fmt.Printf("failed to seed user %s: %v\n", user.UserName, err)
        }
    }
    fmt.Println("Seed data added successfully")
}
