import * as React from 'react';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import ApiReview from "./apiReview";
import DbReview from "./dbReview.jsx";
import {useGetReviewDbData} from "../hooks/useGetReviewDbData.js"
import ApiReviews from "./apiReviews.jsx";
import DbReviews from "./dbReviews.jsx";
import Box from "@mui/material/Box";
export default function Reviews (props) {





    return (
        <Box>
            <DbReviews movie={props.movie} />
            <ApiReviews movie={props.movie} />
        </Box>


    )
}