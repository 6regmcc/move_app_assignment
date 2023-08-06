import {useGetReviewDbData} from "../hooks/useGetReviewDbData.js";
import DbReview from "./dbReview.jsx";
import ApiReview from "./apiReview.jsx";
import * as React from "react";

export default function DbReviews (props) {
    console.log(props.movie.id)
    const { isLoading: isLoadingDbReviews, isError: isErrorDbReviews, data: dataDbReviews, error: errorDbReviews } = useGetReviewDbData('movie', props.movie.id)

    if (isLoadingDbReviews) {
        return <h2>Loading...</h2>
    }

    if (errorDbReviews) {
        console.log(errorDbReviews)
    }

    return (
        dataDbReviews.data.map((review, index) => {
            return <DbReview key={index} review={review} />
        })
    )
}

