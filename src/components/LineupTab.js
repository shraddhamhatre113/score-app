import SoccerLineUp from "react-soccer-lineup";
function LineupTab({ lineups }) {
  const buildLineUp = (line, color) => {
    const squad = {
      squad: {
        gk: {},
        df: [],
        cm: [],
        fw: [],
      },
    };

    line.startXI.forEach((p) => {
      if (p.player.pos === "G") {
        squad.squad.gk = {
          number: p.player.number,
          name: p.player.name,
        };
      } else if (p.player.pos === "D") {
        squad.squad.df.push({
          number: p.player.number,
          name: p.player.name,
        });
      } else if (p.player.pos === "M") {
        squad.squad.cm.push({
          number: p.player.number,
          name: p.player.name,
        });
      } else if (p.player.pos === "F") {
        squad.squad.fw.push({
          number: p.player.number,
          name: p.player.name,
        });
      }
    });
    return squad;
  };

  return (
    <div className="rounded-bottom border-bottom border-start border-end border-black">
      <SoccerLineUp
        size={"responsive"}
        color={"lightseagreen"}
        pattern={"lines"}
        homeTeam={buildLineUp(lineups[0])}
        awayTeam={buildLineUp(lineups[1])}
      />
      <div className="d-flex w-100">
        <div className="list-group w-50">
            <div className="list-group-item">Coach: {lineups[0].coach.name}</div>
            <div  className="list-group-item">Formation: {lineups[0].formation}</div>
            {
                lineups[0].substitutes.map((sub) =>  <div className="list-group-item">{sub.player.name}</div>)
            }
        </div>
        <div className="list-group w-50">
        <div className="list-group-item">Coach: {lineups[1].coach.name}</div>
            <div  className="list-group-item">Formation: {lineups[1].formation}</div>
            {
                lineups[1].substitutes.map((sub) =>  <div className="list-group-item">{sub.player.name}</div>)
            }
        </div>
      </div>
    </div>
  );
}
export default LineupTab;

/*
{
            squad: {
                gk: {
                    number: 1,
                    name:''
                    color: `#${ homeGoalkeeperColor }`,
                    numberColor: `#${ homeGoalkeeperNumberColor }`,
                },
                df: [ {
                    number: 2,
                    name:''
                }, {
                    number: 4,
                    name:''
                   
                }, {
                    number: 5,
                    name:''

                }, {
                    number: 3,
                    name:''

                } ],
                cm: [ {
                    number: 6,
                    name:''

                }, {
                    number: 8,
                    name:''

                } ],
                fw: [ {
                    number: 9,
                    name:''
                } ]
            },
            style: {
                color: `#${ homeTeamColor }`,
                numberColor: `#${ homeTeamNumberColor }`
            }
        }


*/
