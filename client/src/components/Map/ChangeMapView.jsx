import { useMap } from "react-leaflet";

function ChangeMapView({ center, zoom }) {
    console.log("CENTER", center);
    const map = useMap();
    map.setView(center, zoom, {
        animate: true,
        pan: {
            duration: 1,
        },
    });
    return null;
}

export default ChangeMapView;
