import React, { Fragment } from "react";
import Rating from "../shared/Rating";
import classes from "./RestaurantItem.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_FIRST_RESTAURANT_DATA } from "../../constants/restaurantTypes";

const RestaurantItem = ({
    name,
    country,
    city,
    rating,
    image,
    address,
    id,
    latitude,
    longitude,
}) => {
    const dispatch = useDispatch();

    const getGeolocation = () =>
        dispatch({
            type: GET_FIRST_RESTAURANT_DATA,
            payload: {
                name,
                country,
                city,
                address,
                id,
                latitude,
                longitude,
                rating,
            },
        });

    return (
        <Fragment>
            <div className={classes.restaurantItem} onClick={getGeolocation}>
                <div className={classes.imageContainer}>
                    <img src={image} alt={name} />
                </div>
                <hr />
                <div className={classes.restaurantInfo}>
                    <h4>Country: {country} </h4>
                    <h4>City: {city} </h4>
                    <h4>Address: {address} </h4>
                    <h1>{name}</h1>
                    <Rating value={rating} />
                    <Link to={`/restaurant/${id}`}>View Restaurant</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default RestaurantItem;
