import React, { useState,useRef,useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import "./index.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import GmailStylePagination from "./headerrightside/rightside";
import Checkbox from '@mui/material/Checkbox';
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Tooltip } from "@mui/material";






function Maincontentheader() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    const handleToggle = () => setOpen(!open);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    return (
        <div className="maincontentheader">
            
            <div className="leftside">
                
                <div className="checkbox-dropdown">
                    <Tooltip title="select" placement="bottom">
                    <Checkbox sx={{fontSize:10}}/>
                    <Select disableUnderline variant="standard" sx={{border: "none","& fieldset": { border: "none" },"&:focus": { outline: "none" }, "& .MuiSelect-select": {paddingRight: "0px !important", minWidth: "16px",},}}>
                        <MenuItem value="option1">All</MenuItem>
                        <MenuItem value="option2">None</MenuItem>
                        <MenuItem value="option3">Read</MenuItem>
                        <MenuItem value="option3">UnRead</MenuItem>
                        <MenuItem value="option3">Starred</MenuItem>
                        <MenuItem value="option3">Unstarred</MenuItem>
                    </Select>
                    </Tooltip>
                </div>
                <Tooltip title="Refresh" placement="bottom">
                    <RefreshOutlinedIcon className="refresh-icon" sx={{fontSize:17,opacity:1,cursor: "pointer"}}/>
                </Tooltip>
                <div style={{ position: "relative", display: "inline-block" }} ref={menuRef}>
                    <Tooltip title="More" placement="bottom">
                        <MoreVertOutlinedIcon className="more-icon" sx={{fontSize:17,opacity:1,cursor: "pointer"}} onClick={handleToggle}/>
                    </Tooltip>
                    {open && (
                        <div
                            style={{
                                position: "absolute",
                                top: "25px",
                                width: "220px",
                                background: "#fff",
                                borderRadius: "8px",
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                                padding: "8px 0",
                                zIndex: 1000,}}>
                            <div
                                style={{
                                padding: "10px 16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                cursor: "pointer",
                                fontSize: "14px",
                                borderBottom: "1px solid #ddd",
                                }}>
                               <MarkEmailReadIcon fontSize="small" />
                               Mark all as read
                            </div>
                            <div
                                style={{
                                padding: "10px 16px",
                                fontSize: "13px",
                                color: "gray",
                                fontStyle: "italic",
                                }}>
                                    Select messages to see more actions
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="rightside">
                <button onClick={handleToggle} style={{ border: "none", background: "transparent", fontSize: "20px", cursor: "pointer",padding: "4px 8px",}}>
                    <GmailStylePagination/>
                </button>
            </div>
                
                
            </div>
      
    )
}

export default Maincontentheader;