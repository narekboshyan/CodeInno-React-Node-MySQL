import React, { Fragment } from "react";
import Map from "../../components/Map/Map";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import classes from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <Fragment>
            <div className={classes.container}>
                <RestaurantList />
                <Map />
            </div>
        </Fragment>
    );
};

export default HomePage;
