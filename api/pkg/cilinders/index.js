const mongoose = require("mongoose");

const CilinderSchema = new mongoose.Schema(
  {
    manufacturer: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    dim1: {
      type: Number,
      required: true,
    },
    dim2: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Cilinder = mongoose.model("Cilinder", CilinderSchema, "cilinder");

const create = async (product) => {
  try {
    const newCilinder = new Cilinder(product);
    return await newCilinder.save();
  } catch (err) {
    throw new Error(err);
  }
};

const get = async () => {
  try {
    return await Cilinder.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getByID = async (id) => {
  try {
    return await Cilinder.findOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (id, product) => {
  try {
    return await Cilinder.updateOne({ _id: id }, product);
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (id) => {
  try {
    return await Cilinder.deleteOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  create,
  get,
  getByID,
  update,
  remove,
};
