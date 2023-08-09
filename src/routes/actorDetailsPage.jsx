import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {getMovieDetails} from "../api/tmdb.jsx";
import {useLoaderData} from "react-router-dom";

export async function loader (props) {
    return props.params.id

}

export default function ActorDetailsPage () {
    const actorId = useLoaderData()
    const {isLoading, data, error } = useQuery([`movieCast${props.movie}`], () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${props.movie}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        console.log(error)
    }


}