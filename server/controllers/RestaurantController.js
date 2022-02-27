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
        const [restaurant] = singleRestaurant;
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: `Something went wrong` });
    }
};
