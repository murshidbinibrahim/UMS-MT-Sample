const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10; //bcrypt applies a salt — a unique random string that makes the hash unpredictable

  return bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const user_create_get = (req, res) => {
  res.status(200).json({ msg: "GET-USER REGISTRATION" });
};

const user_create_post = async (req, res) => {
  const { username, password, address } = req.body;
  hashPassword(password)
    .then((hashedPassword) => {
      console.log(hashedPassword);
      return User.create({
        username: username,
        password: hashedPassword,
        address: address,
      });
    })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const user_update = (req, res) => {
  res.status(200).json({ msg: "UPDATE USER-DATA" });
};

const user_delete = (req, res) => {
  res.status(200).json({ msg: "DELETE USER-DATA" });
};

module.exports = {
  user_create_get,
  user_create_post,
  user_update,
  user_delete,
};
