const BookFlight = require("../models/BookFlightModel");

const createBookFlight = async (req, res, next) => {
  const bookFlight = new BookFlight({ ...req.body });

  try {
    await bookFlight.save();
    res
      .status(201)
      .json({ message: "Your flight reservation has been made", bookFlight });
  } catch (error) {
    next(error);
  }
};

const getBookFlight = async (req, res, next) => {
  const bookFlight = await BookFlight.find({}).sort({ createdAt: -1 });
  try {
    res.status(200).json(bookFlight);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBookFlight, getBookFlight };
