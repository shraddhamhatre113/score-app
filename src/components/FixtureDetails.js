import fixtureDetails from "../fixtureDetails.json";
import RightPanel from "./RightPanel";
import TabPanel from "./TabPanel";
function FixtureDetails() {
  const details = fixtureDetails.response[0];
  return (
    <RightPanel>
      <div className="row">
        <div className="col d-lg-flex flex-column justify-content-lg-center align-items-lg-center">
          <img
            className="d-lg-flex justify-content-lg-center"
            src={details.teams.home.logo}
            alt=""
          />
          <span className="d-lg-flex">{details.teams.home.name}</span>
        </div>
        <div className="col d-lg-flex flex-column justify-content-lg-center align-items-lg-center">
          <span style={{ fontSize: "36px" }}>
            {details.goals.home} - {details.goals.away}
          </span>
          <span className="d-lg-flex">
          {details.fixture.status.short === "FT" ||
            details.fixture.status.short === "HT"
              ? details.fixture.status.long
              : details.fixture.status.elapsed}
           
          </span>
          <span className="d-lg-flex"> {new Date(details.fixture.date).toLocaleDateString()}</span>
        </div>
        <div className="col d-lg-flex flex-column justify-content-lg-center align-items-lg-center">
          <img
            className="d-lg-flex justify-content-lg-center"
            src={details.teams.away.logo}
            alt=""
          />
          <span className="d-lg-flex">{details.teams.away.name}</span>
        </div>
      </div>
      <TabPanel fixture={details}></TabPanel>
    </RightPanel>
  );
}
export default FixtureDetails;
