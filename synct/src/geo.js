import { useGeolocated } from "react-geolocated";
export default useGeolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
});
