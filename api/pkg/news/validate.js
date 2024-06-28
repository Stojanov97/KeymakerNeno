const CreateNews = {
  title_mk:"required|string",
  content_mk: "required|string",
  title_en:"required|string",
  content_en: "required|string",
};

const UpdateNews = {
  title_mk: "string",
  content_mk: "string",
  title_en: "string",
  content_en: "string",
};

module.exports = {
  CreateNews,
  UpdateNews,
};
