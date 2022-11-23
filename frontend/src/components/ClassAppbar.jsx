import React, {useState, useEffect} from 'react'
import {useParams, useLocation, useNavigate, Link} from 'react-router-dom'
import {
    Box,
    Typography,
    styled,
    AppBar,
    Toolbar,
    Grid,
    Button,
    TextField,
    Autocomplete,
    InputAdornment,
    Avatar,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {getAll, getOne} from "../services/classService";

import { createFilterOptions } from '@mui/material/Autocomplete';
import SearchAutocomplete from './SearchAutocomplete';
const filter = createFilterOptions();


export default function ClassAppbar(props) {
    const [logintoken, setLogintoken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (token) {
            setLogintoken(token)
        }
      }, []);

    return (
    // position="sticky"

    <AppBar component="nav" color={props.color?"white":"transparent"} sx={{ boxShadow: 0 }}>
        <Toolbar>
            {props.search?<Typography justifySelf={"flex-start"} variant="h1" component="h1" sx={{ fontWeight: 700, fontSize: '2rem', color:"black" }}>
                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>ClassMate.</Link>
            </Typography>:null}
            <Grid container justifyContent="flex-end" alignItems="center">
                
                {props.search?<SearchAutocomplete displaysize="small" input={props.input}/>:null}
                {logintoken?<>
                    <Typography variant="h6" size="large" sx={{fontWeight:200, marginLeft: 2}} > Logged in as Student </Typography>
                    <Button variant="contained" color="primary" sx={{ ml: 2 }}>Sign Out</Button></>
                :<>
                    <Button variant="text" size="large">Sign Up</Button>
                    <Button variant="contained"   size="large">Log In</Button>
                </>}
            </Grid>
        </Toolbar>
    </AppBar>

    )
}
