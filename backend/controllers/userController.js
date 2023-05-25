const user_create_get = (req, res) => {
  res.status(200).json({ msg: "GET-USER REGISTRATION" });
};

const user_create_post = (req, res) => {
  res.status(200).json({ msg: "POST-USER REGISTRATION" });
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
