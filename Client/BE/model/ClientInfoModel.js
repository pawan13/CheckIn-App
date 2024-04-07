const mongoose = require("mongoose");

const ClientInfoSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    visitorType: {
      type: String,
      enum: ["Buyer", "Visitor", "Entrepreneur"],
      default: "Visitor",
      required: true,
    },
    checkedOut: {
      type: String,
      default: "Not yet",
    },
    isVerified: {
      type: String,
      default: "Not Verified",
    },
    allowPromotion: {
      type: Boolean,
      default: true,
    },
    recaptchaToken: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const ClientInfo = mongoose.model("ClientInfo", ClientInfoSchema);
const createClientInfo = (ClientObj) => ClientInfo.create(ClientObj);
const getAClientInfo = (filter) => ClientInfo.findOne(filter);
const getAllClientInfo = (filter) => ClientInfo.find(filter);
const replaceClientInfo = (filter, updateObj) =>
  ClientInfo.findOneAndReplace(filter, updateObj);
const updateClientInfo = (filter, updateObj) =>
  ClientInfo.findOneAndUpdate(filter, updateObj);

module.exports = {
  createClientInfo,
  getAllClientInfo,
  getAClientInfo,
  replaceClientInfo,
  updateClientInfo,
};
