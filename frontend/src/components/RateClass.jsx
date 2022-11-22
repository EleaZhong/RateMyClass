import React from 'react';
import { useRef } from 'react';
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

export default class RateClass extends React.Component{
    constructor(props){
        super(props);
        this.classc = React.createRef();
        this.professor = React.createRef();

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
    }

    componentDidMount(){
        console.log(this.classc);
        this.classc.current.focus();
    }

    

    

    render() {
        

        return(
            <React.StrictMode>
                <main>
                    <Container justify='center' maxWidth="lg" className="main">
                        <Typography variant='h2'>Add a rating for the class</Typography>
                        <form>
                            <Grid container spacing={4} justify="center">
                                <Grid container item xs={12}>
                                    <Grid item xs={6} md={6}>
                                        <FormControl id="select-control">
                                            <InputLabel id="class-select-label">Select a class:</InputLabel>
                                            <Select labelId='class-select-label' required autoWidth  defaultValue={-1} id="class-select" ref={this.classc}>
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
                                    <Slider required labelId = "rating-slide-label" defaultValue={0} min={-5} max={5} step={1} marks={this.marks} valueLabelDisplay="auto"/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl id="select-control">
                                        <InputLabel id="date-pick-label">Select the date you took the class:</InputLabel>
                                        <input type="month" required id='month-select'/>
                                        <FormHelperText id="month-helper" error></FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel id="professor-label">Which Professor did you take it with: </InputLabel>
                                    <TextField labelId = "professor-label" ref={this.professor}/>
                                </Grid>
                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={12} md={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="comment-label" >Comment For the class: </InputLabel>
                                            <TextField labelId="comment-label" multiline rows={2}/>
                                        </FormControl>
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button variant ="contained" 
                                        onClick={ 
                                            () => {
                                                console.log(this.classc.current.value);
                                                console.log(this.professor.current.value);
                                                if(this.classc.current.value == null || this.classc.current.value == -1){
                                                    alert("missing required fileds");
                                                    document.querySelector("#select-helper").innerHTML = "Please fill this out";
                                                    
                                                }
                                                else if(document.querySelector("#month-select").value == null){
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
