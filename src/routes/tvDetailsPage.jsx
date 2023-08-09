import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";

import Divider from '@mui/material/Divider';

import MoviePoster from "../components/movieDetailsPoster.jsx";
import MovieTitle from "../components/movieDetailsTitle.jsx";
import MovieReleaseDate from "../components/movieDetailsReleaseDate.jsx"
import MovieOverview from "../components/movieDetailsOverview.jsx";
import MovieRating from "../components/movieDetailsRating";
import MovieGenres from "../components/movieDetailsGenres.jsx";
import {getMovieDetails} from "../api/tmdb.jsx";
import {useLoaderData} from "react-router-dom";
import MovieFavoriteIcon from "../components/favoriteIcon.jsx";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";
import React, {useContext} from "react";
import {useFavoritesData} from "../hooks/useFavoritesData.js";
import Reviews from "../components/reviews.jsx"
import AppContext from "../context/appContext.jsx";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";


import SeeSimilarMoviesLink from "../components/similarMoviesLink";
import axios from "axios";

export async function loader (props) {
    const tvId = props.params.id
    return tvId
}



export default function TVDetailsPage () {
    const tvId = useLoaderData()
    const {user, setUser} = useContext(AppContext)
    useGetUserFromSession(setUser)
    const {isLoading, data, error } = useQuery([`tvDetails${tvId}`], () => {
        return axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        console.log(error)
    }


    return (
        <Container sx={{width: "100%", mt:"10%",}} >
            <Paper   component="div" sx={{pt:5}}>
                <Grid  container spacing={2}sx={{m:3}} >
                    <Grid xs={12} sm={6} >
                        <MoviePoster poster_path={data.data.poster_path} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <MovieTitle title={data.data.title} />
                        <MovieReleaseDate release_date={data.data.release_date} />
                        <MovieOverview overview={data.data.overview} />
                        <MovieRating vote_average={data.data.vote_average} vote_count={data.data.vote_count} />
                        <Divider sx={{py:2}} />
                        <MovieGenres genres={data.data.genres} />
                        <Divider sx={{py:2}} />
                        <MovieFavoriteIcon type={'tv'} movie={data.data} />
                        <SeeSimilarMoviesLink movie={data.data} />
                    </Grid>
                </Grid>

            </Paper>
            <Paper>
                <Reviews movie={data.data}/>
            </Paper>
        </Container>

    )
}