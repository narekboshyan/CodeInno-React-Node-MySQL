import express from "express";
import {
    getAllPosts,
    getPostById,
    giveRate,
    leaveFeedback,
} from "../controllers/RestaurantController.js";

const router = express.Router();

// Get Request to "/"
router.route("/").get(getAllPosts);

router.route("/restaurant/:id").get(getPostById);

router.route("/restaurant/:id/feedback").post(leaveFeedback);

router.route("/restaurant/:id/rate").post(giveRate);

export default router;
