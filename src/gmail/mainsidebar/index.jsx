// import React from 'react';
// import {Link } from "react-router-dom";
// import './index.css';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import SendIcon from '@mui/icons-material/Send';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
// import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
// import CollapsibleMuiMenu from './lessmore';
// import Tooltip from '@mui/material/Tooltip';
// import {
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';


// function Sidebar({isOpen}) {

//   const sx_common = {
//             backgroundColor: "#c2e7ff",
//             color: "black",
//             textTransform: "none",
//             fontWeight: 600,
//             transition: "all 0.3s ease",
//   }
//   const sx_open ={
//             minWidth: "120px",
//             height: "40px" ,
//             borderRadius: "20px" ,
//             justifyContent:  "flex-start" ,
//             padding:"0 16px" ,
//            ...sx_common
//             };
//   const sx_closed ={
//             minWidth: "0px",
//             height:  "50px",
//             borderRadius:  "50%",
//             justifyContent: "center",
//             padding:  "0",
//             ...sx_common
//             }

//   return (
//     <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//       <div className='compose-button'>
        
//         <Stack direction="row" spacing={2}>
//             <Button variant="contained" startIcon={<CreateOutlinedIcon  sx={{ color: 'normal' }}/>} sx={isOpen ? sx_open : sx_closed } >
//               {isOpen && "Compose"}
//             </Button>
//         </Stack>
    
//       </div>
      
//       <List className='sidebar-list' >
//         <Link to="/inbox">
//         <Tooltip title="Inbox" placement='right'>
//         <ListItemButton>
//           <ListItemIcon>
//             <InboxOutlinedIcon fontSize='small'/>
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </ListItemButton>
//         </Tooltip>
//         </Link>
//         <Link to="/starred">

//         <Tooltip title="Starred" placement='right'>
//         <ListItemButton>
//           <ListItemIcon>
//             <StarBorderIcon fontSize='small'/>
//           </ListItemIcon>
//           <ListItemText primary="Starred" />
//         </ListItemButton>
//         </Tooltip>
//         </Link>
//         <Link to="/snoozed" >
//           <Tooltip title="Snoozed" placement='right'>
//           <ListItemButton>
//             <ListItemIcon>
//               <AccessTimeIcon fontSize='small'/>
//             </ListItemIcon>
//             <ListItemText primary="Snoozed" />
//           </ListItemButton>
//           </Tooltip>
//         </Link>

//         <Tooltip title="Sent" placement='right'>
//         <ListItemButton>
//           <ListItemIcon>
//             <SendIcon fontSize='small'/>
//           </ListItemIcon>
//           <ListItemText primary="Sent" />
//         </ListItemButton>
//         </Tooltip>

//         <Tooltip title="Drafts" placement='right'>
//         <ListItemButton>
//           <ListItemIcon>
//             <InsertDriveFileOutlinedIcon/>
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItemButton>
//         </Tooltip>
      
      
//           <CollapsibleMuiMenu />

//         <ListItemButton sx={{"&:hover": {backgroundColor: "transparent"}}}>
//         <ListItemText primary="Labels" />
//         <Tooltip title="Create new Label" placement="right">
//         <ListItemIcon sx={{"&:hover": {backgroundColor: "#f0f0f0",borderRadius: "16px",cursor: "pointer",paddingRight: "0px"}}}>
//             <AddIcon fontSize="small" />
//         </ListItemIcon>
//         </Tooltip>
//         </ListItemButton>

        
//       </List>
//     </div>

//   );
// }

// export default Sidebar;

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import CollapsibleMuiMenu from './lessmore';
import Tooltip from '@mui/material/Tooltip';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Sidebar({ isMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen !== undefined) {
      setIsOpen(isMenuOpen);
    }
  }, [isMenuOpen]);


  const sx_common = {
    backgroundColor: "#c2e7ff",
    color: "black",
    textTransform: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
  };
  const sx_open = {
    minWidth: "120px",
    height: "40px",
    borderRadius: "20px",
    justifyContent: "flex-start",
    padding: "0 16px",
    ...sx_common
  };
  const sx_closed = {
    minWidth: "0px",
    height: "50px",
    borderRadius: "50%",
    justifyContent: "center",
    padding: "0",
    ...sx_common
  };

  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      onMouseEnter={() => setIsOpen(true)}  
      onMouseLeave={() => { 
        if (!isMenuOpen) setIsOpen(false);  
      }}
    >
      <div className='compose-button'>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<CreateOutlinedIcon />}
            sx={isOpen ? sx_open : sx_closed}
          >
            {isOpen && "Compose"}
          </Button>
        </Stack>
      </div>

      <List className='sidebar-list'>
        <Link to="/inbox">
          <Tooltip title="Inbox" placement='right'>
            <ListItemButton>
              <ListItemIcon>
                <InboxOutlinedIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </Tooltip>
        </Link>

        <Link to="/starred">
          <Tooltip title="Starred" placement='right'>
            <ListItemButton>
              <ListItemIcon>
                <StarBorderIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </Tooltip>
        </Link>

        <Link to="/snoozed">
          <Tooltip title="Snoozed" placement='right'>
            <ListItemButton>
              <ListItemIcon>
                <AccessTimeIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText primary="Snoozed" />
            </ListItemButton>
          </Tooltip>
        </Link>

        <Tooltip title="Sent" placement='right'>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary="Sent" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Drafts" placement='right'>
          <ListItemButton>
            <ListItemIcon>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </Tooltip>

        <CollapsibleMuiMenu />

        <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
          <ListItemText primary="Labels" />
          <Tooltip title="Create new Label" placement="right">
            <ListItemIcon sx={{
              "&:hover": {
                backgroundColor: "#f0f0f0",
                borderRadius: "16px",
                cursor: "pointer",
                paddingRight: "0px"
              }
            }}>
              <AddIcon fontSize="small" />
            </ListItemIcon>
          </Tooltip>
        </ListItemButton>
      </List>
    </div>
  );
}

export default Sidebar;
