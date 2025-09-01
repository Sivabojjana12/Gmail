import React from 'react';
import './index.css';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';    



function Navbarend(){
    return(
        <div className="navbarend">
        <Tooltip title="Support" placement='bottom'>
            <HelpOutlineOutlinedIcon className='contactsupporticon'/>
        </Tooltip>
        <Tooltip title="Settings" placement='bottom'>
            <SettingsOutlinedIcon className='settingsicon'/>
        </Tooltip>
        <Tooltip title="Try Gemini" placement='bottom'>
            <AutoAwesomeIcon className='geminiicon'/>
        </Tooltip>
        <Tooltip title="Google apps" placement='bottom'>
            <AppsRoundedIcon className='appmenuicon'/>
        </Tooltip>
        <Tooltip title="Google Account" placement='bottom' >
            <AccountCircleIcon className='accounticon' />
        </Tooltip>
        </div>
    )
}

export default Navbarend;