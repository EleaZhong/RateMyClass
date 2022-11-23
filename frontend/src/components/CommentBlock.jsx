import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
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
    CardContent
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {getAll, getOne} from "../services/classService";
import { createFilterOptions } from '@mui/material/Autocomplete';
import ClassAppbar from "./ClassAppbar"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const filter = createFilterOptions();

/*     {
      "comment": "example 2",
      "professor": "xxx",
      "semester": "xxx",
      "rating": 3.1,
      "date": "YYYY/MM/DD"
    }
*/

export default function CommentBlock(props) {

    var ratingColor = props.rating>0?"primary.main":"error.main";

    return (
        // <Grid item container direction={"column"} alignItems={"center"}> 
            <Grid item container spacing={2} flexGrow={2} xs={12} marginBottom={4}>
                <Grid item>
                    <Paper  sx={{width:"64px", height:"64px", backgroundColor:ratingColor, alignItems:"center", justifyContent:"center",display:"flex"}} >
                        <Typography variant="h4" sx={{color:"white", fontWeight:200}}>
                            {props.rating}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item container alignItems={"center"}  direction={"column"} xs>
                    <Grid item container >
                        <Grid item container alignItems={"center"}>
                            <Grid item >
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    Professor: {props.professor}
                                </Typography>
                            </Grid>
                            <Grid item marginLeft={"auto"}>
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    {props.date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems={"center"}>
                            <Grid item >
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    Semester Taken: {props.semester}
                                </Typography>
                            </Grid>
                            <Grid item marginLeft={"auto"}>
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    Submitted by Anon
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container >

                        <Card sx={{width:"100%", backgroundColor:"grey.300", boxShadow: 0}}>
                            <CardContent sx={{display:"flex", padding:2}}>
                                <Typography variant="h3" sx={{fontWeight:700}} marginRight={2}>
                                    “
                                </Typography>
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    {props.comment}
                                </Typography>
                                <Typography variant="h3" sx={{fontWeight:700}} justifyContent="flex-end" marginLeft={"auto"}>
                                    ”
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item container alignItems={"center"} direction={"column"}  xs={1}>
                    <ArrowUpwardIcon sx={{width:"40px", height:"40px"}} color={props.rating>0?"primary":"disabled"}/>
                    <ArrowDownwardIcon sx={{width:"40px", height:"40px"}} color={props.rating<=0?"error":"disabled"}/>
                </Grid>
            </Grid>
        //     <Grid item container xs={12}>
        //         <Grid item>
        //             hi
        //         </Grid>
        //     </Grid>
        // </Grid>

    )
}
