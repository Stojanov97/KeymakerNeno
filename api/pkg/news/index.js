const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  content_mk: {
    required: true,
    type: String,
  },
  title_mk: {
    required: true,
    type: String,
  },
  content_en: {
    required: true,
    type: String,
  },
  title_en: {
    required: true,
    type: String,
  },
});

const News = mongoose.model("News", newsSchema, "news");

const create = async (data) => {
  try {
    const newNews = new News(data);
    return await newNews.save();
  } catch (err) {
    throw new Error(err);
  }
};

const get = async () => {
  try {
    return await News.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getById = async (id) => {
  try {
    return await News.findOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (id, data) => {
  try {
    return await News.updateOne({ _id: id }, data);
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (id) => {
  try {
    return await News.deleteOne({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  create,
  get,
  getById,
  update,
  remove,
};
