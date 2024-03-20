const express = require("express");
const {
  createClientInfoController,
} = require("../controllers/ClientInfoController");

const ClientInfoRouter = express.Router();

ClientInfoRouter.post("/", createClientInfoController);

module.exports = {
  ClientInfoRouter,
};
