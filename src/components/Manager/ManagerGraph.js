import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Container, Box, Typography } from "@mui/material";


const ManagerGraph = (props) => {

  const data = props.manager?.current;
  const managerName = props.manager?.first_name + " " + props.manager?.last_name

  const DataFormatter = (number) => {
    if(number > 1000000000){
      return (number/1000000000).toString() + 'B';
    }else if(number > 1000000){
      return (number/1000000).toString() + 'M';
    }else if(number > 1000){
      return (number/1000).toString() + 'K';
    }else{
      return number.toString();
    }
  }

  return (
    <Container>
      <Typography variant='subtitle1' sx={{ 
        color: 'primary.main',
        fontFamily: 'masque',
        textAlign: 'center'
      }}>
        {data ? "Overall Rank" : null}
      </Typography>
      <Box sx={{ pb: '10vh', width: '91vw', height: '70vw' }}>
        {data && data.length > 0 &&
          <ResponsiveContainer>
            <LineChart
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="event" />
            <YAxis tickFormatter={DataFormatter} width={50}/>
            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
            <Line
            name={managerName}
            type="monotone"
            dataKey="overall_rank"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            />
            </LineChart>
          </ResponsiveContainer>
        }
      </Box>
    </Container>    
  );
}

export default ManagerGraph;
