import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import img from "../images/film-poster-placeholder.png";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import {Rating} from "@mui/material";

export default function DetailsPage (props) {
    console.log(props.movie)
    return (
        <Container sx={{width: "100%", mt:"10%",}} >
            <Paper sx={{pt:5}}>
                <Grid container spacing={2}sx={{m:3}} >
                    <Grid xs={12} sm={6} >

                        <Box
                            component="img"
                            sx={{

                                maxHeight:"80%",
                                maxWidth: "80%"
                            }}
                            alt="Movie Poster"
                            src={
                                props.movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
                                    : img
                            }
                        />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography variant="h4" sx={{pb:4}}>{props.movie.title}</Typography>
                        <Typography align="left">{props.movie.overview}</Typography>
                        <Rating name="customized-10" precision={0.25} value={props.movie.vote_average} max={10} sx={{textAlign:"left"}} readOnly/>
                    </Grid>
                </Grid>
                </Paper>
        </Container>

    )
}