import MovieCard from "../components/movieCard.jsx";
import Grid from '@mui/material/Unstable_Grid2'
import {getMovieDiscover} from '../api/tmdb.jsx'
import {useLoaderData} from "react-router-dom";
import HeaderAppBar from "../components/headerAppBar.jsx";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";
import React, {useContext} from "react";
import UserContext from "../context/userContext.jsx";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";
import axios from "axios";




export default function DiscoverTVPage () {
    const {user, setUser} = useContext(UserContext)
    useGetUserFromSession(setUser)
    const {isLoading, data, error } = useQuery(['discoverTv'], () => {
        return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        console.log(error)
    }




    return (
        <div>
            <Grid container spacing={2}  >
                {data.data.results.map((tv, i) => {

                    return (
                        <Grid key={i} md={3}>
                            <MovieCard movie={tv} type={'tv'}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>

    )
}