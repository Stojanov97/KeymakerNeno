const CreatePadlock = {
  manufacturer: "required|string",
  type: "required|string",
  item: "required|string",
  dim: "required|decimal",
  price: "required|decimal",
};

const UpdatePadlock = {
  manufacturer: "string",
  type: "string",
  item: "string",
  dim: "decimal",
  price: "decimal",
};

module.exports = {
  CreatePadlock,
  UpdatePadlock,
};
