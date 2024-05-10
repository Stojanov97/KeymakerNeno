const {create, get, getByID, getByCategory, update, remove} = require("../../../pkg/favours")
const {CreateFavour, UpdateFavour} = require("../../../pkg/favours/validate")
const {validate} = require("../../../pkg/validator")


const createHandler = async (req, res) => {
    try {
      const { admin } = req.auth;
      if (admin === false) throw { code: 401, error: "You aren't an admin" };
      await validate(req.body, CreateFavour);
      const data = await create(req.body);
      return res.status(201).json({ data: data, success: true });
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
      return res.status(200).json({ data: data, success: true });
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
      return res.status(200).json({ data: data, success: true });
    } catch (err) {
      return res.status(err.code || 500).json({
        success: false,
        err: err || "Internal server error",
      });
    }
  };
  
  const getByCategoryHandler = async (req, res) => {
    try {
      const data = await getByCategory(req.params.category);
      return res.status(200).json({ data: data, success: true });
    } catch (err) {
      return res.status(err.code || 500).json({
        success: false,
        err: err || "Internal server error",
      });
    }
  };
  
  const updateHandler = async (req, res) => {
    try {
      const { admin } = req.auth;
      if (admin === false) throw { code: 401, error: "You aren't an admin" };
      await validate(req.body, UpdateFavour);
      const data = await update(req.params.id, req.body);
      return res.status(200).json({ data: data, success: true });
    } catch (err) {
      return res.status(err.code || 500).json({
        success: false,
        err: err || "Internal server error",
      });
    }
  };
  
  const removeHandler = async (req, res) => {
    try {
      const { admin } = req.auth;
      if (admin === false) throw { code: 401, error: "You aren't an admin" };
      const data = await remove(req.params.id);
      return res.status(200).json({ data: data, success: true });
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
    getByCategoryHandler,
    updateHandler,
    removeHandler,
  };
  