import React from 'react';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import Tooltip from '@mui/material/Tooltip';



function Searchbar(){
    return(
        <div className="searchbar">
            <Tooltip title="Search" placement='bottom'>
                <SearchIcon className="search-icon"/>
            </Tooltip>
                <input class="search-input" aria-label="Search mail" autocomplete="off" placeholder="Search mail" value="" name="q" type="text" dir="ltr" spellcheck="false" aria-haspopup="true" aria-live="off" aria-owns="gs_sbt50"  jslog="72933; u014N:xr6bB; 41:W251bGwsbnVsbCxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCwxXV0." aria-hidden="false"></input>  
            <Tooltip title="show Search options" placement='bottom'>              
                <TuneIcon className='tool-icon'/>
            </Tooltip>
        </div>
    )
}

export default Searchbar;