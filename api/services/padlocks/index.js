const express = require("express");
require("../../pkg/db");
const get = require("../../pkg/config").get;
const { expressjwt: jwt } = require("express-jwt");
const {
  createHandler,
  getHandler,
  getByIDHandler,
  updateHandler,
  removeHandler,
} = require("./handlers");
const service = express();
const port = get("PADLOCKS_PORT");
const cookieParser = require("cookie-parser");

service.use(cookieParser());
service.use(express.json());
service.use(
  jwt({
    secret: get("JWT_SECRET"),
    algorithms: ["HS256"],
    getToken: function (req) {
      return req.cookies.token;
    },
  }).unless({
    path: [
      { url: /.*/, method: "GET" },
    ],
  })
);

service.post("/api/v1/padlocks", createHandler);
service.get("/api/v1/padlocks", getHandler);
service.get("/api/v1/padlocks/:id", getByIDHandler);
service.put("/api/v1/padlocks/:id", updateHandler);
service.delete("/api/v1/padlocks/:id", removeHandler);

service.listen(port, () => {
  console.log(`Padlocks service is listening on port ${port}`);
});

