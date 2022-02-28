import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchingSingleRestaurant,
    submitFeedback,
    rateRestaurant,
} from "../../actions/restaurantActions";
import Rating from "../../components/shared/Rating";
import classes from "./RestaurantDetails.module.scss";

const RestaurantDetails = () => {
    const [feedback, setFeedback] = useState("");
    const dispatch = useDispatch();
    const { loading, restaurant } = useSelector(state => state.restaurant);
    const { feedback: fetchedFeedback } = useSelector(state => state.feedback);

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchingSingleRestaurant(id));
    }, [dispatch, id]);

    const onSubmit = e => {
        e.preventDefault();
        dispatch(submitFeedback(id, feedback));
    };

    const rateHandler = rate => {
        dispatch(rateRestaurant(id, rate));
    };

    return (
        <div className={classes.restaurantDetails}>
            {loading && <p>Loading...</p>}
            {restaurant && (
                <Fragment>
                    <div className={classes.restaurantData}>
                        <h2>{restaurant.name}</h2>
                        <img src={restaurant.image} alt={restaurant.name} />
                        <h4> {fetchedFeedback?.text} </h4>
                        <form onSubmit={onSubmit}>
                            <textarea
                                name=""
                                id=""
                                cols="60"
                                rows="10"
                                onChange={e => setFeedback(e.target.value)}
                            />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className={classes.restaurantInfo}>
                        <h1>
                            RATE US:
                            <i
                                className="fa-regular fa-star"
                                style={{ cursor: "pointer" }}
                                onClick={() => rateHandler(1)}
                            ></i>
                            <i
                                className="fa-regular fa-star"
                                style={{ cursor: "pointer" }}
                                onClick={() => rateHandler(2)}
                            ></i>
                            <i
                                className="fa-regular fa-star"
                                style={{ cursor: "pointer" }}
                                onClick={() => rateHandler(3)}
                            ></i>
                            <i
                                className="fa-regular fa-star"
                                style={{ cursor: "pointer" }}
                                onClick={() => rateHandler(4)}
                            ></i>
                            <i
                                className="fa-regular fa-star"
                                style={{ cursor: "pointer" }}
                                onClick={() => rateHandler(5)}
                            ></i>
                        </h1>
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
