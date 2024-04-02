const express = require("express");
const {
  createAdminRegistrationController,
  loginAdminController,
  logoutAdminController,
  getAdminInfo,
} = require("../controllers/AdminController");
const { auth, refreshAuth } = require("../middleware/auth");
const AdminRouter = express.Router();

AdminRouter.post("/", createAdminRegistrationController);
AdminRouter.get("/get-accessjwt", refreshAuth);
AdminRouter.post("/login", loginAdminController);
AdminRouter.get("/info", auth, getAdminInfo);
AdminRouter.post("/logout", logoutAdminController);

module.exports = {
  AdminRouter,
};
