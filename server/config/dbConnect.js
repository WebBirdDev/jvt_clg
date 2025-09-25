const mongoose = require("mongoose");

const connect_db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongo db connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error': ${error.message}`);
    process.exit(1);
  }
};

module.exports = connect_db;
