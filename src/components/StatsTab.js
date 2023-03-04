function StatsTab({statistics}) {
  const homeStats = statistics[0];
  const stats = homeStats.statistics.map((e) => {
    return {
      type: e.type,
      home: e.value,
    };
  });
  const awayStats = statistics[1];
  const finalStats = awayStats.statistics.map((e) => {
    const stat = stats.find((s) => s.type === e.type);
    stat.away = e.value;
    return stat;
  });

  return (
    <div className=" rounded-bottom border-bottom border-start border-end border-black">
      <div className="list-group list-group-flush">
        {finalStats.map((each) => (
          <div className="list-group-item d-flex justify-content-between col">
            <span>{each.home}</span>
            <span>{each.type}</span>
            <span>{each.away}</span>
          </div>

        ))}
      </div>
    </div>
  );
}
export default StatsTab;
