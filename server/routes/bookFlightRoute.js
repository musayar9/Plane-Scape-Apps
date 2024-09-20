const express = require("express");
const {
  getBookFlight,
  createBookFlight,
  deleteBookFlight,
} = require("../controllers/BookFlightController");
const router = express.Router();

router.get("/", getBookFlight);
router.post("/", createBookFlight);
router.delete("/:id", deleteBookFlight)

module.exports = router;
