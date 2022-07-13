const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(`No connection, Error : ${err}`);
  });
