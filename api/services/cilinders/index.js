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
const port = get("CILINDERS_PORT");
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
      { url: "/api/v1/cilinders", method: "POST" },
      { url: /\/api\/v1\/cilinders\/.*/, methods: ["PUT", "DELETE"] },
    ],
  })
);

service.post("/api/v1/cilinders", createHandler);
service.get("/api/v1/cilinders", getHandler);
service.get("/api/v1/cilinders/:id", getByIDHandler);
service.put("/api/v1/cilinders/:id", updateHandler);
service.delete("/api/v1/cilinders/:id", removeHandler);

service.listen(port, () => {
  console.log(`Cilinders service is listening on port ${port}`);
});
