import Typography from "@mui/material/Typography";
import {Chip} from "@mui/material";
import Box from "@mui/material/Box";

export default function MovieGenres (props) {
    return (
        <Box>
            <Typography sx={{py:2}} variant="h6">Genres</Typography>
            {props.genres.map(genre => {
                return(
                    <Chip key={genre.name} label={genre.name} variant="outlined" sx={{mx:0.5}}/>
                )
            })}
        </Box>



    )
}