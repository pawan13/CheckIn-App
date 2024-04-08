const express = require("express");
const {
  getAClientInfoController,
  getAllClientInfoController,
  generateOTP,
} = require("../controllers/ClientInfoController");

const ClientInfoRouter = express.Router();

// CRUD

ClientInfoRouter.get("/:_id", getAClientInfoController);
ClientInfoRouter.get("/", getAllClientInfoController);

module.exports = {
  ClientInfoRouter,
};
