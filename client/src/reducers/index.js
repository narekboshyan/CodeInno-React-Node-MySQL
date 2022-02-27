import { combineReducers } from "redux";
import {
    geolocationReducer,
    restaurantReducer,
    singleRestaurantReducer,
} from "./restaurantReducer";

export const reducer = combineReducers({
    restaurants: restaurantReducer,
    restaurant: singleRestaurantReducer,
    selectedRestaurant: geolocationReducer,
});
