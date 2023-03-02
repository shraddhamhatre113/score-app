import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountriesPanel from "./components/CountriesPanel";
import LeagueListPanel from "./components/LeagueListPanel";
import LeftPanel from "./components/LeftPanel";
import FixtureList from './components/FixtureList'
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home></Home>}>
          
        
        </Route>
        <Route path="/:code" element={<LeagueListPanel />} >
        <Route path='/:code/:leagueId' element={<FixtureList/>}/>
            </Route>
      </Routes>
    </div>
  );
}

export default App;
