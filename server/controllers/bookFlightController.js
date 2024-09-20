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

const deleteBookFlight = async (req, res, next) => {
  const { id } = req.params;
  const isBookFlight = await BookFlight.findById({ _id: id });

  try {
    if (!isBookFlight) {
      return res
        .status(400)
        .json({ message: "No flight regsitered found to delete" });
    }
    await BookFlight.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "Flight cancelled" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBookFlight, getBookFlight, deleteBookFlight };
