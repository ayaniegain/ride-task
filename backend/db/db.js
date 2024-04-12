const mongoose = require('mongoose')
require('dotenv').config();

var url = process.env.MONGODB

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(url, {
       
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }


module.exports = connectDB;
