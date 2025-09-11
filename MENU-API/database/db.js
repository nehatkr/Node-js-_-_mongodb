const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nehathakur2308_db_user:nehathakur2300@cluster0.e8ymlfo.mongodb.net/"
    );
    console.log("mongodb is connected successfully");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB();