import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org"

export async function getMovieDiscover() {
    try {
        const response = await axios.get('/3/discover/movie?api_key=0bfe03f508c7664f002c4206e83649a4&language=en-US&include_adult=false&include_video=false&page=1');
        //console.log(response);
        return response.data
    } catch (error) {
        console.error(error);
    }

}


export async function getMovieDetails(id) {
    try {
        const response = await axios.get(`3/movie/${id}?api_key=0bfe03f508c7664f002c4206e83649a4&language=en-US&include_adult=false&include_video=false&page=1'`);
        //console.log(response);
        return response.data
    } catch (error) {
        console.error(error);
    }

}