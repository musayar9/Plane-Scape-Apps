const mongoose = require("mongoose");

const BookFlightSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    flightId: { type: String, required: true },
    airlineCode: { type: Number, required: true },
    estimatedLandingTime: { type: Date },
    flightDirection: { type: String, required: true },
    flightName: { type: String, required: true },
    flightNumber: { type: Number, required: true },
    prefixIATA: { type: String, required: true },
    prefixICAO: { type: String, required: true },
    price: {
      economyClass: { type: Number },
      comfortClass: { type: Number },
      mainClass: { type: Number },
      business: { type: Number },
    },
    publicFlightState: {
      flightStates: [{ type: String }],
    },
    route: {
      destinations: [{ type: String, required: true }],
      eu: { type: String, required: true },
      visa: { type: Boolean, required: true },
    },
    scheduleDateTime: { type: Date, required: true },
    serviceType: { type: String },
  },
  { timestamps: true }
);

const BookFlight = mongoose.model("BookFlight", BookFlightSchema);
module.exports = BookFlight;
