import express from "express";
import { 
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
 } from "../controllers/postsControllers.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);


export default router;

