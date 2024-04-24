const mongoose = require("mongoose");

const mongoConnect = () => {
  const DB_URL = process.env.DB_URL || "mongodb://my-mongodb:27017/CheckIn_Apps";
  return mongoose.connect(DB_URL);
};

module.exports = mongoConnect;
