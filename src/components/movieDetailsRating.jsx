import {Rating} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MovieRating (props)  {
    return (

        <Box sx={{display:"inline"}}>
            <Rating name="customized-10" precision={0.25} value={props.vote_average} max={10} sx={{textAlign:"left", pt:4}} readOnly/>
            <Typography variant="body2" sx={{display:"inline",m:3}}>{props.vote_count} votes</Typography>
        </Box>


    )
}