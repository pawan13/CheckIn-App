const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const VisitorType = mongoose.model("visitortype", visitorSchema);
const getVisitorById = (id) => VisitorType.findById(id);
const getVisitorsByFilter = (filter) => VisitorType.find(filter);

module.exports = {
  getVisitorById,
  getVisitorsByFilter,
};
