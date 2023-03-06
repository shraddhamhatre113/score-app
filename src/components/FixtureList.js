// import fixtureList from "../fixtureList.json";

import { NavLink, useParams } from "react-router-dom";
import RightPanel from "./RightPanel";
import FixtureItem from "./FixtureItem";
import { useEffect, useState } from "react";

function FixtureList() {
    const [fixtureList, setFixtureList] = useState([])
    const {leagueId =39} = useParams();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '43ef4161a8mshe9213d1cc6e1b86p119e16jsn8414e0a17895',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    //  let apiUrl = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&last=20`;
let apiUrl = 'https://run.mocky.io/v3/06cdae21-524b-4121-8ea6-804020c5478a'

    useEffect(() => {
     fetch(apiUrl,options)
     .then(response => response.json())
     .then(response => response.response)
     .then(response => setFixtureList(response))
    },[])
  return (
    <RightPanel>
      {Array.isArray(fixtureList) && fixtureList.map((elem) => {
        return (
         
            <NavLink to={`/score-app/${elem.league.country}/${elem.league.id}/${elem.fixture.id}`}  key={elem.fixture.id} className='list-group-item list-group-item-action' style={{opacity:'0.9'}}>
               
              <FixtureItem details={elem}></FixtureItem>
            </NavLink>
         
        );
      })}
    </RightPanel>
  );
}
export default FixtureList;
