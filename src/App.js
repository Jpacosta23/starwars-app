import "./App.css";
import React, { Route, Switch, BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import { InfoProvider } from "./Context/Context";
import Vehicles from "./Pages/Vehicles";
import Planets from "./Pages/Planets";
import StarShips from "./Pages/StarShips";

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/characters/:pag" component={Characters}></Route>
          <Route path="/vehicles/:pag" component={Vehicles}></Route>
          <Route path="/planets/:pag" component={Planets}></Route>
          <Route path="/starships/:pag" component={StarShips}></Route>
        </Switch>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
