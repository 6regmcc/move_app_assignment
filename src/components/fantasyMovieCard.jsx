import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";

export default function FantasyMovieCard(props) {
    return (
        <Container>
            <Paper>
                <Typography variant="h3" >{props.movie.title}</Typography>
                <Typography variant="h5 ">{props.movie.description}</Typography>
                <br/>
                <Rating name="customized-10" precision={0.25} value={props.movie.rating} max={10} sx={{pt:4}} readOnly/>

            </Paper>
        </Container>
    )
}