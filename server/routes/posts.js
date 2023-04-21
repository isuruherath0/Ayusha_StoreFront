import express from "express";
import { getFeedPosts, getUserPosts,  } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:sellerID/posts", verifyToken, getUserPosts);



export default router;
