import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import * as React from "react";
import ApiReview from "./apiReview.jsx";


export default function ApiReviews (props) {
    const {isLoading: isLoadingApiReviews, data: dataApiReviews, error: errorApiReviews} = useQuery(['apiReviws'], () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${props.movie.id}/reviews?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    })

    if (isLoadingApiReviews) {
        return <h2>Loading...</h2>
    }
    if (errorApiReviews) {
        console.log(errorApiReviews)
    }

    return (
        dataApiReviews.data.results.map((review, index) => {
            return <ApiReview key={index} review={review} />
        })
    )
}

