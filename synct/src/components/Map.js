import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeolocated } from "react-geolocated";
const Default_Latitude = -125;
const Default_Longitude = 50;

class Map extends React.Component {
  render() {
    const longitude = this.props.coords
      ? this.props.coords.longitude
      : Default_Longitude;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : Default_Latitude;
    return (
      <MapContainer
        center={[Default_Latitude, Default_Longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Default_Latitude, Default_Longitude]}>
          <Popup>Your Live Location</Popup>
        </Marker>
      </MapContainer>
    );
  }
}
export default Map;
// export default useGeolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 10000,
// })(App);
