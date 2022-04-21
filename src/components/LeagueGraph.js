import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const LeagueGraph = (props) => {

  const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  };

  // Create an array of team names to use for the graph
  const teamNames = []
  // Create an array of Objects to include each team to be mapped through
  let managerMap = []
  // Create an array of formatted data for the graph
  const graphData = []
  let graph;
  const weekNumbers= []
  let arrLen;

  const mapLeagueData = props.leagueData.forEach(team => {
    teamNames.push(team.entry_name)
    managerMap.push(team)
  });

  if (props) {
    arrLen = managerMap[0]?.points?.length

    for (let i = 0; i <= arrLen; i++) {
      graphData[i] = {
        event: i
      }
    };

    managerMap.forEach((manager) => {
      const entryName = manager.entry_name
      var managers = Object.entries(manager)

      manager.points?.forEach(week => {
        const managerWeek = week.event
        const managerPoints = week.total_points
        graphData.forEach(gWeek => {
          if (gWeek.event === managerWeek) {
            gWeek[entryName] = managerPoints
          };
        });
      });
    });

    const gData = graphData.slice(1)

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      };
      return color;
    };

    const renderLines = () => {
      const lines = teamNames.map((value) => (
        <Line
          key={value}
          type="monotone"
          dataKey={value}
          stroke={getRandomColor()}
          strokeWidth={1.2}
          animationBegin={1000}
        />
      ));
      return lines;
    }


    graph =
    <div>
      {gData && gData.length > 0 &&
        <LineChart
        width={850}
        height={500}
        data={gData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="event"/>
        <YAxis />
        <Tooltip />
        <Legend />
        {renderLines()}
        </LineChart>
      }
    </div>

  } else {
    graph = null
  };

  let count = 0
  let forceUpdate = useForceUpdate()

  return (
    <div>
      {graphData && graphData.length > 0 ? graph : <button onClick={forceUpdate}>View Graph</button>}
    </div>
  );
}

export default LeagueGraph;
