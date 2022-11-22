import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './WelcomePage.css';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
import { Container} from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { AppBar,Typography, Toolbar,Grid,CssBaseline, Card, InputLabel, FormControl, Select, MenuItem, Slider,FormHelperText  } from '@mui/material';
import FeatureCard from './FeatureCard';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import { render } from '@testing-library/react';
import ClassAppbar from './ClassAppbar';

export default class AddRating extends React.Component{
    constructor(props){
        super(props);
        this.marks = [
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
        this.state={
            class_select:null,
            rating:0,
            professor:'',
            date:null,
            comment:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target=event.target;
        const value=target.value;
        const name=target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <React.StrictMode>
                <ClassAppbar/>
                <main>
                    <Container justify='center' maxWidth="lg" className="main">
                        <Typography variant='h2'>Add a rating for the class</Typography>
                        <form>
                            <Grid container spacing={4} justify="center">

                                <Grid container item xs={12}>
                                    <Grid item xs={6} md={6}>
                                        <InputLabel id="class-select-label">Select a class: (required)</InputLabel>
                                        <FormControl id="select-control">
                                            
                                            <Select labelId='class-select-label' required autoWidth name="class_select" defaultValue={-1} id="class-select" value={this.state.class_select} onChange={this.handleChange}>
                                                <MenuItem value={-1}>--Select a Class From the Following--</MenuItem>
                                                <MenuItem value={1}>CSCI 201: Priciples of Software development</MenuItem>
                                                {/* TODO populate class select with all classes*/}
                                            </Select>
                                            <FormHelperText id='select-helper' error></FormHelperText>
                                        </FormControl>                                        
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <InputLabel xs={6} md={6} id="rating-slide-label">Please select a rating between -5 and 5</InputLabel>
                                    <Slider required labelId = "rating-slide-label" name="rating" defaultValue={0} min={-5} max={5} step={1} marks={this.marks} valueLabelDisplay="auto" onChange={this.handleChange}/>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputLabel id="date-pick-label">Select the date you took the class: (required)</InputLabel>
                                    <FormControl id="date-control">
                                        
                                        <input type="month" required id='month-select' name="date" onChange={this.handleChange}/>
                                        <FormHelperText id="month-helper" error></FormHelperText>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputLabel id="professor-label">Which Professor did you take it with: </InputLabel>
                                    <TextField labelId = "professor-label" name="professor" value={this.state.professor} onChange={this.handleChange}/>
                                </Grid>

                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={12} md={12}>
                                    <InputLabel id="comment-label" >Comment For the class: </InputLabel>
                                        <FormControl fullWidth>
                                            
                                            <TextField labelId="comment-label" multiline rows={2} name="comment" onChange={this.handleChange}/>
                                        </FormControl>
                                        
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <Button variant ="contained" 
                                        onClick={ 
                                            
                                            () => {
                                                console.log(this.state.class_select);
                                                console.log(this.state.rating);
                                                console.log(this.state.date);
                                                console.log(this.state.professor);
                                                console.log(this.state.comment);
                                                if(this.state.class_select == null){
                                                    alert("missing required fileds");
                                                    document.querySelector("#select-helper").innerHTML = "Please fill this out";
                                                    
                                                }
                                                else if(this.state.month == null){
                                                    alert("missing required fileds");
                                                    document.querySelector("#month-helper").innerHTML = "Please fill this out";
                                                }
                                                else{
                                                    alert("Successfully submitted");
                                                    // TODO: actually submit the form
                                                }
                                            }
                                        }>Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                            
                    </Container>
                </main>
                
            </React.StrictMode>
            
        );
    }
}