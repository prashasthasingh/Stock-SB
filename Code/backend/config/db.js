const mongoose = require("mongoose");

const connectToDB = () => {
  const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/Stocks";

  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MongoDB @ ${mongoURI}`);
    })
    .catch((e) => {
      console.error(`MongoDB connection error: ${e.message}`);
      console.error("Make sure MongoDB is running. Start it with: net start MongoDB");
      process.exit(1);
    });
};

module.exports = connectToDB;