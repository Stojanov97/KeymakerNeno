const CreateNews = {
  title:"required|string",
  content: "required|string",
};

const UpdateNews = {
  title: "string",
  content: "string",
};

module.exports = {
  CreateNews,
  UpdateNews,
};
