import "./App.css";
import React, { Route, Switch, BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import { InfoProvider } from "./Context/Context";
import Ships from "./Pages/Ships";
import Planets from "./Pages/Planets";

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/characters/:pag" component={Characters}></Route>
          <Route path="/ships/:pag" component={Ships}></Route>
          <Route path="/planets/:pag" component={Planets}></Route>
        </Switch>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
