const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectMongoDB = require("./db/connect");
const path = require("path");
// route
const userRoutes = require("./routes/userRoute");
const bookFlightRoutes = require("./routes/bookFlightRoute");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

path.resolve();

/** */
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/bookFlight", bookFlightRoutes);

app.use(express.static(path.join(path.resolve(), "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "client", "dist", "index.html"));
});
const port = process.env.PORT || 5000;
connectMongoDB();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
