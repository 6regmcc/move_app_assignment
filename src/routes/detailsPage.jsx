import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import img from "../images/film-poster-placeholder.png";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";

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
                        <Typography>{props.movie.title}</Typography>
                        <Typography>{props.movie.overview}</Typography>
                    </Grid>
                </Grid>
                </Paper>
        </Container>

    )
}