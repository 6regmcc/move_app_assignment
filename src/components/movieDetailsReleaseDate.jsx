import Typography from "@mui/material/Typography";

export default function MovieReleaseDate (props) {
    return (
        <Typography variant="body1" sx={{pb:4}}>{props.release_date}</Typography>
    )
}