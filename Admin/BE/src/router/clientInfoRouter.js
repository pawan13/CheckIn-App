const express = require("express");
const {
  getAClientInfoController,
  getAllClientInfoController,
} = require("../controllers/ClientInfoController");

const ClientInfoRouter = express.Router();

// CRUD

ClientInfoRouter.get("/:_id", getAClientInfoController);
ClientInfoRouter.get("/", getAllClientInfoController);

module.exports = {
  ClientInfoRouter,
};
