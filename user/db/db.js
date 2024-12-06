const mongoose = require("mongoose");

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("User service connected to MongoDB");
    })
    .catch((err) => {
      console.log("Some error occurred :", err.message);
    });
}

module.exports = connectDB;
