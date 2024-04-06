const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//Basic Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const { visitorRouter } = require("./src/router/VisitorTypeRouter.js");
const dbConnect = require("./src/config/mongoDB.js");
const { ClientInfoRouter } = require("./src/router/ClientInfoRouter.js");
const { AdminRouter } = require("./src/router/AdminRouter.js");

//health check
app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "server is live",
  });
});
app.use("/api/v1/visitor", visitorRouter);
app.use("/api/v1/client", ClientInfoRouter);
app.use("/api/v1/admin", AdminRouter);

app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "Error",
    message: err.message,
  });
});

dbConnect()
  .then(() => {
    app.listen(PORT, (error) =>
      error
        ? console.log(error)
        : console.log(`Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(`DB connection error `, error);
  });
