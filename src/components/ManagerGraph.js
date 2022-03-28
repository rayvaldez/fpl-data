import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const ManagerGraph = (props) => {

  const data = props.manager.current;

  return (
    <div>
      {data && data.length > 0 &&
        <LineChart
        width={500}
        height={300}
        data={props.manager.current}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="event" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
        type="monotone"
        dataKey="total_points"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        />
        </LineChart>
      }
    </div>
  );
}

export default ManagerGraph;
