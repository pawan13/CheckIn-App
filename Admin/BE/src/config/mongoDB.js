const mongoose = require("mongoose");

const mongoConnect = () => {
  const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/CheckIn_Apps";
  return mongoose.connect(DB_URL);
};

module.exports = mongoConnect;
