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
    <div>
      <Paper elevation={3} sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0 
      }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: '#28282a !important'
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            value="home"
            icon={<HomeRoundedIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/manager"
            label="Manager"
            value="manager"
            icon={<PersonOutlineRoundedIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/standings"
            label="Standings"
            value="standings"
            icon={<GroupsRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  )
}

export default PhoneNav;
