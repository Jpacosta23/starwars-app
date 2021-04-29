import "./App.css";
import React, { Route, Switch, BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import { InfoProvider } from "./Context/Context";
import Vehicles from "./Pages/Vehicles";
import Planets from "./Pages/Planets";
import StarShips from "./Pages/StarShips";
import CharacterDetail from "./Pages/CharacterDetail";
import PlanetDetail from "./Pages/PlanetDetail";
import StarShipDetail from "./Pages/StarShipDetail";
import VehicleDetail from "./Pages/VehicleDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/people/:pag" component={Characters}></Route>
          <Route path="/vehicles/:pag" component={Vehicles}></Route>
          <Route path="/planets/:pag" component={Planets}></Route>
          <Route path="/starships/:pag" component={StarShips}></Route>
          <Route path="/character/:name" component={CharacterDetail}></Route>
          <Route path="/planet/:name" component={PlanetDetail}></Route>
          <Route path="/starship/:name" component={StarShipDetail}></Route>
          <Route path="/vehicle/:name" component={VehicleDetail}></Route>
        </Switch>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
