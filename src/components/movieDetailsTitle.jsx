import Typography from "@mui/material/Typography";


export default function MovieTitle (props) {
    return (
        <Typography variant="h4" sx={{pb:4}}>{props.title}</Typography>
    )
}