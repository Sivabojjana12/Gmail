import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import './index.css';

function Rightsidemenu() {
  return (
    <div className='rightside-menu'>
        <CalendarMonthIcon/>
        <LightbulbCircleIcon/>
        <TaskAltIcon/>
        <PersonIcon/>
        <AddIcon/>
    </div>
  );
}

export default Rightsidemenu;