import MovieCard from "../components/movieCard.jsx";
import {sampleMovie} from "../sampleData.js";
import Grid from '@mui/material/Unstable_Grid2'
import {getMovieDiscover} from '../api/tmdb.jsx'
import {useLoaderData} from "react-router-dom";

export async function loader () {
    const movies = await getMovieDiscover()
    return movies.results
}



export default function DiscoverPage () {
    const movies = useLoaderData()
    return (
        <Grid container spacing={2}  >
            {movies.map(movie => {
                return (
                    <Grid key={movie.title} md={3}>
                        <MovieCard movie={movie} />
                    </Grid>
                )
            })}
        </Grid>
    )
}