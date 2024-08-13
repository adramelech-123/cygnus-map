
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster"
import { Marker } from 'react-leaflet/Marker'
import { Icon, divIcon, LatLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MyMap.css"
import mapData from "../data/countries.json";
import {myMarkers} from "../data/markers.js"
import {
  Link
} from "react-router-dom";

const MyMap = () => {
  const countryStyle = {
    fillColor: "orange",
    fillOpacity: 0.4,
    color: "black",
    weight: 0.5,
  };

  const onEachEntry = (country, layer) => {
    const countryName = country.properties.ADMIN;

    layer.on({
      click: () => {
        layer.bindPopup(countryName);
      },
      mouseover: (e) => {
        e.target.setStyle({
          fillOpacity: 0,
        });
      },
      mouseout: (e) => {
        e.target.setStyle({
          fillOpacity: 0.4,
        });
      },
    });
  };

  const customIcon = new Icon({
    iconUrl: "https://freesvg.org/img/map-pin.png",
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: [25, 25],
    });
  };

  // Define the maximum bounds for the map
  const maxBounds = new LatLngBounds([
    [-90, -180], // South West corner
    [90, 180], // North East corner
  ]);

  return (
    <div>
      <MapContainer
        style={{ height: "80vh", width: "100%" }}
        zoom={3}
        minZoom={3}
        center={[25, 20]}
        attributionControl={false}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          className="mapbg"
          noWrap={true}
        />
        {mapData && (
          <GeoJSON
            data={mapData.features}
            style={countryStyle}
            onEachFeature={onEachEntry}
          />
        )}
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {myMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.latitude, marker.longitude]}
              icon={customIcon}

              // eventHandlers={{
              //   click: () => handleMarkerClick(marker.redirectTo),
              // }}
            >
              <Popup className="popup">
                <Link to={marker.uni_url} target="_blank">
                  <p>{marker.university}</p>
                </Link>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MyMap;
