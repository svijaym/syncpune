# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

=============================================================================
Find appropriate library to integrate map(open street) in react application(open source).
Create api’s for login, dashboard and map view.
If user is logged in he/she should be routed to dashboard. The dashboard has card components each having unique ID.
On click of card component, it should open map view and display map of India with current location being zoomed out.
If user is not logged in, dashboard and map view api should show message something like “User not logged in”.
For integrating OpenStreetMap in a React application, you can use the "react-leaflet" library. It is an open-source library that provides a simple interface for integrating Leaflet maps in React applications. Here is how you can use it:

Install the "react-leaflet" library using npm:


npm install react-leaflet leaflet
Import the required components from the "react-leaflet" library and create a Map component:


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
Create APIs for login, dashboard, and map view using any backend technology of your choice (e.g., Node.js, Django, etc.).

To implement the routing, you can use the "react-router-dom" library. Here's an example:


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        </Route>
        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/map/:id">
          {isLoggedIn ? <Map /> : <p>User not logged in</p>}
        </Route>
      </Switch>
    </Router>
  );
}
In the Dashboard component, you can create Card components with unique IDs and add an onClick event handler to each card to redirect to the map view:

jsx
Copy code
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();

  const handleCardClick = (id) => {
    history.push(`/map/${id}`);
  };

  return (
    <div>
      <Card onClick={() => handleCardClick(1)}>
        <CardContent>Card 1</CardContent>
      </Card>
      <Card onClick={() => handleCardClick(2)}>
        <CardContent>Card 2</CardContent>
      </Card>
    </div>
  );
}
I hope this helps you get started!
==
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeolocated } from "react-geolocated";
const Default_Latitude = -125;
const Default_Longitude = 50;

class App extends React.Component {
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
export default App;
// export default useGeolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 10000,
// })(App);
