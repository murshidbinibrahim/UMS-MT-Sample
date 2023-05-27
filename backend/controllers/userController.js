const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const hashPassword = async (password) => {
  const saltRounds = 10; //bcrypt applies a salt — a unique random string that makes the hash unpredictable

  return bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
};

const user_list = async (req, res) => {
  try {
    const usersData = await User.find({}).sort({ createdAt: -1 });

    if (!usersData) {
      return res.status(404).json({ error: "No Records Found" });
    }
    const usersWithoutPassword = usersData.map(({ ...user }) => {
      const { password, ...userWithoutPassword } = user._doc;
      return userWithoutPassword;
    });
    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const user_detail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    const user = await User.findById(id);

    // Exclude the password field from the response
    const { password, ...responseUser } = user._doc;
    res.status(200).json(responseUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const user_create_post = (req, res) => {
  const { username, password, address } = req.body;
  const image = req.file ? req.file.filename : null; // Use req.file.filename instead of req.file

  if (!req.file) {
    console.log("please upload image");
    return res.status(400).send("No file uploaded.");
  }
  console.log(image);

  hashPassword(password)
    .then((hashedPassword) => {
      console.log(hashedPassword);

      return User.create({
        username: username,
        password: hashedPassword,
        image: image,
        address: address,
      });
    })
    .then((user) => {
      // Exclude the password field from the response
      const { password, ...responseUser } = user._doc;
      res.status(200).json(responseUser);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const user_update = async (req, res) => {
  const { id } = req.params;
  const { username, password, address } = req.body;
  const imageFile = req.file ? req.file.filename : null;

  try {
    const updatedData = { username, address };

    if (imageFile) {
      updatedData.image = imageFile;
    }

    if (password) {
      const hashedPassword = await hashPassword(password);
      updatedData.password = hashedPassword;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );
    res.status(200).json(updatedUser);

    if (!updatedUser) {
      res.status(404).json({ error: "No user found!!!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const user_delete = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid user" });
  }
  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser && deletedUser._id) {
      res.status(200).json({
        message: "User deleted successfully",
        id: deletedUser._id,
        username: deletedUser.username,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  user_list,
  user_detail,
  user_create_post,
  user_update,
  user_delete,
};
