import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Menu, MenuItem, Divider, Box,Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import "./index.css";

function GmailStylePagination({ page, rowsPerPage, count, onPageChange }) {
  const EnIcon = () => (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 26,
        fontSize: 13,
        fontWeight: 500,
        color: "#5f6368",
        borderRadius: "4px",
      }}
    >
      En
    </Box>
  );

  // Dropdown menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const handleKeyboardOpen = () => setKeyboardOpen(true);
  const handleKeyboardClose = () => setKeyboardOpen(false);

  // Example keyboard keys
  const keys = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ];

  return (
    <div className="rightend">
      <div className="paginationinfo">
        <TablePagination
          component="div"
          count={count}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
          labelRowsPerPage=""
          labelDisplayedRows={({ from, to, count }) => (
            <Tooltip title={`Showing ${from} to ${to} out of ${count}`}>
              <span>
                {`${from}–${to} of ${
                  count !== -1 ? count : `more than ${to}`
                }`}
              </span>
            </Tooltip>
          )}
          sx={{
            border: "none",
            ".MuiTablePagination-toolbar": {
              minHeight: "auto",
              padding: 0,
            },
            ".MuiTablePagination-spacer": { flex: "none" },
          }}
        />
      </div>

      <div className="inputtools">
        {/* Keyboard Icon → Opens Virtual Keyboard */}
        <Tooltip title="Input tools on/off (Ctrl - Shift - K)" placement="bottom">
          <KeyboardOutlinedIcon
            className="keyboard-icon"
            sx={{ fontSize: 19, cursor: "pointer" }}
           onClick={() => setKeyboardOpen((prev) => !prev)}
          />
        </Tooltip>

        {/* Virtual Keyboard Popup */}
        {keyboardOpen && (
        <Box sx={{
          position: "fixed",
          top: 50,
          left: "30%",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          padding: "12px",
          zIndex: 100,}}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            English
          </Typography>

          {keys.map((row, i) => (
            <Box key={i} sx={{ display: "flex", justifyContent: "center", mb: 1}}>
              {row.map((key) => (
                <Box
                  key={key}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "6px 12px",
                    margin: "2px",
                    minWidth: "32px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: "#f9f9f9",
                    "&:hover": { backgroundColor: "#eee" },
                  }}
                >
                  {key}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        )}

        
        <Tooltip title="Select input tool" placement="bottom">
          <ArrowDropDownOutlinedIcon
            className="arrow-icon"
            sx={{ fontSize: 18, cursor: "pointer" }}
            onClick={handleClick}
          />
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem sx={{ paddingLeft: "30px" }}>
            <KeyboardOutlinedIcon sx={{ fontSize: "medium", padding: "8px" }} />
            English
          </MenuItem>
          <MenuItem sx={{ paddingLeft: "30px" }}>
            <KeyboardOutlinedIcon sx={{ fontSize: "medium", padding: "8px" }} />
            English Dvorak
          </MenuItem>
          <MenuItem sx={{ paddingLeft: "35px" }}>
            <EnIcon sx={{ padding: "8px" }} />
            English
          </MenuItem>
          <MenuItem sx={{ paddingLeft: "30px" }}>
            <CreateIcon sx={{ fontSize: "medium", padding: "5px" }} />
            English
          </MenuItem>
          <Divider />
          <MenuItem sx={{ paddingLeft: "30px" }}>Input Tools Settings</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default GmailStylePagination;
