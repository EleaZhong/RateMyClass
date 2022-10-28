import React from 'react'
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

import { createFilterOptions } from '@mui/material/Autocomplete';
const filter = createFilterOptions();

const tempClasses = [
    {name: "CSCI102: Fundamentals of Computation "},
    {name: "CSCI103: Introduction to Programming"},
    {name: "CSCI104: Data Structures and Object Oriented Design "},
    {name: "CSCI170: Discrete Methods in Computer Science "},
    {name: "CSCI201: Principles of Software Development "},
    {name: "CSCI270: Introduction to Algorithms and Theory of Computing "},
    {name: "CSCI310: Software Engineering "},
]


export default function SearchClass() {
    const [value, setValue] = React.useState(null);
    return (
    <Box sx={{ display: 'flex' }}>
        {/* top bar */}
        <AppBar component="nav" color="transparent" sx={{ boxShadow: 0 }}>
            <Toolbar>
                <Grid container justifyContent="flex-end">
                    <Button variant="text" size="large">Sign Up</Button>
                    <Button variant="contained"   size="large">Log In</Button>
                </Grid>
            </Toolbar>
        </AppBar>
        {/* Centered Search Bar */}
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}> 
            <Grid item>
                <Typography variant="h1" component="h1" sx={{ fontWeight: 700, fontSize: '5rem' }}>
                    ClassMate.
                </Typography>
                {/* Can search here and can choose to add new class, where you're redirected to a new page */}
                <Autocomplete
                    freeSolo
                    options={tempClasses}
                    onChange={(event, newValue) => {
                        if ((typeof newValue === 'string') || (newValue && newValue.inputValue)) {
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
                            size="large" 
                            sx={{ width: '50rem' }}
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
                />
            </Grid>
        </Grid>
    </Box>
    )
}
