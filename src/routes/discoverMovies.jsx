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


export async function loader () {
    const movies = await getMovieDiscover()
    return movies.results
}



function checkIfMovieInList (movie, dbData) {
    for(let i = 0; i < dbData.length; i++){
        if (dbData[i].item_id === movie.id){
            return true
        }
    }
}

export default function DiscoverPage () {
    const movies = useLoaderData()
    const {user, setUser} = useContext(UserContext)
    useGetUserFromSession(setUser)

    return (
        <div>
            <Grid container spacing={2}  >
                {movies.map((movie) => {

                    return (
                        <Grid key={movie.title} md={3}>
                            <MovieCard movie={movie} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>

    )
}