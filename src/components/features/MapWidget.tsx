"use client";

import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MAP_CENTER, BASE_COORD, CUSTOM_ZONE_COORDS, POZNAN_ZONE_COORDS } from '@/constants/map';

const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapWidget() {
    return (
        <MapContainer center={MAP_CENTER} zoom={8.5} className="w-full h-full min-h-[400px] z-0 rounded-sm shadow-inner border border-zinc-800">

            <TileLayer
                attribution='Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            />

            <Polygon
                positions={CUSTOM_ZONE_COORDS}
                pathOptions={{ color: '#3b82f6', weight: 2, fillColor: '#3b82f6', fillOpacity: 0.2 }}
            />

            <Polygon
                positions={POZNAN_ZONE_COORDS}
                pathOptions={{ color: '#71717a', weight: 2, fillColor: '#71717a', fillOpacity: 0.2 }}
            />

            <Marker position={BASE_COORD}>
                <Popup>
                    <strong>CleanDaw</strong><br />Nasza baza - Słopanowo.
                </Popup>
            </Marker>

            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
            />

        </MapContainer>
    );
}