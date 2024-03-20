const {
  createVisitor,
  getVisitorsByFilter,
  getVisitorById,
  updateVisitorsById,
  deleteVisitorsById,
} = require("../model/visitorTypeModel");

const createVisitorController = async (req, res, next) => {
  try {
    const obj = { ...req.body };
    await createVisitor(obj);
    res.json({
      status: "SUCCESS",
      message: "New vistor category is created.",
    });
  } catch (error) {
    next(error);
  }
};
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
const updateVisitorController = async (req, res, next) => {
  try {
    const _id = req.params;
    const result = await updateVisitorsById(_id, req.body);
    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteVisitorController = async (req, res, next) => {
  try {
    const _id = req.params;
    const result = await deleteVisitorsById(_id);

    if (!result) {
      const error = new Error("Not found");
      error.statusCode = 404;
      return next(error);
    }
    res.json({
      status: "SUCCESS",
      message: "Sucessfully deleted!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVisitorController,
  getAllVisitorsController,
  getAVisitorController,
  updateVisitorController,
  deleteVisitorController,
};
