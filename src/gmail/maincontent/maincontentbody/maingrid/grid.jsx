import * as React from 'react';
import './grid.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailList from "../primarymessages/primarymessage.jsx"
import PromotionList from '../promotionmessgaes/promotion.jsx';
import SocialList from '../social';
import UpdatesList from '../updates/index.jsx'; 




const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "flex-start",
    paddingTop:"35px",
    fontSize: "14px",
    textTransform: "none",
    // minHeight: 52,
    // minWidth: 150,
    width:"250px",
    color: "gray",
    "&.Mui-selected": {
      color: "sky",
    //   backgroundColor: "#f0f6ff",
      borderRadius: "8px",
    },
     "&:hover": {
      backgroundColor: "#f5f5f5", 
      color: "black",                       
    },
    "& .MuiTab-iconWrapper": {
      fontSize: "16px",
      marginRight: "9px", 
    },
  })
);


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs({ page, rowsPerPage }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="maingrid"sx={{ width:'100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='grid-tabs'value={value} onChange={handleChange} aria-label="basic tabs example">
          <CustomTab className="inboxoutlined" icon={<InboxOutlinedIcon sx={{fontSize:'18px'}}/>}label="Primary" {...a11yProps(0)}  />
          <CustomTab icon={<LocalOfferOutlinedIcon sx={{fontSize:'18px'}}/>}label="Promotion" {...a11yProps(1)} />
          <CustomTab icon={<GroupOutlinedIcon sx={{fontSize:'18px'}}/>}label="Social" {...a11yProps(2)} />
          <CustomTab icon={<InfoOutlinedIcon sx={{fontSize:'18px'}}/>}label="Updates" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EmailList page={page} rowsPerPage={rowsPerPage}/> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PromotionList page={page} rowsPerPage={rowsPerPage}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SocialList page={page} rowsPerPage={rowsPerPage}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <UpdatesList page={page} rowsPerPage={rowsPerPage}/>
      </CustomTabPanel>
    </Box>
  );
}


export default BasicTabs;