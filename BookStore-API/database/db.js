const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://nehathakur2308_db_user:nehathakur2303_db_user@cluster0.q505ux2.mongodb.net/'
    );
    console.log('mongodb is connected successfully')
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB();