const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));

// Handle requests to the root URL by serving the "index.html" file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
