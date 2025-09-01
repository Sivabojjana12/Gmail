import React, { useState } from 'react';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LabelImportantOutlineIcon from '@mui/icons-material/LabelImportantOutline';
import AddIcon from '@mui/icons-material/Add';
import Collapsible from './categories';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UnsubscribeOutlinedIcon from '@mui/icons-material/UnsubscribeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';





const CollapsibleMuiMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </ListItemIcon>
        <ListItemText primary={open ? 'Less' : 'More'} sx={{ '& .MuiTypography-root': { fontSize: '13px' } }}/>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <LabelImportantOutlineIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Important" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <ChatOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Chats" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <ScheduleSendOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Scheduled" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <MarkunreadOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="All mails" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <ReportGmailerrorredOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Spam" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <DeleteOutlineIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Trash" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <Collapsible/>
          <ListItemButton >
            <ListItemIcon>
              <UnsubscribeOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Manage subscription" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Manage Labels" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <AddIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Create new Label" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
        </List>
      </Collapse>
      
    </List>
  );
};

export default CollapsibleMuiMenu;