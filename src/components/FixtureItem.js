

function FixtureItem({ details }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.6rem",

      }}
    >
      <div>{details.fixture.status.elapsed}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem",width:'100%'}}>
        <div className='team-row'>
          <img style={{width:'1rem',height:'1rem'}}
            src={details.teams.home.logo}
            alt=""
          />
          <span className="name">{details.teams.home.name}</span>
          <span>{details.goals.home}</span>
        </div>
        <div className='team-row'>
          <img style={{width:'1rem',height:'1rem'}}
            src={details.teams.away.logo}
            alt=""
          />
          <span className="name">{details.teams.away.name}</span>
          <span>{details.goals.away}</span>
        </div>
      </div>
    </div>
  );
}
export default FixtureItem;
