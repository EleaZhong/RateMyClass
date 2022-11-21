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
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {getAll, getOne} from "../services/classService";
import { createFilterOptions } from '@mui/material/Autocomplete';
import ClassAppbar from "./ClassAppbar"
import SearchAutocomplete from './SearchAutocomplete';
const filter = createFilterOptions();



export default function SearchClass() {
    const navigate = useNavigate();

    useEffect(() => {

      }, []);

    return (
    <Box sx={{ display: 'flex' }}>
        {/* top bar */}
        <ClassAppbar search={false} color={false} />
        {/* Centered Search Bar */}
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}> 
            <Grid item>
                <Typography variant="h1" component="h1" sx={{ fontWeight: 700, fontSize: '5rem' }}>
                    ClassMate.
                </Typography>
                {/* Can search here and can choose to add new class, where you're redirected to a new page */}
                <SearchAutocomplete displaysize="large"/>
            </Grid>
        </Grid>
    </Box>
    )
}
