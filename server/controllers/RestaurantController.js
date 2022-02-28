import { Restaurant } from "../models/Restaurant.js";

export const getAllPosts = async (req, res, next) => {
    try {
        const [restaurants] = await Restaurant.findAll();
        const sortedRestaurants = restaurants.sort(
            (a, b) => b.rating - a.rating
        );
        res.status(200).json({ restaurants: sortedRestaurants });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: `Something went wrong` });
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [singleRestaurant] = await Restaurant.findById(id);
        // const [feedback] = await Restaurant.getFeedback(id);
        // console.log("0000000000000000000000", feedback);
        const [restaurant] = singleRestaurant;
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: `Something went wrong` });
    }
};

export const leaveFeedback = async (req, res, next) => {
    try {
        const body = req.body;
        const data = await Restaurant.writeFeedback(body);
        body.id = data;
        res.json(body);
    } catch (error) {
        console.log(error);
    }
};

export const giveRate = async (req, res, next) => {
    try {
        const { id, rating } = req.body;
        const data = await Restaurant.giveRate(id, rating);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};
