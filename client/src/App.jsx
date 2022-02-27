import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import classes from "./App.module.scss";
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            </Routes>
            <Footer />
        </Fragment>
    );
};

export default App;
