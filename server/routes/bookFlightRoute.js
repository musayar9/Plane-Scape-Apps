const express = require("express");
const {
  getBookFlight,
  createBookFlight,
  deleteBookFlight,
  getBookFlightUserId,
} = require("../controllers/BookFlightController");

const router = express.Router();

// GET isteği ile tüm uçuş rezervasyonlarını getiren route
router.get("/", getBookFlight);
// GET isteği ile userId'ye göre uçuş rezervasyonlarını getiren route
router.get("/:userId", getBookFlightUserId);
// POST isteği ile uçuş rezervasyon kaydı yapan route
router.post("/", createBookFlight);
// DELETE isteği ile params dan gelen id'ye uçuş rezervasyonun silme route
router.delete("/:id", deleteBookFlight);

module.exports = router; // router dışarı aktarıyoruz diğer dosyalarda da kullanılabilsin diye
