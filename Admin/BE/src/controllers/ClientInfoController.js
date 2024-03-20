const {
  getAllClientInfo,
  getAClientInfo,
} = require("../model/ClientInfoModel");

const getAClientInfoController = async (req, res, next) => {
  try {
    const _id = req.params;
    const result = await getAClientInfo(_id);
    if (!result) {
      const error = new Error("Client Info not found!!");
      error.statusCode = 404;
      return next(error);
    }
    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllClientInfoController = async (req, res, next) => {
  try {
    const result = await getAllClientInfo({});
    if (!result) {
      const error = new Error("Client Info not found!!");
      error.statusCode = 404;
      return next(error);
    }
    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAClientInfoController,
  getAllClientInfoController,
};
