const {
  create,
  get,
  getByID,
  update,
  remove,
} = require("../../../pkg/cilinders");
const {
  CreateCilinder,
  UpdateCilinder,
} = require("../../../pkg/cilinders/validate");
const { validate } = require("../../../pkg/validator");

const createHandler = async (req, res) => {
  try {
    await validate(req.body, CreateCilinder);
    const data = await create(req.body);
    res.status(201).json({ data: data, success: true });
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      err: err || "Internal server error",
    });
  }
};

const getHandler = async (req, res) => {
  try {
    const data = await get();
    res.status(200).json({ data: data, success: true });
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      err: err || "Internal server error",
    });
  }
};

const getByIDHandler = async (req, res) => {
  try {
    const data = await getByID(req.params.id);
    res.status(200).json({ data: data, success: true });
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      err: err || "Internal server error",
    });
  }
};

const updateHandler = async (req, res) => {
  try {
    await validate(req.body, UpdateCilinder);
    const data = await update(req.params.id, req.body);
    res.status(200).json({ data: data, success: true });
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      err: err || "Internal server error",
    });
  }
};

const removeHandler = async (req, res) => {
  try {
    const data = await remove(req.params.id);
    res.status(200).json({ data: data, success: true });
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      err: err || "Internal server error",
    });
  }
};

module.exports = {
  createHandler,
  getHandler,
  getByIDHandler,
  updateHandler,
  removeHandler,
};
