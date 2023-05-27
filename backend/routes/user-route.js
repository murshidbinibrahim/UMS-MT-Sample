const express = require("express");
const multer = require("multer");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../utils/multer");

router.get("/", userController.user_list);
router.get("/:id", userController.user_detail);

router.post("/", upload.single("image"), userController.user_create_post);

router.put("/:id", upload.single("image"), userController.user_update);

router.delete("/:id", userController.user_delete);

module.exports = router;
