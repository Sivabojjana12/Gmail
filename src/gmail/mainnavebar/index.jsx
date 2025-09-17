import React from 'react';
import './index.css';
import MenuIcon from '@mui/icons-material/Menu';
import Searchbar from './searchbar';
import Navbarend from './navbarend';
import Tooltip from '@mui/material/Tooltip';


function Mainnavebar({openSettings,toggleSidebar}) {

    
    return(
        <div className="navbar">
            <div className="gmailmenu">
                <div className="menu-icon">
                    <Tooltip title="Main menu" placement='bottom'>
                        <MenuIcon id='menuicon' onClick={toggleSidebar}/>
                    </Tooltip>
                </div>
                <div className="gmail-icon">
                    <Tooltip title="Gmail" placement='bottom'>
                    <img className="gb_Pd" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"  alt="" aria-hidden="true" role="presentation"></img>
                    </Tooltip>
                </div>
            </div>
            <Searchbar/>  
            <Navbarend openSettings={openSettings}/> 
        </div>
    )
}

export default Mainnavebar; 