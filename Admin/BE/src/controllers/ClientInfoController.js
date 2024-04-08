const {
  getAllClientInfo,
  getAClientInfoById,
} = require("../model/ClientInfoModel");
const { createSession } = require("../model/SessionModel");

const getAClientInfoController = async (req, res, next) => {
  try {
    const _id = req.params;
    const result = await getAClientInfoById(_id);
    console.log(result);
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
    console.log("result", result);
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
