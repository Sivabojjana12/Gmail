import React, { useState } from "react";
import { Drawer, IconButton, Typography, Divider, Radio, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

 function QuickSettingsDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <div>
      
      <IconButton onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </IconButton>

      
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 360, p: 2 }, 
        }}
      >
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          Quick settings
        </Typography>
        <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
          See all settings
        </Button>

        <Divider />

        
        <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
          Apps in Gmail
        </Typography>
        <Button size="small">Customize</Button>

        <Divider sx={{ my: 2 }} />

       
        <Typography variant="subtitle2">Density</Typography>
        <div>
          <Radio checked /> Default
        </div>
        <div>
          <Radio /> Comfortable
        </div>
        <div>
          <Radio /> Compact
        </div>

        <Divider sx={{ my: 2 }} />

        
        <Typography variant="subtitle2">Theme</Typography>
        <Button size="small">View all</Button>

        <Divider sx={{ my: 2 }} />

     
        <Typography variant="subtitle2">Inbox type</Typography>
        <div>
          <Radio checked /> Default
        </div>
        <Button size="small">Customize</Button>
      </Drawer>
    </div>
  );
}


export default QuickSettingsDrawer;