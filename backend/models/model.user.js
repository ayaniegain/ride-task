const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    alternativeno: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("users", userSchema);
module.exports=User