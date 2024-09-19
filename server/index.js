const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectMongoDB = require("./db/connect");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();

const port = process.env.PORT || 5000;
connectMongoDB();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
