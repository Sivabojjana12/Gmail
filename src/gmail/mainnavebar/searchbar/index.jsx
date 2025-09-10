import React,{useState,useEffect,useRef} from 'react';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import Tooltip from '@mui/material/Tooltip';
import TextField from "@mui/material/TextField";
import {FormControl,Select,Checkbox,FormControlLabel,Button,MenuItem,Typography,Stack } from "@mui/material";






function Searchbar() {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  const toggle = () => {
    setOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
    return(
        <div className="searchbar">
            <Tooltip title="Search" placement='bottom'>
                <SearchIcon className="search-icon"/>
            </Tooltip>
                <input class="search-input" aria-label="Search mail" autocomplete="off" placeholder="Search mail" value="" name="q" type="text" dir="ltr" spellcheck="false" aria-haspopup="true" aria-live="off" aria-owns="gs_sbt50"  jslog="72933; u014N:xr6bB; 41:W251bGwsbnVsbCxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCwxXV0." aria-hidden="false"></input>  
            <Tooltip title="show Search options" placement='bottom'>              
                <TuneIcon className='tool-icon' onClick={toggle}/>
            </Tooltip>
            {open && (
                <div className="form-tool" ref={formRef}>
                    <form style={{ marginTop: "10px", border: "1px solid #ccc", padding: "20px" }}>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>From</Typography>
                            <TextField variant="standard" fullWidth />
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>To</Typography>
                            <TextField variant="standard" fullWidth />
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>Subject</Typography>
                            <TextField variant="standard" fullWidth />
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>Has the words</Typography>
                            <TextField variant="standard" fullWidth />
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>Doesn’t have</Typography>
                            <TextField variant="standard" fullWidth />
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                                <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>Size</Typography>
                                <Stack direction="row" spacing={1} alignItems="center">
                                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                                    <Select defaultValue=" ">
                                    <MenuItem value="greater">greater than</MenuItem>
                                    <MenuItem value="less">less than</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField variant="standard" sx={{ width: 100 }} />
                                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                                    <Select defaultValue="mb">
                                        <MenuItem value="mb">MB</MenuItem>
                                        <MenuItem value="kb">KB</MenuItem>
                                        <MenuItem value="bytes">Bytes</MenuItem>
                                    </Select>
                                </FormControl>
                                </Stack>
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem" }}>Date within</Typography>
                            <FormControl variant="standard" sx={{ minWidth: 150 }}>
                                <Select defaultValue="3days">
                                <MenuItem value="1day">1 day</MenuItem>
                                <MenuItem value="3days">3 days</MenuItem>
                                <MenuItem value="1week">1 week</MenuItem>
                                <MenuItem value="1month">1 month</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField type="date" variant="standard" sx={{ width: 200 }}/>
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center">
                            <Typography sx={{ minWidth: 100,fontSize:"0.7rem"}}>Search</Typography>
                            <FormControl sx={{fontSize:"0.8rem"}} variant="standard" fullWidth>
                                <Select defaultValue="all">
                                <MenuItem value="all">All Mail</MenuItem>
                                <MenuItem value="inbox">Inbox</MenuItem>
                                <MenuItem value="sent">Sent</MenuItem>
                                <MenuItem value="drafts">Drafts</MenuItem>
                                </Select>
                            </FormControl>
                            </Stack>

                            <Stack direction="row" spacing={0} alignItems="center" sx={{ ml: 12 }}>
                            <FormControlLabel sx={{fontSize:"0.7rem"}} control={<Checkbox />} label="Has attachment" />
                            <FormControlLabel sx={{fontSize:"0.7rem"}} control={<Checkbox />} label="Don't include chats" />
                            </Stack>

                            <Stack direction="row" spacing={0} justifyContent="flex-end">
                                <Button disabled>Create filter</Button>
                                <Button variant="contained" color="primary">
                                    Search
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </div>
            )}

        </div>
    )
}

export default Searchbar;