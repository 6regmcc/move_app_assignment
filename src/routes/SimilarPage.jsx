import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import * as React from "react";
import {useLoaderData} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "../components/movieCard.jsx";
import {useContext} from "react";
import UserContext from "../context/userContext.jsx";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";


export async function loader (props) {
    return props.params.id
}

export default function SimilarPage () {
    const movieId = useLoaderData()
    const {isLoading, data: similarMovies, error} = useQuery(['similarMovies'], () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    })
    const {user, setUser} = useContext(UserContext)
    useGetUserFromSession(setUser)

    return (
        <div>
            <Grid container spacing={2}  >
                {similarMovies?.data.results.map((movie) => {

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




