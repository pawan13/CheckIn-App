const express = require("express");
const {
  getAllVisitorsController,
  getAVisitorController,
} = require("../controllers/VisitorTypeController.js");

const visitorTypeRouter = express.Router();

//READ
visitorTypeRouter.get("/", getAllVisitorsController);
visitorTypeRouter.get("/:_id", getAVisitorController);

module.exports = {
  visitorTypeRouter,
};
