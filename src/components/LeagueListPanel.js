import leagues from "../leagues.json";
import { NavLink, useParams } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import FixtureList from "./FixtureList";


function LeagueListPanel() {
 const {code}= useParams()
 console.log(leagues.response.length)
 const filterLeagues= leagues.response.filter((league)=> league.country.code === code)
 console.log(filterLeagues.length)
  return (<div>
    <LeftPanel>
        {filterLeagues.map((e) => {
          return (
            <li key={e.league.id} >
              <NavLink to={`${e.league.id}`} >
                <div style={{display:'flex',alignItem:'center',flexDirection:'row',gap:'0.3rem'}}>
                  <img  style={{ height: "1rem", width: "1rem" }} src={e.league.logo} alt="logo" />
                  <span> {e.league.name}</span>
                </div>
              </NavLink>
            </li>
          );
        })}
     
    </LeftPanel>
    <RightPanel>
      <FixtureList></FixtureList>
    </RightPanel>
    </div>
  );
}
export default LeagueListPanel;
