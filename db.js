const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/";

mongoose
  .connect(dbUrl)
  .then(() => console.log("server Connected to DB successfully"))
  .catch((err) => console.log(err));
