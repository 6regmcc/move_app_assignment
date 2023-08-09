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
import CardActionArea from '@mui/material/CardActionArea';
import MovieFavoriteIcon from "./favoriteIcon.jsx";



export default function MovieCard (props) {

    const onUserSelect = (e) => {
        e.preventDefault();


    };
    return (

            <Card sx={{ maxWidth: 345, height: '100%'}}>
                <CardActionArea  href={`/${props.type}/${props.movie.id}`}>
                    <CardHeader
                        title={props.movie.title}
                        sx={{height: 50}}

                    />
                    <CardMedia
                        component="img"
                        height="350"
                        image={
                            props.movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
                                : img
                        }
                        alt="Movie poster"
                        sx={{ objectFit: "contain" }}

                    />
                    <CardContent>

                    </CardContent>
                </CardActionArea>
               <MovieFavoriteIcon movie={props.movie} type={props.type}/>
            </Card>

    )
}