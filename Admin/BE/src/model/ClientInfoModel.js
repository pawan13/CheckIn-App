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
      required: true,
    },
  },
  { timestamps: true }
);

const ClientInfo = mongoose.model("ClientInfo", ClientInfoSchema);
const getAClientInfo = (id) => ClientInfo.findById(id);
const getAllClientInfo = (filter) => ClientInfo.find(filter);

module.exports = {
  getAClientInfo,
  getAllClientInfo,
};
