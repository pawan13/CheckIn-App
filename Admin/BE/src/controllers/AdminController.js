const { createAdmin, getAdmin, updateAdmin } = require("../model/AdminModel");
const { deleteSession } = require("../model/SessionModel");
const { comparePassword, hashPassword } = require("../service/bcrypt");
const { createAccessJWT, createRefreshJWT } = require("../service/jwt");

const createAdminRegistrationController = async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashPassword(password);
    await createAdmin(req.body);
    res.json({
      status: "SUCCESS",
      message: "You have successfully registered!!",
    });
  } catch (error) {
    next(error, "Not registered");
  }
};

const loginAdminController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const Admin = await getAdmin({ email });

    if (Admin?._id) {
      const isPassValid = comparePassword(password, Admin?.password);

      if (isPassValid) {
        const accessJWT = await createAccessJWT({ email });
        const refreshJWT = await createRefreshJWT({ email });
        return res.json({
          status: "SUCCESS",
          message: "Login Success",
          token: {
            accessJWT,
            refreshJWT,
          },
        });
      }
    }
    res.status(403).json({
      status: "ERROR",
      message: " Invalid login Details",
    });
  } catch (error) {
    next(error);
  }
};

const getAdminInfo = (req, res, next) => {
  try {
    res.json({
      status: "SUCCESS",
      admin: req.adminInfo,
    });
  } catch (e) {
    next(e);
  }
};

const logoutAdminController = async (req, res, next) => {
  try {
    const { accessJWT, refreshJWT } = req.body;

    //remove accessJWt from session model
    await deleteSession(accessJWT);
    //remove refershJWT from the model
    await updateAdmin(
      { refreshJWT },
      {
        refreshJWT: "",
      }
    );
    res.json({
      status: "SUCCESS",
      message: "Logout Success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAdminRegistrationController,
  loginAdminController,
  getAdminInfo,
  logoutAdminController,
};
