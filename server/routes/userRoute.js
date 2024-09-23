const express = require("express");
const { register, getUsers, login } = require("../controllers/userController");
const router = express.Router();

// GET isteği ile tüm kullanıcıları getiren route
router.get("/", getUsers);
// POST isteği ile yeni kullanıcı kaydı yapan route
router.post("/register", register);

// POST isteği ile kullanıcı girişini gerçekleştiren route
router.post("/login", login);

module.exports = router; // router dışarı aktarıyoruz diğer dosyalarda da kullanılabilsin diye
