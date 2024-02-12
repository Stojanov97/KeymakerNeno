const path = require("path");
const proxy = require("express-http-proxy");
const express = require("express");
const get = require("../../pkg/config").get;
const server = express();

const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,PATCH,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  res.header(`Access-Control-Allow-Credentials`, true);
  next();
};

server.use(allowCrossDomain);

server.use(
  "/api/v1/auth",
  proxy(`http://127.0.0.1:${get("AUTH_PORT")}`, {
    proxyReqPathResolver: (req) =>
      `http://127.0.0.1:${get("AUTH_PORT")}/api/v1/auth${req.url}`,
  })
);

server.use(
  "/api/v1/cilinders",
  proxy(`http://127.0.0.1:${get("CILINDERS_PORT")}`, {
    proxyReqPathResolver: (req) =>
      `http://127.0.0.1:${get("CILINDERS_PORT")}/api/v1/cilinders${req.url}`,
  })
);

server.use(
  "/api/v1/padlocks",
  proxy(`http://127.0.0.1:${get("PADLOCKS_PORT")}`, {
    proxyReqPathResolver: (req) =>
      `http://127.0.0.1:${get("PADLOCKS_PORT")}/api/v1/padlocks${req.url}`,
  })
);

server.use(
  "/api/v1/favours",
  proxy(`http://127.0.0.1:${get("FAVOURS_PORT")}`, {
    proxyReqPathResolver: (req) =>
      `http://127.0.0.1:${get("FAVOURS_PORT")}/api/v1/favours${req.url}`,
  })
);


// server.use("/", express.static(path.join(__dirname, "../../../web/build")));
// server.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../../web/build", "index.html"));
// });
const PORT = get("APP_PORT") || 3000;

server.listen(PORT, (err) =>
  err ? console.log(err) : console.log("Proxy started successfully")
);