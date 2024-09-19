const mongoose = require("mongoose");

const BookFlightSchema = new mongoose.Schema(
  {
    airlineCode: { type: Number, required: true },
    estimatedLandingTime: { type: Date},
    flightDirection: { type: String, required: true },
    flightName: { type: String, required: true },
    flightNumber: { type: Number, required: true },
    prefixIATA: { type: String, required: true },
    prefixICAO: { type: String, required: true },
    price: { type: String },
    publicFlightState: {
      flightStates: [{ type: String }],
    },
    route: {
      destinations: [{ type: String, required: true }],
      eu: { type: String, required: true },
      visa: { type: Boolean, required: true },
    },
    scheduleDateTime: { type: Date, required: true },
  },
  { timestamps: true }
);

const BookFlight = mongoose.model("BookFlight", BookFlightSchema);
module.exports = BookFlight;
