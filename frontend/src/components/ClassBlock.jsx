import React, {useState, useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
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
    Paper,
    Divider,
    SvgIcon,
    Card,
    CardContent,
    CardActionArea,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {getAll, getOne} from "../services/classService";
import { createFilterOptions } from '@mui/material/Autocomplete';
import ClassAppbar from "./ClassAppbar"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { borderRadius } from '@mui/system';
const filter = createFilterOptions();

/*     {
      "comment": "example 2",
      "professor": "xxx",
      "semester": "xxx",
      "rating": 3.1,
      "date": "YYYY/MM/DD"
    }
*/

export default function ClassBlock(props) {



    return (
        // <Grid item container direction={"column"} alignItems={"center"}> 
        <CardActionArea LinkComponent={Link} to={"/class/"+props.id} sx={{borderRadius:"5px"}}>
            <Grid item container spacing={2} flexGrow={2} xs={12} marginBottom={4}>

                <Grid item>
                    
                        <Paper  sx={{width:"80px", height:"80px", backgroundColor:"primary.main", alignItems:"center", justifyContent:"center",display:"flex"}} >
                            <Typography variant="h4" sx={{color:"white", fontWeight:200}}>
                                {props.rating.toFixed(1)}
                            </Typography>
                        </Paper>
                </Grid>
                <Grid item container alignItems={"left"}  direction={"column"} xs>

                
                <Grid item >
                        <Typography variant="h5" sx={{fontWeight:200}} >
                            {props.code} :
                        </Typography>
                </Grid>
                <Grid item >
                        <Typography variant="h5" sx={{fontWeight:200}}>
                            {props.name}
                        </Typography>
                </Grid>
                



                </Grid>

            </Grid>
            </CardActionArea>


    )
}
