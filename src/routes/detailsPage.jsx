import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import img from "../images/film-poster-placeholder.png";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import {Autocomplete, Chip, IconButton, Rating, TextField} from "@mui/material";
import Divider from '@mui/material/Divider';

import sampleMovieDetails from "../sampleMovieDetails.js";
import MoviePoster from "../components/movieDetailsPoster.jsx";
import MovieTitle from "../components/movieDetailsTitle.jsx";
import MovieReleaseDate from "../components/movieDetailsReleaseDate.jsx"
import MovieOverview from "../components/movieDetailsOverview.jsx";
import MovieRating from "../components/movieDetailsRating";
import MovieGenres from "../components/movieDetailsGenres.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import CardActions from "@mui/material/CardActions";

import {getMovieDetails} from "../api/tmdb.jsx";
import {useLoaderData} from "react-router-dom";
import { useContext } from 'react';







export async function loader (props) {
    const movie = await getMovieDetails(props.params.id)
    return movie
}



export default function DetailsPage () {
    const movie = useLoaderData()

    return (
        <Container sx={{width: "100%", mt:"10%",}} >
            <Paper   component="div" sx={{pt:5}}>
                <Grid  container spacing={2}sx={{m:3}} >
                    <Grid xs={12} sm={6} >
                        <MoviePoster poster_path={movie.poster_path} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <MovieTitle title={movie.title} />
                        <MovieReleaseDate release_date={movie.release_date} />
                        <MovieOverview overview={movie.overview} />
                        <MovieRating vote_average={movie.vote_average} vote_count={movie.vote_count} />
                        <Divider sx={{py:2}} />
                        <MovieGenres genres={movie.genres} />
                        <Divider sx={{py:2}} />

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>


                    </Grid>
                </Grid>
            </Paper>
        </Container>

    )
}