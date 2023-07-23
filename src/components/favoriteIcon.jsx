import {IconButton} from "@mui/material";
import * as PropTypes from "prop-types";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function MovieFavoriteIcon (props) {
    return (
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" >
                <FavoriteIcon   sx={{color: props.movie.favourites && "red"}}/>
            </IconButton>
        </CardActions>
        )

}