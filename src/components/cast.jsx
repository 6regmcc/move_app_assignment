import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ActorCard from "../components/actorCard.jsx";

export default function Cast (props) {
    const {isLoading, data, error } = useQuery([`movieCast${props.movie}`], () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${props.movie}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        console.log(error)
    }

    return (
        data.data.cast.slice(0,15).map((actor, i) => {
            return(
                <div key={actor.name}>
                    <ActorCard  actor={actor} type={'actor'}/>
                </div>

            )
        })
    )



}