const express = require("express");
require("../../pkg/db");
const get = require("../../pkg/config").get;
const { expressjwt: jwt } = require("express-jwt");
const {
  createHandler,
  readHandler,
  readByIdHandler,
  updateHandler,
  deleteHandler,
  getImageHandler,
} = require("./handlers");
const service = express();
const port = get("NEWS_PORT");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

service.use(express.json());
service.use(fileUpload());
service.use(cookieParser());
service.use(
  jwt({
    secret: get("JWT_SECRET"),
    algorithms: ["HS256"],
    getToken: function (req) {
      return req.cookies.token;
    },
  }).unless({
    path: [{ url: /.*/, method: "GET" }],
  })
);

service.post("/api/v1/news", createHandler);
service.get("/api/v1/news", readHandler);
service.get("/api/v1/news/:id", readByIdHandler);
service.get("/api/v1/news/images/:id", getImageHandler);
service.put("/api/v1/news/:id", updateHandler);
service.delete("/api/v1/news/:id", deleteHandler);

service.listen(port, () => {
  console.log(`News service is listening on port ${port}`);
});
