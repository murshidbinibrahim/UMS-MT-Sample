const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.user_create_get);

router.post("/", userController.user_create_post);

router.put("/:id", userController.user_update);

router.delete("/:id", userController.user_delete);

module.exports = router;
