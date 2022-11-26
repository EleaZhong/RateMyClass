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
const filter = createFilterOptions();


export default function SearchAutocomplete(props) {
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState(props.input ? props.input : "");
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();
    let displaysize = props.displaysize ? props.displaysize : "small";

    useEffect(() => {
        getAll().then((res) => {
            let concatenated = []; // concat code and name
            res.data.forEach((item) => {
                concatenated.push({name: item.code + ": " + item.name});
            });
            setClasses(concatenated);
        });
      }, []);

    return (
    // position="sticky"

    <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        freeSolo
        options={classes}
        onChange={(event, newValue) => {
            if (((typeof newValue === 'string') || (newValue && newValue.inputValue)) && (newValue.name !== undefined) && (newValue.name.startsWith("Add"))) {
                // redirect to newClass page
                navigate('/newClass', {state:{classID:newValue.inputValue.toUpperCase()}})
            } else {
                if (newValue != null && newValue != "") {
                    console.log(newValue.name)
                    console.log(newValue)
                    let searchterm = newValue.name !== undefined ?  newValue.name.split(":")[0] : newValue;
                    navigate("/class?search=" + searchterm);
                    navigate(0);
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
                size={displaysize}
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
        
    />

    )
}
