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
const createVisitor = (catObj) => VisitorType.create(catObj);
const getVisitorById = (id) => VisitorType.findById(id);
const getVisitorsByFilter = (filter) => VisitorType.find(filter);
const updateVisitorsById = (id, updateObj) =>
  VisitorType.findByIdAndUpdate(id, updateObj, { new: true });
const deleteVisitorsById = (id) => VisitorType.findByIdAndDelete(id);
module.exports = {
  createVisitor,
  getVisitorById,
  getVisitorsByFilter,
  updateVisitorsById,
  deleteVisitorsById,
};
