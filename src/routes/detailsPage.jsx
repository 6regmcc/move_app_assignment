import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import img from "../images/film-poster-placeholder.png";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import {Autocomplete, Chip, Rating, TextField} from "@mui/material";
import Divider from '@mui/material/Divider';

import sampleMovieDetails from "../sampleMovieDetails.js";
import MoviePoster from "../components/movieDetailsPoster.jsx";



export default function DetailsPage (props) {
    //console.log(props.movie)
    return (
        <Container sx={{width: "100%", mt:"10%",}} >
            <Paper sx={{pt:5}}>
                <Grid container spacing={2}sx={{m:3}} >
                    <Grid xs={12} sm={6} >
                        <MoviePoster poster_path={props.movie.poster_path} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography variant="h4" sx={{pb:4}}>{props.movie.title}</Typography>
                        <Typography variant="body1" sx={{pb:4}}>{props.movie.release_date}</Typography>
                        <Typography align="left">{props.movie.overview}</Typography>
                        <Box sx={{display:"inline"}}>
                            <Rating name="customized-10" precision={0.25} value={props.movie.vote_average} max={10} sx={{textAlign:"left", pt:4}} readOnly/>
                        </Box>

                        <Typography variant="body2" sx={{display:"inline",m:3}}>{props.movie.vote_count} votes</Typography>
                        <Divider sx={{py:2}} />
                        <Typography sx={{py:2}} variant="h6">Genres</Typography>
                        {props.movie.genres.map(genre => {
                            return(
                                <Chip label={genre.name} variant="outlined" sx={{mx:0.5}}/>
                            )
                        })}
                        <Divider sx={{py:2}} />
                    </Grid>
                </Grid>
                </Paper>
        </Container>

    )
}