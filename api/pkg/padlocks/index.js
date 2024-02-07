const mongoose = require("mongoose");

const PadlockSchema = new mongoose.Schema(
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
    dim: {
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

const Padlock = mongoose.model("Padlock", PadlockSchema, "padlocks");

const create = async (data) => {
  try {
    const newPadlock = new Padlock(data);
    return await newPadlock.save();
  } catch (err) {
    throw new Error(err);
  }
};

const get = async () => {
  try {
    return await Padlock.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getByID = async (id) => {
  try {
    return await Padlock.findOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (id, data) => {
  try {
    return await Padlock.updateOne({ _id: id }, data);
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (id) => {
  try {
    return await Padlock.deleteOne({ _id: id });
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
