import { NavLink } from "react-router-dom";
import countries from "../countries.json";
import LeftPanel from "./LeftPanel";
// import {useParams} from 'react-router-dom'

function CountriesPanel() {
  return (
    <LeftPanel>
      {countries.response.map((e) => {
        return (

            <NavLink to={`${e.name}`} key={e.code} className="list-group-item list-group-item-action d-flex align-items-center">
          
                <img
                className="text-info mx-2"
                  style={{ height: "1rem", width: "1rem" }}
                  src={e.flag}
                  alt="flag"
                />
                {e.name}
            
            </NavLink>
        );
      })}
    </LeftPanel>
  );
}
export default CountriesPanel;
