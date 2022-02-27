import React, { useEffect } from "react";
import classes from "./RestaurantList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import { fetchingRestaurantData } from "../../actions/restaurantActions";

const RestaurantList = () => {
    const dispatch = useDispatch();
    const { restaurants, error, loading } = useSelector(
        state => state.restaurants
    );

    useEffect(() => {
        dispatch(fetchingRestaurantData());
    }, [dispatch]);

    console.log("RESTAURANTS", restaurants);

    const geoPositionHandler = id => {
        console.log("SHOWING ID", id);
    };

    return (
        <div className={classes.restaurantContainer}>
            {restaurants?.map(item => (
                <RestaurantItem
                    key={item.id}
                    {...item}
                    getPosition={geoPositionHandler}
                />
            ))}
        </div>
    );
};

export default RestaurantList;
