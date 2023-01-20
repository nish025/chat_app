const mongoose = require("mongoose");
const process = require("process");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Nisha:Nisha%401234@cluster0.izxw9oo.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB connected!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToMongoDB;
