import React, {useState, useEffect} from 'react'
import {useParams, useLocation, useNavigate, Navigate} from 'react-router-dom'
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
import {searchClass} from "../services/classService";
import { createFilterOptions } from '@mui/material/Autocomplete';
import ClassAppbar from "./ClassAppbar"
import ClassBlock from './ClassBlock';
import AddIcon from '@mui/icons-material/Add';

const filter = createFilterOptions();



function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

export default function ListClass(props) {

    const [classData, setClassData] = useState(null);
    let query = useQuery();
    let search = query.get("search");
    const navigate = useNavigate();


    console.log(search);
    useEffect(() => {
        searchClass(search).then((res) => {
            console.log(res.data);
            setClassData(res.data);
        }).catch((err) => {
            console.log(err);
            console.log("error");
        });
    }, []);

    console.log(classData);

    return (
        <Box>
            {/* top bar */}
            <ClassAppbar search={true} color={true} input={search}/>
            
            <Box sx={{ display: 'flex', marginTop:9, marginLeft: 12, marginRight: 12}}>
                <Grid container>    
                    
                    {classData?<Grid container xs={12}>
                        {classData.map((c) => {
                            return <ClassBlock rating={c.ratings} name={c.name} code={c.code} id={c.id}/>
                        })}
                    </Grid>:null}


                    
                    <Grid container xs={12}>
                        {localStorage.getItem('userEmail')?<Grid item container spacing={2} flexGrow={2} xs={12} marginBottom={4}>
                            <Grid item>
                                <CardActionArea onClick={() => navigate("/newClass/", {state:{classID:""}})}>
                                    <Paper  sx={{width:"64px", height:"64px", backgroundColor:"grey.400", alignItems:"center", justifyContent:"center",display:"flex"}} >
                                        <AddIcon sx={{width:"64px", height:"64px", color:"white"}}/>
                                    </Paper>
                                </CardActionArea>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    Not Here?
                                </Typography>
                                <Typography variant="h6" sx={{fontWeight:200}}>
                                    Add a Class
                                </Typography>
                            </Grid>
                        </Grid>:null}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    
    )
}
