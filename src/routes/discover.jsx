import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

export default function Discover () {
    return (
        <Container>
            <h3 sx={{pt:4}}>Select Option</h3>
            <Link  href="/discover/tv">TV</Link>
            <br/>
            <Link  href="/discover/movies">Movies</Link>
            <br/>
            <Link  href="/discover/fantasymovies">Fantasy Movies</Link>
        </Container>


    )
}
