const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
      })
      .then(() => {
        console.log("MongoDB Connected");
      });
  } catch (err) {
    console.log(err.message);
    //Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
