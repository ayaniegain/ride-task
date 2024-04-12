const { response } = require("express");
const User = require("../models/model.user");
const getAllUser = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Log the retrieved users to the console

    // Send the users as a response
    res.status(200).json(users);
  } catch (err) {
    // Handle any errors that occur during the operation
    console.error('Error fetching users:', err);
    res.status(500).json({ error: err.message });
  }
};

const singleUser = async (req, res) => {
  try {
    const response = await User.findOne({ _id: req.params.id });


    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
   let user= await User.findByIdAndDelete({ _id: req.params.id });


    res.status(201).json({user });

  } catch (err) {
    return res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { firstname, lastname, phone, alternativeno, email } = req.body;

    const userId = req.params.id;
    const update = {
      firstname,
      lastname,
      phone,
      alternativeno,
      email,
    };

    let user=await User.findOneAndUpdate({ _id: userId }, update);

    res.status(201).json(user);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, phone, alternativeno, email } = req.body;
    const newUser = new User({
      firstname,
      lastname,
      phone,
      alternativeno,
      email,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { getAllUser, singleUser, deleteUser, updateUser, createUser };
