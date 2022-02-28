import React, { Fragment } from "react";
import classes from "./Map.module.scss";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { useSelector } from "react-redux";
import ChangeMapView from "./ChangeMapView";
import { Link, useNavigate } from "react-router-dom";

const Map = () => {
    const navigate = useNavigate();
    const {
        restaurants,
        selectedRestaurant: { restaurant },
    } = useSelector(state => state);

    return (
        <div className={classes.mapContainer}>
            {restaurants.loading && <h1>LOADING ... </h1>}
            {restaurants && (
                <div className={classes.leafletContainer}>
                    <MapContainer
                        style={{ height: "100%", width: "100%" }}
                        center={[1, 2]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                        />
                        {restaurant?.latitude && (
                            <ChangeMapView
                                zoom={13}
                                center={{
                                    lat: restaurant.latitude,
                                    lng: restaurant.longitude,
                                }}
                            />
                        )}
                        {restaurants.restaurants &&
                            restaurants.restaurants.map((restaurant, i) => (
                                <Marker
                                    riseOnHover={true}
                                    eventHandlers={{
                                        click: e =>
                                            navigate(
                                                `/restaurant/${restaurant.id}`
                                            ),
                                    }}
                                    position={[
                                        restaurant.latitude,
                                        restaurant.longitude,
                                    ]}
                                    key={restaurant.id}
                                >
                                    <Tooltip
                                        direction="top"
                                        offset={[0, 20]}
                                        opacity={1}
                                    >
                                        <Fragment>
                                            <p>Name: {restaurant.name}</p>
                                            <p>Country: {restaurant.country}</p>
                                            <p>City: {restaurant.city}</p>
                                            <p>Address: {restaurant.address}</p>
                                            <p>Rating: {restaurant.rating}</p>
                                        </Fragment>
                                    </Tooltip>
                                </Marker>
                            ))}
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default Map;
