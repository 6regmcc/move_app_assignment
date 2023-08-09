
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {CardHeader} from "@mui/material";

import img from "/src/images/film-poster-placeholder.png"
import CardActionArea from '@mui/material/CardActionArea';




export default function ActorCard (props) {


    return (

        <Card sx={{ maxWidth: 345, height: '100%'}}>
            <CardActionArea  href={`/${props.type}/${props.actor.id}`}>
                <CardHeader
                    title={props.actor.name}
                    sx={{height: 50}}

                />
                <CardMedia
                    component="img"
                    height="350"
                    image={
                        props.actor.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${props.actor.profile_path}`
                            : img
                    }
                    alt="actor poster"
                    sx={{ objectFit: "contain" }}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>

    )
}