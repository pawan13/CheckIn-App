const {
  getVisitorsByFilter,
  getVisitorById,
} = require("../model/VisitorTypeModel");

const getAllVisitorsController = async (req, res, next) => {
  try {
    const result = await getVisitorsByFilter({});
    if (!result) {
      const error = new Error("Not found");
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
const getAVisitorController = async (req, res, next) => {
  try {
    const _id = req.params;
    const result = await getVisitorById(_id);
    if (!result) {
      const error = new Error("Not found");
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
  getAllVisitorsController,
  getAVisitorController,
};
