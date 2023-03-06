function FixtureItem({ details }) {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-md-2">
        {details.fixture.status.elapsed < 90 ? (
          <div className="d-flex justify-content-between">
            <span className="text-success">Live</span>
            <span>{details.fixture.status.elapsed}'</span>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <span></span>
            <span>{details.fixture.status.elapsed}'</span>
          </div>
        )}
      </div>
      <div className="col">
        <div className="row">
          <span className="col d-flex align-items-lg-center justify-content-start">
            <img
              className="text-info mx-2"
              style={{ width: "1rem", height: "1rem" }}
              src={details.teams.home.logo}
              alt=""
            />
            {details.teams.home.name}
          </span>
          <span className="col-lg-1">{details.goals.home}</span>
        </div>
        <div className="row">
          <span className="col d-flex align-items-lg-center justify-content-start">
            <img
              className="text-info mx-2"
              style={{ width: "1rem", height: "1rem" }}
              src={details.teams.away.logo}
              alt=""
            />
            {details.teams.away.name}
          </span>
          <span className="col-lg-1">{details.goals.away}</span>
        </div>
      </div>
    </div>
  );
}
export default FixtureItem;
