import express from "express";
import {
    getAllPosts,
    getPostById,
} from "../controllers/RestaurantController.js";

const router = express.Router();

// Get Request to "/"
router.route("/").get(getAllPosts);
router.route("/restaurant/:id").get(getPostById);

export default router;
