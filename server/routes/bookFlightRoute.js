const express = require("express");
const {
  getBookFlight,
  createBookFlight,
  deleteBookFlight,
  getBookFlightUserId,
} = require("../controllers/BookFlightController");

const router = express.Router();

router.get("/", getBookFlight);
router.get("/:userId", getBookFlightUserId)
router.post("/", createBookFlight);
router.delete("/:id", deleteBookFlight)

module.exports = router;
