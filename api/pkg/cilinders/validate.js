const CreateCilinder = {
  manufacturer: "required|string",
  type: "required|string",
  item: "required|string",
  dim1: "required|decimal",
  dim2: "required|decimal",
  price: "required|decimal",
};
const UpdateCilinder = {
  manufacturer: "string",
  type: "string",
  item: "string",
  dim1: "decimal",
  dim2: "decimal",
  price: "decimal",
};

module.exports = {
  CreateCilinder,
  UpdateCilinder,
};
