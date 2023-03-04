import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'font-awesome/css/font-awesome.min.css';
import { Routes, Route } from "react-router-dom";
import FixtureList from "./components/FixtureList";
import FixtureDetails from "./components/FixtureDetails";
import CountriesPanel from "./components/CountriesPanel";
import LeagueList from "./components/LeagueList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header clearfix">
          <h3 className="text-muted">Fantasy League</h3>
        </div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="row">
                <CountriesPanel></CountriesPanel>
                <FixtureList></FixtureList>
              </div>
            }
          ></Route>
          <Route
            path="/:country"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureList></FixtureList>
              </div>
            }
          />
          <Route
            path="/:country/:leagueId"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureList></FixtureList>
              </div>
            }
          />
          <Route
            path="/:country/:leagueId/:fixtureId"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureDetails></FixtureDetails>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
