import img from "../images/film-poster-placeholder.png";
import Box from "@mui/material/Box";


export default function MoviePoster (props) {
    return (
        <Box
            component="img"
            sx={{

                maxHeight:"90%",
                maxWidth: "90%"
            }}
            alt="Movie Poster"
            src={
                props.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${props.poster_path}`
                    : img
            }
        />
    )

}