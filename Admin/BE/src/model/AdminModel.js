const mongoose = require("mongoose");

const adminModel = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshJWT: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("admin", adminModel);
const createAdmin = (obj) => Admin.create(obj);
const getAdmin = (filter) => Admin.findOne(filter);
const updateAdmin = (filter, updateObj) =>
  Admin.findOneAndUpdate(filter, updateObj);

module.exports = {
  createAdmin,
  getAdmin,
  updateAdmin,
};
