import MovieCard from "../components/movieCard.jsx";
import {sampleMovie} from "../sampleData.js";
import Grid from '@mui/material/Unstable_Grid2'
import {getMovieDiscover} from '../api/tmdb.jsx'

export async function loader () {
    const movies = await getMovieDiscover()
    return movies
}

export default function DiscoverPage () {
    return (
        <Grid container spacing={2}>
            <Grid md={3}>
                <MovieCard movie={sampleMovie} />
            </Grid>
            <Grid md={3}>
                <MovieCard movie={sampleMovie} />
            </Grid>
            <Grid md={3}>
                <MovieCard movie={sampleMovie} />
            </Grid>
            <Grid md={3}>
                <MovieCard movie={sampleMovie} />
            </Grid>
        </Grid>
    )
}