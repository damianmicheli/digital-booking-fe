import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./mapview.module.css";

const MapView = ({ latitud, longitud, city, country }) => {
  const position = [latitud, longitud];

  const icon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>¿Dónde vas a estar?</h2>
      </div>
      <h3 className={styles.city}>{`${city}, ${country}`}</h3>
      <div className={styles.mapContainer}>
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          className={styles.leafletContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon} />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
