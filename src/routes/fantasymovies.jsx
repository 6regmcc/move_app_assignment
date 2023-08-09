import Link from "@mui/material/Link";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";
import FantasyMovieCard from "../components/fantasyMovieCard.jsx";

export default function FantasyMovies(){
    const {data, isLoading} = useQuery({
        queryKey: ['fantasyMovies'],
        queryFn: async () => {
            const data = await supabase
                .from('fantasyMovies')
                .select('*')

            return data
        }
    })
    if(isLoading){
        return <h4>loading</h4>
    }

    //console.log(data)
    return (
        <div>
            <h3>Fantasy Movies</h3>
            <Link href="/discover/fantasymovies/create">Create Fantasy Movie</Link>
            {data.data.map(movie => {
                return (
                    <div>
                        <FantasyMovieCard movie={movie} />
                    </div>
                    )
            })}

        </div>

    )
}