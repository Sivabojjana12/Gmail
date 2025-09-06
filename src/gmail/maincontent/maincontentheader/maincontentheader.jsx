import React from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import "./index.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import GmailStylePagination from "./headerrightside/rightside";
import Checkbox from '@mui/material/Checkbox';






function Maincontentheader() {
    return (
        <div className="maincontentheader">
            
            <div className="leftside">
                
                <div className="checkbox-dropdown">
                    <Checkbox sx={{fontSize:10}}/>
                    <Select disableUnderline variant="standard" sx={{border: "none","& fieldset": { border: "none" },"&:focus": { outline: "none" }}}>
                        <MenuItem value="option1">All</MenuItem>
                        <MenuItem value="option2">None</MenuItem>
                        <MenuItem value="option3">Read</MenuItem>
                        <MenuItem value="option3">UnRead</MenuItem>
                        <MenuItem value="option3">Starred</MenuItem>
                        <MenuItem value="option3">Unstarred</MenuItem>
                    </Select>
                  
                </div>
                <RefreshOutlinedIcon sx={{fontSize:17,opacity:0.7}}/>
                <MoreVertOutlinedIcon sx={{fontSize:17,opacity:0.7}}/>
            </div>
            <div className="rightside">
                <GmailStylePagination/>
            </div>
        </div>
    )
}

export default Maincontentheader;