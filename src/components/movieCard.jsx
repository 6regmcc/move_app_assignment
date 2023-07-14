import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {CardHeader} from "@mui/material";
import {IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import img from "/src/images/film-poster-placeholder.png"

export default function MovieCard ({movie}) {
    return (
        <Paper>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader

                    title={movie.title}

                />
                <CardMedia
                    component="img"
                    height="350"
                    image={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : img
                    }
                    alt="Movie poster"
                    sx={{ objectFit: "contain" }}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        this is the movie card content
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Paper>
    )
}