import {Rating} from "@mui/material";
import Box from "@mui/material/Box";


export default function ReviewRating (props)  {
    return (
        <Box>
            <Rating name="customized-10" precision={0.25} value={props.review} max={10}  readOnly/>
        </Box>
    )
}