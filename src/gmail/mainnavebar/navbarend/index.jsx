import React,{useState} from 'react';
import './index.css';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip'; 
import {Menu, MenuItem } from "@mui/material";   



function Navbarend(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
     };

    const handleClose = () => {
    setAnchorEl(null);
      };
    return(
        <div className="navbarend">
        <Tooltip title="Support" placement='bottom'>
            <HelpOutlineOutlinedIcon className='contactsupporticon' variant="contained" onClick={handleClick}/>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
            <MenuItem>Help</MenuItem>
            <MenuItem>Training</MenuItem>
            <MenuItem >Send feedback to Google</MenuItem>
        </Menu>
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