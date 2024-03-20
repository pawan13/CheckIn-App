const { createClientInfo } = require("../model/ClientInfoModel");

const createClientInfoController = async (req, res, next) => {
  try {
    await createClientInfo({ ...req.body });
    res.json({
      status: "SUCCESS",
      message: "New Client is created!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createClientInfoController,
};
