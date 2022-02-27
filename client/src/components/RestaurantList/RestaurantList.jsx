import React, { useEffect } from "react";
import classes from "./RestaurantList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import { fetchingRestaurantData } from "../../actions/restaurantActions";

const RestaurantList = () => {
    const dispatch = useDispatch();
    const { restaurants} = useSelector(
        state => state.restaurants
    );

    useEffect(() => {
        dispatch(fetchingRestaurantData());
    }, [dispatch]);



    return (
        <div className={classes.restaurantContainer}>
            {restaurants?.map(item => (
                <RestaurantItem
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};

export default RestaurantList;
