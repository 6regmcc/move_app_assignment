import MovieCard from "../components/movieCard.jsx";
import {sampleMovie} from "../sampleData.js";

export default function DiscoverPage () {
    return (
        <MovieCard movie={sampleMovie}/>
    )
}