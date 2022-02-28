import { combineReducers } from "redux";
import {
    feedbackReducer,
    geolocationReducer,
    restaurantReducer,
    singleRestaurantReducer,
} from "./restaurantReducer";

export const reducer = combineReducers({
    restaurants: restaurantReducer,
    restaurant: singleRestaurantReducer,
    selectedRestaurant: geolocationReducer,
    feedback: feedbackReducer,
});
