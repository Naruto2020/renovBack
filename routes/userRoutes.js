// initialisation du routeur express
const express = require("express");
const router = express.Router();
// import controllers 
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const uploadController = require("../controllers/uploadControler");

// multer for upload img 
const multer = require("multer");
const upload = multer();

// create user and Auth 
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//diqplay user 
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserId);
router.get("/find/:nom", userController.getUserName);

// update and delete
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);

// set friends request 
router.patch("/follow/:id", userController.followUser);
router.patch("/unfollow/:id", userController.unfollowUser);

// upload image
router.post("/upload", upload.single("file") , uploadController.uploadProfil);





module.exports = router;