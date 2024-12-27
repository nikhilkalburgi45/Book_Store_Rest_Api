const mongoose = require("mongoose");

const connectb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connection Sucessfull");
  } catch (error) {
    console.log("Mongodb Connection Failed");
    process.exit(1);
  }
};

module.exports = connectb;
