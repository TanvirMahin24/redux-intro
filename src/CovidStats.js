import React, { useEffect, useState } from "react";

const CovidStats = () => {
  const [stat, setStat] = useState({
    totalConfirmed: 0,
    newConfirmed: 0,
    totalDeath: 0,
    newDath: 0,
  });
  useEffect(async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch("https://api.covid19api.com/summary", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        //console.log(data);
        setStat({
          totalConfirmed: data.Global.TotalConfirmed,
          newConfirmed: data.Global.NewConfirmed,
          totalDeath: data.Global.TotalDeaths,
          newDath: data.Global.NewDeaths,
        });
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div style={{ paddingBottom: "80px" }}>
      <h1>COVID status</h1>

      {stat.totalConfirmed == 0 ? (
        <span>Loading...</span>
      ) : (
        <div className="d-flex">
          <span className="pr">
            <b>Total Confirmed:</b> {stat.totalConfirmed}
          </span>
          <span className="pr">
            <b>New Confirmed:</b> {stat.newConfirmed}
          </span>
          <span className="pr">
            <b>Total Death:</b> {stat.totalDeath}
          </span>
          <span className="pr">
            <b>New Death:</b> {stat.newDath}
          </span>
        </div>
      )}
    </div>
  );
};

export default CovidStats;
