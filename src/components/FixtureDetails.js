// import fixtureDetails from "../fixtureDetails.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RightPanel from "./RightPanel";
import TabPanel from "./TabPanel";
function FixtureDetails() {
  console.log("I am here");
  const [fixtureDetails, setFixtureDetails] = useState([]);
  const { fixtureId } = useParams("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43ef4161a8mshe9213d1cc6e1b86p119e16jsn8414e0a17895",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  //  let apiUrl = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`;
  let apiUrl = "https://run.mocky.io/v3/7ad36460-adff-4ddb-8fad-dac9ff0e1a59";
  useEffect(() => {
    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((response) => response.response[0])
      .then((response) => setFixtureDetails(response));
  },[]);
  //   const details = fixtureDetails.response[0];
  return (
    <RightPanel>
      {fixtureDetails.teams ? (
        <div>
          <div className="row">
            <div className="col d-lg-flex flex-column justify-content-lg-center align-items-lg-center">
              <img
                className="d-lg-flex justify-content-lg-center"
                src={fixtureDetails.teams.home.logo}
                alt=""
              />
              <span className="d-lg-flex">
                {fixtureDetails.teams.home.name}
              </span>
            </div>
            <div className="col d-lg-flex flex-column justify-content-lg-center align-items-lg-center">
              <span style={{ fontSize: "36px" }}>
                {fixtureDetails.goals.home} - {fixtureDetails.goals.away}
              </span>
              <span className="d-lg-flex">
                {fixtureDetails.fixture.status.short === "FT" ||
                fixtureDetails.fixture.status.short === "HT"
                  ? fixtureDetails.fixture.status.long
                  : fixtureDetails.fixture.status.elapsed}
              </span>
              <span className="d-lg-flex">
                {" "}
                {new Date(fixtureDetails.fixture.date).toLocaleDateString()}
              </span>
            </div>
            <div className="col d-lg-flex flex-column justify-content-lg-center align-items-lg-center">
              <img
                className="d-lg-flex justify-content-lg-center"
                src={fixtureDetails.teams.away.logo}
                alt=""
              />
              <span className="d-lg-flex">
                {fixtureDetails.teams.away.name}
              </span>
            </div>
          </div>
          <TabPanel fixture={fixtureDetails}></TabPanel>
        </div>
      ) : (
        <div></div>
      )}
    </RightPanel>
  );
}
export default FixtureDetails;
