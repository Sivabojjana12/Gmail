import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import "./rightside.css"

function GmailStylePagination() {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10; 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="rightend">
        <TablePagination fontSize="small" component="div" count={9179} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} rowsPerPageOptions={[]} labelRowsPerPage="" 
        labelDisplayedRows={({ from, to, count }) => `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`}
        sx={{border: "none",".MuiTablePagination-toolbar": {minHeight: "auto",padding: 0},".MuiTablePagination-spacer": {flex: "none"}}}/>
        <div className="inputtools">
            <KeyboardOutlinedIcon fontSize="small"/>
            <ArrowDropDownOutlinedIcon fontSize="small" />
        </div>
    </div>
  );
}

export default GmailStylePagination;