import Box from "@mui/material/Box";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


const LeagueGraph = (props) => {

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
          strokeWidth={1}
          animationBegin={1000}
        />
      ));
      return lines;
    }

    graph =
    <Box sx={{ pr: '1em', width: '95%', height: '60vh' }}>
      {gData && gData.length > 0 &&
        <ResponsiveContainer>
          <LineChart
            data={gData}
            margin={{
              top: 15,
              right: 0,
              bottom: 5,
              left: 0
            }}
            >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="event"/>
            <YAxis width={45}/>
            {/* <Tooltip /> */}
            <Legend />
            {renderLines()}
          </LineChart>
        </ResponsiveContainer>
      }
    </Box>

  } else {
    graph = null
  };

  return (
    <Box sx={{ pb: '5em'}}>
      {graph}
    </Box>
  );
}

export default LeagueGraph;
