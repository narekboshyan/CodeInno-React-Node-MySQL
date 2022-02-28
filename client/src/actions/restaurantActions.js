import axios from "axios";
import {
    GET_ALL_RESTAURANTS_FAIL,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_FIRST_RESTAURANT_DATA,
    GET_SINGLE_RESTAURANT_FAIL,
    GET_SINGLE_RESTAURANT_REQUEST,
    GET_SINGLE_RESTAURANT_SUCCESS,
    RATE,
    SUBMIT_FEEDBACK_FAIL,
    SUBMIT_FEEDBACK_REQUEST,
    SUBMIT_FEEDBACK_SUCCESS,
} from "../constants/restaurantTypes";

export const fetchingRestaurantData = () => async dispatch => {
    dispatch({
        type: GET_ALL_RESTAURANTS_REQUEST,
    });
    try {
        const { data } = await axios.get(`http://localhost:5000`);

        dispatch({
            type: GET_ALL_RESTAURANTS_SUCCESS,
            payload: data.restaurants,
        });

        dispatch({
            type: GET_FIRST_RESTAURANT_DATA,
            payload: data.restaurants[0],
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_RESTAURANTS_FAIL,
            payload: error.message,
        });
    }
};

export const fetchingSingleRestaurant = id => async dispatch => {
    try {
        dispatch({
            type: GET_SINGLE_RESTAURANT_REQUEST,
        });

        const { data } = await axios.get(
            `http://localhost:5000/restaurant/${id}`
        );
        dispatch({
            type: GET_SINGLE_RESTAURANT_SUCCESS,
            payload: data.restaurant,
        });
    } catch (error) {
        dispatch({
            type: GET_SINGLE_RESTAURANT_FAIL,
            payload: error.message,
        });
    }
};

export const submitFeedback = (id, text) => async dispatch => {
    try {
        dispatch({
            type: SUBMIT_FEEDBACK_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(
            `http://localhost:5000/restaurant/${id}/feedback`,
            { id, text },
            config
        );
        console.log("FEEDBACK", data);
        dispatch({
            type: SUBMIT_FEEDBACK_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SUBMIT_FEEDBACK_FAIL,
        });
    }
};

export const rateRestaurant = (id, rate) => async () => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios.post(
            `http://localhost:5000/restaurant/${+id}/rate`,
            { id, rate },
            config
        );
    } catch (error) {
        console.log(error);
    }
};
