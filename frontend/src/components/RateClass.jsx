import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './WelcomePage.css';
import Button from '@mui/material/Button';
import { Container} from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { AppBar,Typography, Toolbar,Grid,CssBaseline, Card, InputLabel, FormControl, Select, MenuItem, Slider,FormHelperText,Box  } from '@mui/material';
import FeatureCard from './FeatureCard';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import ClassAppbar from './ClassAppbar';
import { insert } from '../services/commentService';
import {useLocation} from "react-router-dom";
import {useParams, useNavigate} from 'react-router-dom'

export default function RateClass(props){
    
        const marks = [
            {
                value: 0,
                label: 0,
            },
            {
                value: -5,
                label: -5,
            },
            {
                value: 5,
                label: 5,
            },
        ]

        // const { location } = useLocation();
        // const { classID } = location
        let {classID } = useParams();
        console.log(classID);
        

        const [classRating, setClassRating] = useState({rating:0, professor:"", comment:"", semester:""});

        console.log(location.state)

        const navigate = useNavigate();
        
        
        
    

    const handleChange = (event) => {
        setClassRating({...classRating, [event.target.name]: event.target.value})
    }

    
        return(
            <React.StrictMode>
                <ClassAppbar search={true} color={true}/>
                <Box sx={{ display: 'flex', marginTop:9, marginLeft: 12, marginRight: 12}}>
                    <Container justify='center' maxWidth="lg" className="main">
                        <Typography variant='h2'>Add a rating for the class</Typography>
                        <form>
                            <Grid container spacing={4} justify="center">

                                {/* <Grid container item xs={12}>
                                    <Grid item xs={6} md={6}>
                                        <InputLabel id="class-select-label">Select a class: (required)</InputLabel>
                                        <FormControl id="select-control">
                                            
                                            <Select labelId='class-select-label' required autoWidth name="class_select" defaultValue={-1} id="class-select" value={this.state.class_select} onChange={this.handleChange}>
                                                <MenuItem value={-1}>--Select a Class From the Following--</MenuItem>
                                                <MenuItem value={1}>CSCI 201: Priciples of Software development</MenuItem>
                                                

                                            </Select>
                                            <FormHelperText id='select-helper' error></FormHelperText>
                                        </FormControl>                                        
                                    </Grid>
                                </Grid> */}

                                <Grid item xs={12} md={12}>
                                    <InputLabel xs={6} md={6} id="rating-slide-label">Please select a rating between -5 and 5</InputLabel>
                                    <Slider required labelId = "rating-slide-label" name="rating" defaultValue={0} min={-5} max={5} step={1} marks={marks} valueLabelDisplay="auto" value={classRating.rating} onChange={handleChange}/>
                                </Grid>

                                {/* <Grid item xs={12} md={6}>
                                    <InputLabel id="date-pick-label">Select the date you took the class: (required)</InputLabel>
                                    <FormControl id="date-control">
                                        
                                        <input type="month" required id='month-select' name="date" onChange={handleChange} value={classRating.date}/>
                                        <FormHelperText id="month-helper" error></FormHelperText>
                                    </FormControl>
                                </Grid> */}

                                <Grid item xs={12} md={6}>
                                    <InputLabel id="professor-label">Which Professor did you take it with: </InputLabel>
                                    <TextField labelId = "professor-label" name="professor" value={classRating.professor} onChange={handleChange}/>
                                </Grid>


                                <Grid item xs={12} md={6}>
                                    <InputLabel id="semester-label">Which semester did you take it: </InputLabel>
                                    <TextField labelId = "semester-label" name="semester" value={classRating.semester} onChange={handleChange}/>
                                </Grid>

                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={12} md={12}>
                                    <InputLabel id="comment-label" >Comment For the class: </InputLabel>
                                        <FormControl fullWidth>
                                            
                                            <TextField labelId="comment-label" multiline rows={2} name="comment" onChange={handleChange} value={classRating.comment}/>
                                        </FormControl>
                                        
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <Button variant ="contained" 
                                        onClick={ 
                                            
                                            () => {
                                                //console.log(this.state.class_select);
                                                // console.log(this.state.rating);
                                                // console.log(this.state.date);
                                                // console.log(this.state.professor);
                                                
                                                if((classRating.professor).length==0||classRating.comment.length==00||classRating.length==0){
                                                    alert("missing required fileds");
                                                    //document.querySelector("#month-helper").innerHTML = "Please fill this out";
                                                }
                                                else{
                                                    alert("Successfully submitted");
                                                    // TODO: actually submit the form
                                                    insert(classRating.professor, classRating.comment, classRating.rating, location.state.classID);
                                                }
                                                
                                                
                                                
                                            }
                                        }>Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                            
                    </Container>
                </Box>
                
            </React.StrictMode>
            
        );
    
}

