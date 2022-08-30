import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const PhoneNav = () => {

  const [value, setValue] = useState(0)
  return (
    <Paper elevation={3} sx={{ 
      position: 'fixed',
      width: '100vw', 
      bottom: 0, 
      left: 0, 
      right: 0,
      zIndex: '10' 
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: '#151515 !important',
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              color: '#39FF14'
            }
          },
          '& .MuiBottomNavigationAction-label': {
            color: '#FAF9F6'
          }            
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/fpl-data"
          label="Home"
          value="home"
          icon={<HomeRoundedIcon sx={{ color: '#39FF14', opacity: '70%'}}/>} />
        <BottomNavigationAction
          component={Link}
          to="/fpl-data/manager"
          label="Manager"
          value="manager"
          icon={<PersonOutlineRoundedIcon sx={{ color: '#39FF14', opacity: '70%'}}/>} />
        <BottomNavigationAction
          component={Link}
          to="/fpl-data/standings"
          label="Standings"
          value="standings"
          icon={<GroupsRoundedIcon sx={{ color: '#39FF14', opacity: '70%'}}/>} />
      </BottomNavigation>
    </Paper>

  )
}

export default PhoneNav;
