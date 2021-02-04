import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import Home from './Components/Home/Home';
import NoMatch from "./NoMatch/NoMatch";

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/country/:name">
              <CountryDetail/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
