import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import  Tooltip from "@mui/material/Tooltip";
import "./rightside.css"

function GmailStylePagination() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10; 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="rightend">
      <div className="paginationinfo">
        <TablePagination component="div" count={9179} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} rowsPerPageOptions={[]} labelRowsPerPage="" 
        labelDisplayedRows={({ from, to, count }) => `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`}
        sx={{border: "none",".MuiTablePagination-toolbar": {minHeight: "auto",padding: 0},".MuiTablePagination-spacer": {flex: "none"}}}/>
      </div>
      <div className="inputtools">
        <Tooltip title="Input tools on/off(Ctrl - Shift - K)" placement="bottom">
          <KeyboardOutlinedIcon sx={{fontSize:19}}/>
        </Tooltip>
        <Tooltip title="Select input tool" placement="bottom">
          <ArrowDropDownOutlinedIcon sx={{fontSize:18}}/>
        </Tooltip>
      </div>
    </div>
  );
}

export default GmailStylePagination;