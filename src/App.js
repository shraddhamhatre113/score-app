import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import FixtureList from "./components/FixtureList";
import FixtureDetails from "./components/FixtureDetails";
import CountriesPanel from "./components/CountriesPanel";
import LeagueList from "./components/LeagueList";


function App() {
  return (
    <div className="App">
      <div className="container col-8">
        <div className="header clearfix p-5">
          <h1>Shraddha's Football Live Score</h1>
        </div>
        <Routes>
          <Route
            path="/score-app"
            element={
              <div className="row overflow-auto">
                <CountriesPanel></CountriesPanel>
                <FixtureList></FixtureList>
              </div>
            }
          >
            <Route
            path=":country"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureList></FixtureList>
              </div>
            }
          />
          </Route>
          {/* <Route
            path="/score-app/:country"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureList></FixtureList>
              </div>
            }
          />
          <Route
            path="/score-app/:country/:leagueId"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureList></FixtureList>
              </div>
            }
          />
          <Route
            path="/score-app/:country/:leagueId/:fixtureId"
            element={
              <div className="row">
                <LeagueList></LeagueList>
                <FixtureDetails></FixtureDetails>
              </div>
            }
          /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
