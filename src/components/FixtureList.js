import fixtureList from "../fixtureList.json";
import { NavLink } from "react-router-dom";
import RightPanel from "./RightPanel";
import FixtureItem from "./FixtureItem";

function FixtureList() {
  return (
    <RightPanel>
      {fixtureList.response.map((elem) => {
        return (
         
            <NavLink to={`/${elem.league.country}/${elem.league.id}/${elem.fixture.id}`}  key={elem.fixture.id} className='list-group-item list-group-item-action'>
               
              <FixtureItem details={elem}></FixtureItem>
            </NavLink>
         
        );
      })}
    </RightPanel>
  );
}
export default FixtureList;
