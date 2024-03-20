const express = require("express");
const {
  createVisitorController,
  getAllVisitorsController,
  getAVisitorController,
  updateVisitorController,
  deleteVisitorController,
} = require("../controllers/VisitorTypeController.js");

const visitorRouter = express.Router();

//CRUD

visitorRouter.post("/", createVisitorController);
visitorRouter.get("/", getAllVisitorsController);
visitorRouter.get("/:_id", getAVisitorController);
visitorRouter.put("/:_id", updateVisitorController);
visitorRouter.delete("/:_id", deleteVisitorController);

module.exports = {
  visitorRouter,
};
