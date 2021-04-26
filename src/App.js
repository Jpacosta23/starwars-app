import "./App.css";
import React, { Route, Switch, BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import { InfoProvider } from "./Context/Context";

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/characters/:pag" component={Characters}></Route>
          <Route path="/ships"></Route>
          <Route path="/planets"></Route>
        </Switch>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
