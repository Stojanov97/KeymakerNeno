const mongoose = require("mongoose");
const get = require("../config").get;

const CLUSTER = get("DB_CLUSTER");
const NAME = get("DB_NAME");
const USERNAME = get("DB_USERNAME");
const PASSWORD = get("DB_PASSWORD");
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}/${NAME}?retryWrites=true&w=majority`;

(async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to DB");
  } catch (err) {
    throw new Error(err);
  }
})();
