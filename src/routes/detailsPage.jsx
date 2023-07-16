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
import MovieTitle from "../components/movieDetailsTitle.jsx";
import MovieReleaseDate from "../components/movieDetailsReleaseDate.jsx"
import MovieOverview from "../components/movieDetailsOverview.jsx";
import MovieRating from "../components/movieDetailsRating";
import MovieGenres from "../components/movieDetailsGenres.jsx";


export default function DetailsPage (props) {

    return (
        <Container sx={{width: "100%", mt:"10%",}} >
            <Paper sx={{pt:5}}>
                <Grid container spacing={2}sx={{m:3}} >
                    <Grid xs={12} sm={6} >
                        <MoviePoster poster_path={props.movie.poster_path} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <MovieTitle title={props.movie.title} />
                        <MovieReleaseDate release_date={props.movie.release_date} />
                        <MovieOverview overview={props.movie.overview} />
                        <MovieRating vote_average={props.movie.vote_average} vote_count={props.movie.vote_count} />
                        <Divider sx={{py:2}} />
                        <MovieGenres genres={props.movie.genres} />
                        <Divider sx={{py:2}} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>

    )
}