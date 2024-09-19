const express = require("express");
const {
  getBookFlight,
  createBookFlight,
} = require("../controllers/BookFlightController");
const router = express.Router();

router.get("/", getBookFlight);
router.post("/", createBookFlight);

module.exports = router;
