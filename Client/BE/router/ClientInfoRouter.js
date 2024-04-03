const express = require("express");
const {
  createClientInfoController,
  getAllClientInfoController,
  generateOTP,
  verifyOTP,
  updateClientInfoController,
} = require("../controllers/ClientInfoController");

const ClientInfoRouter = express.Router();

ClientInfoRouter.post("/", createClientInfoController);
ClientInfoRouter.get("/", getAllClientInfoController);
ClientInfoRouter.post("/update", updateClientInfoController);
ClientInfoRouter.post("/request-otp", generateOTP);
ClientInfoRouter.post("/verify-otp", verifyOTP);

module.exports = {
  ClientInfoRouter,
};
