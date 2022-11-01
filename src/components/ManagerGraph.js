import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
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
    <Container maxWidth="sm">
      <Typography variant='subtitle2' sx={{ 
        color: '#33BB00',
        fontFamily: 'masque',
        textAlign: 'center'
      }}>
        Overall Rank
      </Typography>
      <Box sx={{ pb: '10vh' }}>
        {data && data.length > 0 &&
          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 110,
            left: -10,
            bottom: 0
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="event" />
          <YAxis tickFormatter={DataFormatter}/>
          <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
          <Line
          name={managerName}
          type="monotone"
          dataKey="overall_rank"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          />
          </LineChart>
        }
      </Box>
    </Container>    
  );
}

export default ManagerGraph;
