function SummaryTab({ events, home, away }) {
  const detailsIcon = (detail) => {
    if (detail === "Yellow Card") {
      return <i className="fa fa-square text-warning"></i>;
    } else if (detail === "Red Card") {
      return <i className="fa fa-square text-danger"></i>;
    } else if (detail.indexOf( "Goal") > -1 && !detail.indexOf("cancelled") > -1) {
      return <i className="fa fa-futbol-o"></i>;
    } else if (detail.indexOf("Substitution")> -1) {
      return <i className="fa fa-refresh"></i>;
    }
  };
  const eventDetails = (data, team) => {
    if (data.team.name === team) {
      return (
        <div className="d-flex justify-content-between col">
          <span>{data.player.name}</span>
          <span>{detailsIcon(data.detail)}</span>
        </div>
      );
    } else {
      return <div className="d-flex justify-content-between col"></div>;
    }
  };
  return (
    <div className=" rounded-bottom border-bottom border-start border-end border-black">
      <div className="list-group list-group-flush">
        {events.map((event) => (
          <div className="list-group-item d-flex flex-row">
            {eventDetails(event, home)}
            <span className="col">{event.time.elapsed}'</span>
            {eventDetails(event, away)}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SummaryTab;
