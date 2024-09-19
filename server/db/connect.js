const mongoose = require("mongoose");

const connectMongoDB = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected MongoDD"))
    .catch((err) => console.log(err));
};

module.exports = connectMongoDB;
