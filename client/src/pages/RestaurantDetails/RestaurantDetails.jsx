import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchingSingleRestaurant } from "../../actions/restaurantActions";
import Rating from "../../components/shared/Rating";
import classes from "./RestaurantDetails.module.scss";

const RestaurantDetails = () => {
    const dispatch = useDispatch();
    const { loading, restaurant } = useSelector(
        state => state.restaurant
    );

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchingSingleRestaurant(id));
        
    }, [dispatch, id]);

    return (
        <div className={classes.restaurantDetails}>
        {loading && <p>Loading...</p> }    
            {restaurant && (
                <Fragment>
                    <div className={classes.restaurantData}>
                        <h2>{restaurant.name}</h2>
                        <img src={restaurant.image} alt={restaurant.name} />
                    </div>
                    <div className={classes.restaurantInfo}>
                        <h4>COUNTRY: {restaurant.country}</h4>
                        <h4>CITY: {restaurant.city}</h4>
                        <h4>ADDRESS: {restaurant.address}</h4>
                        <Rating value={restaurant.rating} />
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default RestaurantDetails;
