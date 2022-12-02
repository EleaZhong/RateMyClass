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
    CardActionArea
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {getAll, getOne} from "../services/classService";
import { createFilterOptions } from '@mui/material/Autocomplete';
import ClassAppbar from "./ClassAppbar"
import CommentBlock from "./CommentBlock"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
const filter = createFilterOptions();



export default function DisplayClass(props) {

    const [classData, setClassData] = useState(null);
    let {id } = useParams();
    console.log(id);
    useEffect(() => {
        getOne(id).then((res) => {
            console.log(res.data);
            setClassData(res.data);
        }).catch((err) => {
            console.log(err);
            console.log("error");
        });
    }, []);
    const navigate = useNavigate();
    console.log(classData);

    return (
        <Box>
            {/* top bar */}
            <ClassAppbar search={true} color={true} />
            
            <Box sx={{ display: 'flex', marginTop:9, marginLeft: 12, marginRight: 12}}>
                <Grid container>    
                    <Grid item container spacing={2} flexGrow={1} xs={12} marginBottom={4}>
                        <Grid item >
                            <Paper  sx={{width:"128px", height:"128px", backgroundColor:"primary.main", alignItems:"center", justifyContent:"center",display:"flex"}} >
                                <Typography variant="h2" sx={{color:"white", fontWeight:200}}>
                                {classData?.ratings} 
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Typography variant="h4" sx={{fontWeight:200}}>
                                {classData?.code}:
                            </Typography>
                            <Typography variant="h4" sx={{fontWeight:200}}>
                                {classData?.name}
                            </Typography>
                            <Typography variant="h6" sx={{fontWeight:200}}>
                                {classData?.commentnum} total reviews
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{width:"100%", marginBottom:6}}/>
                    
                    {classData?<Grid container xs={12}>
                        {classData.comments.map((comment) => {
                            return <CommentBlock rating={comment.rating} semester={comment.semester} professor={comment.professor} date={comment.date} comment={comment.comment}/>
                        })}
                    </Grid>:null}
                    
                    <Grid container xs={12}>
                        <Grid item container spacing={2} flexGrow={2} xs={12} marginBottom={4}>
                            <Grid item>
                                <CardActionArea onClick={() => navigate('/rateClass', {state:{classID:classData.classID}})}>
                                    {/* TODO: pass in classID from the Search Page */}
                                    <Paper  sx={{width:"64px", height:"64px", backgroundColor:"grey.400", alignItems:"center", justifyContent:"center",display:"flex"}} >
                                        <AddIcon sx={{width:"64px", height:"64px", color:"white"}}/>
                                    </Paper>
                                </CardActionArea>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    Add a review
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    
    )
}
