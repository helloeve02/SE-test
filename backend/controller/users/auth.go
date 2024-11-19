package users

import (
    "errors"
    "net/http"
    "github.com/gin-gonic/gin"
    "golang.org/x/crypto/bcrypt"
    "gorm.io/gorm"
    "example.com/sa-67-example/config"
    "example.com/sa-67-example/entity"
    "example.com/sa-67-example/services"
)

type (
    Authen struct {
        UserName string 
        Password string 
    }

    signUp struct {
        UserName string   
        Email    string 
        Password string 
    }

    ResetPassword struct {
        UserName string   
        Email    string 
        Password string 
    }
)

func ResetPasswordUser(c *gin.Context) {
    var payload ResetPassword
    if err := c.ShouldBindJSON(&payload); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    var user entity.Users
    db := config.DB()

    // ค้นหาผู้ใช้ด้วย Username และ Email
    result := db.Where("username = ? AND email = ?", payload.UserName, payload.Email).First(&user)
    if result.Error != nil {
        if errors.Is(result.Error, gorm.ErrRecordNotFound) {
            c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
        } else {
            c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
        }
        return
    }

    // แฮชรหัสผ่านใหม่
    hashedPassword, err := config.HashPassword(payload.Password)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
        return
    }

    // อัปเดตรหัสผ่านในฐานข้อมูล
    user.Password = hashedPassword
    if err := db.Save(&user).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update password"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Password reset successful"})
}

func SignUp(c *gin.Context) {
    var payload signUp
    if err := c.ShouldBindJSON(&payload); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    db := config.DB()
    var userCheck entity.Users

    // ตรวจสอบว่า username มีในฐานข้อมูลหรือยัง
    result := db.Where("username = ?", payload.UserName).First(&userCheck)
    if result.Error != nil && !errors.Is(result.Error, gorm.ErrRecordNotFound) {
        c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
        return
    }

    if userCheck.ID != 0 {
        c.JSON(http.StatusConflict, gin.H{"error": "Username is already registered"})
        return
    }

    // แฮชรหัสผ่าน
    hashedPassword, _ := config.HashPassword(payload.Password)

    // สร้างผู้ใช้ใหม่
    user := entity.Users{
        Email:    payload.Email,
        UserName: payload.UserName,
        Password: hashedPassword,
        Role:     "User",
        FirstName: "",
        LastName: "",
        Phone: "",
        Seller: true,
    }

    // บันทึกผู้ใช้ใหม่ลงในฐานข้อมูล
    if err := db.Create(&user).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"message": "Sign-up successful"})
}

// Sign-in (Login)
func SignIn(c *gin.Context) {
    var payload Authen
    var user entity.Users

    if err := c.ShouldBindJSON(&payload); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // ค้นหา user ด้วย Username ที่กรอก
    if err := config.DB().Raw("SELECT * FROM users WHERE username = ?", payload.UserName).Scan(&user).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // ตรวจสอบรหัสผ่าน
    err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(payload.Password))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "password is incorrect"})
        return
    }

    jwtWrapper := services.JwtWrapper{
        SecretKey:       "SvNQpBN8y3qlVrsGAYYWoJJk56LtzFHx",
        Issuer:          "AuthService",
        ExpirationHours: 24,
    }

    signedToken, err := jwtWrapper.GenerateToken(user.Email)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "error signing token"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"token_type": "Bearer", "token": signedToken, "id": user.ID})
}
