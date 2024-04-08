const express = require("express");
const {
  createClientInfoController,
  getAllClientInfoController,
  verifyOTP,
  replaceClientInfoController,
  updateClientCheckOutInfoController,
  updateClientEmailVerifiedInfoController,
  generateOTP,
} = require("../controllers/ClientInfoController");

const ClientInfoRouter = express.Router();

ClientInfoRouter.post("/", createClientInfoController);
ClientInfoRouter.get("/", getAllClientInfoController);
ClientInfoRouter.post("/replace", replaceClientInfoController);
ClientInfoRouter.patch("/updateCheckout", updateClientCheckOutInfoController);
ClientInfoRouter.patch(
  "/updateEmailVerified",
  updateClientEmailVerifiedInfoController
);
ClientInfoRouter.post("/request-otp", generateOTP);
ClientInfoRouter.post("/verify-otp", verifyOTP);

module.exports = {
  ClientInfoRouter,
};
