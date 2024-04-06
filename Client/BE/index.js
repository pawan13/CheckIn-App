const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

//Basic Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const { visitorTypeRouter } = require("./router/VisitorTypeRouter.js");
const { ClientInfoRouter } = require("./router/ClientInfoRouter.js");
const dbConnect = require("./config/mongoDB.js");
// const { verificationRouter } = require("./router/verificationRouter.js");
console.log(__dirname);
app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});
//health check
app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "server is live",
  });
});
app.use("/api/v1/visitor", visitorTypeRouter);
app.use("/api/v1/client", ClientInfoRouter);
// app.use("/api/v1/verification", verificationRouter);

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
