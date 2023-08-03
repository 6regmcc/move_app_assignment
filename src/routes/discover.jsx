import MovieCard from "../components/movieCard.jsx";
import Grid from '@mui/material/Unstable_Grid2'
import {getMovieDiscover} from '../api/tmdb.jsx'
import {useLoaderData} from "react-router-dom";
import HeaderAppBar from "../components/headerAppBar.jsx";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";
import React from "react";


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
    /*
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['savedLists'],
        queryFn: async () => {
            const data = await supabase.from('savedLists').select()
            return data
        },

    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    //console.log(data.data)

     */
    return (
        <div>

            <Grid container spacing={2}  >
                {movies.map((movie) => {
                    /*
                    if(checkIfMovieInList(movie, data.data)){
                        movie.favourites = true
                    }

                     */
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