import React from 'react';
import ReactDOM from 'react-dom/client';
import './WelcomePage.css';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
import { Container} from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { AppBar,Typography, Toolbar,Grid,CssBaseline, Card  } from '@mui/material';
import FeatureCard from './FeatureCard';
import ClassImg from './img/testimg.webp';
import CommentImg from './img/comment.png';

export default function WelcomePage(){
    const features = ['Rate your class', 'Leave Comments'];
    const descriptions = ['Give a score to your class.','Leave comments for how the class can improve for others to see.'];
    const images = [ClassImg, CommentImg];

    let class_infos = [];

    for (let i=0;i<features.length;i++){
        let tempObj = {feature:features[i], description:descriptions[i], image:images[i]};
        class_infos.push(tempObj);
    }

    return(
        <React.StrictMode>
          <AppBar position="relative">
            <Toolbar><h6>Rate my Class</h6></Toolbar>
          </AppBar>
          <main>
            <Container justify="center" maxWidth="lg" className="main">
              <Typography variant='h1' align="center" gutterBottom id='header'>Rate My Class</Typography>
              <Typography variant='h5' align="center" color="textSecondary"> Rate and compare classes from semaster to semaster</Typography>
              <div>
                <Grid container spacing = {4} justifyContent="center" id="cards">
      
                  {
                    class_infos.map((e) => {
                      return (
                        <Grid item>
                          <FeatureCard className='card' image={e.image} text={e.feature} description={e.description}/>
                        </Grid>
                      )
                    } )
                  }
                  
                </Grid>
              </div>
              <div>
                <Grid container spacing = {2} justifyContent="center" id="buttons">
                  <Grid item>
                    <Button variant="contained">Sign Up</Button>
                    
                  </Grid>
                  <Grid item><Button variant="outlined"  color="secondary">Login</Button></Grid>
                </Grid>
              </div>
                
            </Container>
          </main>
          
        </React.StrictMode>
    );
}