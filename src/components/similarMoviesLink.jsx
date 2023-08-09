import Link from "@mui/material/Link";
import React from "react";

export default function SeeSimilarMoviesLink (props){
    return (
        <Link href={`/movie/${props.movie.id}/similar`} > See Similar Movies</Link>
        )

}