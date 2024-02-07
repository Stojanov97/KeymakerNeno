require("dotenv").config();

const get = (value) => {
  return process.env[value] ? process.env[value] : null;
};

module.exports = { get };
