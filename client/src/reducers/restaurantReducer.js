import {
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAIL,
    GET_SINGLE_RESTAURANT_REQUEST,
    GET_SINGLE_RESTAURANT_SUCCESS,
    GET_SINGLE_RESTAURANT_FAIL,
    GET_FIRST_RESTAURANT_DATA,
    SUBMIT_FEEDBACK_REQUEST,
    SUBMIT_FEEDBACK_SUCCESS,
    SUBMIT_FEEDBACK_FAIL,
} from "../constants/restaurantTypes";

const initialRestaurantsState = {
    restaurants: [],
    loading: false,
    error: null,
};

export const restaurantReducer = (state = initialRestaurantsState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: payload,
            };
        case GET_ALL_RESTAURANTS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};

const initialSingleRestaurantState = {
    restaurant: {},
    error: null,
    loading: false,
};

export const singleRestaurantReducer = (
    state = initialSingleRestaurantState,
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SINGLE_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_SINGLE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: payload,
            };
        case GET_SINGLE_RESTAURANT_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};

export const geolocationReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_FIRST_RESTAURANT_DATA:
            return {
                restaurant: payload,
            };
        default:
            return state;
    }
};

export const feedbackReducer = (
    state = { feedback: {}, loading: false, error: null },
    action
) => {
    const { type, payload } = action;
    switch (type) {
        case SUBMIT_FEEDBACK_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case SUBMIT_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                feedback: payload,
            };
        case SUBMIT_FEEDBACK_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};
