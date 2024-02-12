const express = require("express");
require("../../pkg/db");
const get = require("../../pkg/config").get;
const {
  registerHandler,
  loginHandler,
  logoutHandler,
  refreshToken,
} = require("./handlers");
const cookieParser = require("cookie-parser");
const {expressjwt:jwt} = require("express-jwt")
const service = express();
const port = get("AUTH_PORT");

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
      /.*/
    ],
  })
);

service.post("/api/v1/auth/refreshToken", refreshToken)
service.post("/api/v1/auth/login", loginHandler );
service.post("/api/v1/auth/register", registerHandler);
service.delete("/api/v1/auth", logoutHandler)

service.listen(port, () => console.log(`Auth started on port ${port}!`));
