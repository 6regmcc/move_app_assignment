import react from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ReviewRating from './reviewsRating.jsx'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import parse from 'html-react-parser'
import {useQuery} from "@tanstack/react-query";
import {getReviews} from "../api/tmdb.jsx";
import axios from "axios";
import ApiReview from "./apiReview";

const review = {
    "author": "The Movie Mob",
    "author_details": {
        "name": "The Movie Mob",
        "username": "mooney240",
        "avatar_path": "/blEC280vq31MVaDcsWBXuGOsYnB.jpg",
        "rating": 9.0
    },
    "content": "<b>Guardians of the Galaxy Vol. 3 is the perfect farewell to this quirky group of rogues we never expected to love so much.</b>\r\n\r\nOur faith in the Marvel Cinematic Universe waned throughout Phase 4 with films that felt hollow, rushed, and insincere. Guardians of the Galaxy Vol. 3 rekindled my hope as James Gunn and the cast’s love and passion for these characters shined in every moment of this beautiful, heartfelt send-off. Gunn reminded us of the magic of comic book movies when the storyteller cares more about the characters than the box office. Chris Pratt, Bradley Cooper, Karen Gillan, Dave Bautista, and the rest of the cast pour themselves into entertaining and genuine performances. This film is surprisingly emotional and had me wondering how they convinced me to care so deeply about such a zany group of goofballs, but that they did. Vol. 3 is one of the best conclusions to a film trilogy that had me leave the theater full of satisfaction and nostalgia. While Guardians of the Galaxy Vol. 3 is wonderful in nearly every way, if I had a complaint, it would be the soundtrack felt forced at times rather than complimenting strong moments in the first film. The villain wasn’t exceptional but was better than the average Marvel villain, and honestly, Vol. 3 wasn’t about the villain or battles as much as it was a farewell to a family of heroes we have all come to love. This movie is well worth your time, and the fantastic effects and cinematography warrant a trip to the cinema to enjoy it to its fullest! MCU doubters need to set aside their skepticism and enjoy saying goodbye to these beloved characters with this outstanding film.",
    "created_at": "2023-05-06T01:31:27.138Z",
    "id": "6455adef5b4fed010143fede",
    "updated_at": "2023-05-06T01:31:27.224Z",
    "url": "https://www.themoviedb.org/review/6455adef5b4fed010143fede"
}



export default function Reviews () {

   const {isLoading, data} = useQuery(['apiReviws'], () => {
        return axios.get('https://api.themoviedb.org/3/movie/447365/reviews?api_key=0bfe03f508c7664f002c4206e83649a4')
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    console.log(data.data)

    return (
        data.data.results.map(review => {
            return <ApiReview review={review} />
        })

    )
}