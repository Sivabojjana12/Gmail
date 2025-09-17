// import React,{useState} from "react";
// import TablePagination from "@mui/material/TablePagination";
// import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import  Tooltip from "@mui/material/Tooltip";
// import "./rightside.css"

// function GmailStylePagination() {
//   const [anchorEl, setAnchorEl] = useState(false);
//       const open = Boolean(anchorEl);
//       const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//        };
  
//       const handleClose = () => {
//       setAnchorEl(null);
//         };
//   const [page, setPage] = React.useState(1);
//   const rowsPerPage = 10; 

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <div className="rightend">
//       <div className="paginationinfo">
//         <TablePagination component="div" count={9179} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} rowsPerPageOptions={[]} labelRowsPerPage="" 
//         labelDisplayedRows={({ from, to, count }) => (
//           <Tooltip title={`Showing ${from} to ${to} out of ${count}`}>
//             <span>{`${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`}</span>
//           </Tooltip>
//         )}
//         sx={{border: "none",".MuiTablePagination-toolbar": {minHeight: "auto",padding: 0},".MuiTablePagination-spacer": {flex: "none"}}}/>
//       </div>
//       <div className="inputtools">
//         <Tooltip title="Input tools on/off(Ctrl - Shift - K)" placement="bottom">
//           <KeyboardOutlinedIcon className="keyboard-icon" sx={{fontSize:19}}/>
//         </Tooltip>
//         <Tooltip title="Select input tool" placement="bottom">
//           <ArrowDropDownOutlinedIcon className="arrow-icon" sx={{fontSize:18}} anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}/>
//         </Tooltip>
//         {anchorEl &&(
//           <div>
            
//           </div>
//         ) }
//       </div>
//     </div>
//   );
// }

// export default GmailStylePagination;



// GmailStylePagination.js


// GmailStylePagination.js


import React from "react";
import TablePagination from "@mui/material/TablePagination";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Tooltip from "@mui/material/Tooltip";
import "./index.css";

function GmailStylePagination({ page, rowsPerPage, count, onPageChange }) {
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
        <Tooltip
          title="Input tools on/off(Ctrl - Shift - K)"
          placement="bottom"
        >
          <KeyboardOutlinedIcon className="keyboard-icon" sx={{ fontSize: 19 }} />
        </Tooltip>
        <Tooltip title="Select input tool" placement="bottom">
          <ArrowDropDownOutlinedIcon className="arrow-icon" sx={{ fontSize: 18 }} />
        </Tooltip>
      </div>
    </div>
  );
}

export default GmailStylePagination;
