// initialisation du routeur express
const express = require("express");
const router = express.Router();

// import controllers 
const postController = require("../controllers/postController");

// multer for upload img 
const multer = require("multer");
const upload = multer();


// create, display and update post 
router.post("/", upload.single("file"), postController.createPost);
router.get("/", postController.readPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

// like and unlike post 
router.patch("/like-post/:id", postController.likePost);
router.patch("/unlike-post/:id", postController.unlikePost);

// comments 
router.patch("/post-comments/:id", postController.postComment);
router.patch("/delete-comments/:id", postController.deleteComment);



module.exports = router;