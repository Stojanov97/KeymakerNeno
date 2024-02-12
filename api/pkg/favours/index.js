const mongoose = require("mongoose");

const favourSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    category: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Favours = mongoose.model("Favours", favourSchema, "favours");

const create = async (data) => {
  try {
    const newFavour = new Favours(data);
    return await newFavour.save();
  } catch (err) {
    throw new Error(err);
  }
};

const get = async () => {
  try {
    return await Favours.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getByID = async (id) => {
  try {
    return await Favours.findOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const getByCategory = async (cat) => {
  try {
    return await Favours.findOne({ category: cat });
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (id, data) => {
  try {
    return await Favours.updateOne({ _id: id }, data);
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (id) => {
  try {
    return await Favours.deleteOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  create,
  get,
  getByID,
  getByCategory,
  update,
  remove,
};
