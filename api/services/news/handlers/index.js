const { get, create, update, remove } = require("../../../pkg/news");
const { CreateNews, UpdateNews } = require("../../../pkg/news/validate");
const { validate } = require("../../../pkg/validator");
const {
  downloadAll,
  updateFile,
  upload,
  removeFile,
} = require("../../../pkg/files");

const createHandler = async (req, res) => {
  try {
    const { admin } = req.auth;
    if (admin === false) throw { code: 401, error: "You aren't an admin" };
    await validate(req.body, CreateNews);
    let news = await create(req.body);
    req.files && upload(req.files.photo, "news", news._id);
    return res.status(201).send("success");
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      err: err || "Internal server error",
    });
  }
};

const readHandler = async (req, res) => {
  try {
    let news = await get();
    let photos = await downloadAll("news");
    news = news.map((newss) => {
      return {
        ...newss._doc,
        ...{ photo: photos.find(({ id }) => newss._doc._id == id) || false },
      };
    });
    return await res.json(news);
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
    const { id } = req.params;
    let data = req.body;
    await validate(data, UpdateNews);
    if (req.body.removePhoto === "true") {
      await removeFile("news", id);
    }
    req.files && updateFile(req.files.photo, "news", id);
    await update(id, data);
    return await res.json({ success: true });
  } catch (err) {
    return res
      .status(err.code || 500)
      .json({ success: false, err: err.error || "Internal server error" });
  }
};

const deleteHandler = async (req, res) => {
  try {
    const { admin } = req.auth;
    if (admin === false) throw { code: 401, error: "You aren't an admin" };
    const { id } = req.params;
    await remove(id);
    await removeFile("item", id);
    return await res.json({ success: true });
  } catch (err) {
    return res
      .status(err.code || 500)
      .json({ success: false, err: err.error || "Internal server error" });
  }
};

module.exports = {
  createHandler,
  readHandler,
  updateHandler,
  deleteHandler,
};