import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import './index.css';



function Rightsidemenu() {
  return (
    <div className='rightside-menu'>
      <div class="top">
        <Tooltip title="Google Calendar" placement="bottom">
          <img className="calender-icon"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZRzn2OpNq-OaU1QGcrCL9HDxi6k-4HXAyg&s" alt='calender'/>
        </Tooltip>
        <Tooltip title="Google Keep" placement="bottom">
          <img className='keep-icon' src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt='keep'/>
        </Tooltip>
        <Tooltip title="Google Tasks" placement="bottom">
          <img className='tasks-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/2159px-Google_Tasks_2021.svg.png" alt='tasks'/>
        </Tooltip>
        <Tooltip title="Google Contacts" placement="bottom">
          <img className='contacts-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/1733px-Google_Contacts_icon_%282022%29.svg.png" alt='contacts'/> 
        </Tooltip>
        <hr style={{ width: "50%", border: "0.5px solid #ccc", margin: "12px 0" }}/>
        <Tooltip title="Create" placement="bottom">
          <AddIcon className='add-icon'/>
        </Tooltip>
      </div>
      <div class="bottom">
          
      </div>
    </div>
  );
}

export default Rightsidemenu;