import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';





const Collapsible = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {open ? <><ArrowDropDownIcon/><LabelOutlinedIcon/></> : <><ArrowRightIcon/><LabelOutlinedIcon/></>}
        </ListItemIcon>
        <ListItemText primary={open ? 'Categories' : 'Categories'} sx={{ '& .MuiTypography-root': { fontSize: '14px'} }}/>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleAltOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Social" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InfoOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Updates" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ForumOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Forums" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LocalOfferOutlinedIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText primary="Promotions" sx={{ '& .MuiTypography-root': { fontSize: '13px' }}}/>
          </ListItemButton>
        </List>
      </Collapse>
      
    </List>
  );
};

export default Collapsible;