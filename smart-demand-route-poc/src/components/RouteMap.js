"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icons (important!)
delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Mock delivery points
const deliveryPoints = [
  { lat: 28.6139, lng: 77.2090, label: "Central Delhi" },
  { lat: 28.5245, lng: 77.1855, label: "South Delhi" },
  { lat: 28.7041, lng: 77.1025, label: "Najafgarh" },
];

export default function RouteMap() {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {deliveryPoints.map((point, index) => (
          <Marker key={index} position={[point.lat, point.lng]}>
            <Popup>
              {point.label}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
