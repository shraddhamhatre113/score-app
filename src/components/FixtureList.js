import fixtureDetails from "../fixtureDetails.json";
import { NavLink } from "react-router-dom";
import RightPanel from "./RightPanel";
import FixtureItem from "./FixtureItem";

function FixtureList() {
    console.log(fixtureDetails.response)
  return (
    <RightPanel>
      {fixtureDetails.response.map((elem) => {
        return (
          <li className='fixture' key={elem.fixture.id}>
            <NavLink to={`${elem.fixture.id}`} className='nav-links'>
               
              <FixtureItem details={elem}></FixtureItem>
            </NavLink>
          </li>
        );
      })}
    </RightPanel>
  );
}
export default FixtureList;
