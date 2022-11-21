import React, {useState, useEffect} from 'react'
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
const filter = createFilterOptions();


export default function ClassAppbar(props) {
    const [value, setValue] = useState(null);
    const [classes, setClasses] = useState([]);
    const [logintoken, setLogintoken] = useState(null);

    useEffect(() => {
        getAll().then((res) => {
            let concatenated = []; // concat code and name
            res.data.forEach((item) => {
                concatenated.push({name: item.code + ": " + item.name});
            });
            setClasses(concatenated);
        });
        const token = localStorage.getItem('authToken')
        if (token) {
            setLogintoken(token)
        }
      }, []);

    return (
    // position="sticky"

    <AppBar component="nav" color={props.color?"primary":"transparent"} sx={{ boxShadow: 0 }}>
        <Toolbar>
            
            <Grid container justifyContent="flex-end" alignItems="center">
                {props.search?<Autocomplete
                    freeSolo
                    options={classes}
                    onChange={(event, newValue) => {
                        if (((typeof newValue === 'string') || (newValue && newValue.inputValue)) && (newValue.name !== undefined) && (newValue.name.startsWith("Add"))) {
                            alert("redirect to create") // we should redirect to a new page here
                        } else {
                            if (newValue != null && newValue != "") {
                                alert("redirect to search")
                            }
                            setValue(newValue);
                        }
                    }}
                    
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                
                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some((option) => inputValue === option.name);
                        if (inputValue !== '' && !isExisting) {
                            filtered.push({
                                inputValue,
                                name: `Add "${inputValue}"`,
                            });
                        }
                        return filtered;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.name}</li>}
                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                        
                            return option.inputValue;
                        }
                        // Regular option
                        return option.name;
                    }}
                    renderInput={(params) => (
                        <TextField {...params} 
                            label="Search Classes" 
                            variant="outlined" 
                            size="small" 
                            sx={{ width: '25rem' }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    
                />:null}
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
