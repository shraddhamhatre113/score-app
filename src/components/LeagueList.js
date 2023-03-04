import { NavLink, useParams } from "react-router-dom";
import leagues from "../leagues.json";
import LeftPanel from "./LeftPanel";

function LeagueList() {
  const { country } = useParams();
  const filterLeagues = leagues.response.filter(
    (league) => league.country.name === country
  );
  return (
    <LeftPanel>
      {filterLeagues.map((e) => {
        return (
    
            <NavLink to={`${e.league.id}`} key={`${e.league.id}`} className="list-group-item list-group-item-action d-flex align-items-center">
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  flexDirection: "row",
                  gap: "0.3rem",
                }}
              >
                <img
                  style={{ height: "1rem", width: "1rem" }}
                  src={e.league.logo}
                  alt="logo"
                />
                <span> {e.league.name}</span>
              </div>
            </NavLink>
        );
      })}
    </LeftPanel>
  );
}
export default LeagueList;
