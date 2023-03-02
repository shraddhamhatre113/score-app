import { NavLink } from "react-router-dom";
import countries from "../countries.json";
import LeftPanel from "./LeftPanel";
// import {useParams} from 'react-router-dom'

function CountriesPanel() {
  return (
    <LeftPanel>
      {countries.response.map((e) => {
        return (
          <li>
            <NavLink to={`${e.code}`} key={e.code}>
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
                  src={e.flag}
                  alt="flag"
                />
                <span>{e.name}</span>
              </div>
            </NavLink>
          </li>
        );
      })}
    </LeftPanel>
  );
}
export default CountriesPanel;
