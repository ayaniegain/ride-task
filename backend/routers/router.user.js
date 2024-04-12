const express = require('express')

const router = express.Router();

const {
  getAllUser,
  singleUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../controller/user.controller");

router
  .get("/user", getAllUser)
  .get("/user/:id", singleUser)
  .delete("/user/:id", deleteUser)
  .put("/user/:id", updateUser)
  .post("/user/", createUser);

module.exports = router;
