import leagueTable from "../leagueTable.json";

function TableTab() {
  const rowRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-warning";
      case 2:
      case 3:
      case 4:
        return "bg-info";
      case 5:
      case 6:
        return "bg-light";
      case 18:
      case 19:
      case 20:
        return "bg-danger";
      default:
        return "";
    }
  };

  const rankIcon = (description) => {
    if (!description) {
      return;
    }
    if (description.indexOf("Champions League") > -1) {
      return (
        <img
          className="text-info mx-2"
          title="Champions League Qualified"
          style={{ height: "1rem", width: "1rem" }}
          src="https://media.api-sports.io/football/leagues/2.png"
          alt="flag"
        />
      );
    } else if (description.indexOf("Europa League") > -1) {
      return (
        <img
          className="text-info mx-2"
          title="Europa League Qualified"
          style={{ height: "1rem", width: "1rem" }}
          src="https://media.api-sports.io/football/leagues/3.png"
          alt="flag"
        />
      );
    } else if (description.indexOf("Relegation") > -1) {
      return (
        <i className="fa fa-arrow-down text-danger" title="Relegation"></i>
      );
    }
  };
  const lastFive = (form) => {
    return form.split('').map((f) => {
      if (f === "W") {
        return <i className="fa fa-check-square text-success"></i>;
      } else if (f === "L") {
        return <i className="fa  fa-window-close text-danger"></i>;
      } else if (f === "D") {
        return <i className="fa fa-minus-square text-secondary"></i>;
      }
      else return ''
    });
  };
  const standings = leagueTable.response[0].league.standings[0];
  return (
    <div className="container d-flex align-items-center justify-content-center rounded-bottom border-bottom border-start border-end border-black">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">Team</th>
            <th scope="col">P</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
            <th scope="col">PTS</th>
            <th scope="col">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing) => (
            <tr className={rowRankColor(standing.rank)}>
              <td>{standing.rank}</td>
              <td>
                <i
                  title="Champion"
                  className={standing.rank === 1 ? "fa fa-trophy" : ""}
                />
                {rankIcon(standing.description)}
              </td>
              <td className="d-flex">
                <img
                  className="text-info mx-2"
                  style={{ height: "1rem", width: "1rem" }}
                  src={standing.team.logo}
                  alt="flag"
                />
                {standing.team.name}
              </td>
              <td>{standing.all.played}</td>
              <td>{standing.all.win}</td>
              <td>{standing.all.draw}</td>
              <td>{standing.all.lose}</td>
              <td>{standing.all.goals.for}</td>
              <td>{standing.all.goals.against}</td>
              <td>{standing.goalsDiff}</td>
              <td>{standing.points}</td>
              <td className="d-flex justify-content-between">{lastFive(standing.form)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableTab;
