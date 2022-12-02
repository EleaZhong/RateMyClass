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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // check if user logged in
        /*const token = localStorage.getItem('authToken')
        if (token) {
            setIsLoggedIn(true)
        }*/

        const userID = localStorage.getItem('userID')
        if (userID) {
            setIsLoggedIn(true)
        }
            
      }, []);

    const logOut = () => {
        localStorage.removeItem('userID')
        setIsLoggedIn(false)
    }

    return (
    // position="sticky"

    <AppBar component="nav" color={props.color?"white":"transparent"} sx={{ boxShadow: 0 }}>
        <Toolbar>
            {props.search?<Typography justifySelf={"flex-start"} variant="h1" component="h1" sx={{ fontWeight: 700, fontSize: '2rem', color:"black" }}>
                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>ClassMate.</Link>
            </Typography>:null}
            <Grid container justifyContent="flex-end" alignItems="center">
                
                {props.search?<SearchAutocomplete displaysize="small" input={props.input}/>:null}
                {isLoggedIn?<>
                    <Typography variant="h6" size="large" sx={{fontWeight:200, marginLeft: 2}} > Logged in as Student </Typography>
                    <Button variant="contained" color="primary" onClick={() => logOut()} sx={{ ml: 2 }}>Sign Out</Button></>
                :<>
                    <Button variant="text" size="large" component={Link} to='/signUp'>Sign Up</Button>
                    <Button variant="contained" size="large" component={Link} to='logIn'>Log In</Button>
                </>}
            </Grid>
        </Toolbar>
    </AppBar>

    )
}
