import React, { useState } from "react";
import {supabase} from "../api/supabaseClient.js";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [fetchError, setFetchError] = useState(null);
    const [favourites, setFavourites] = useState(null)

    const getFavourites = async () => {
        const {data, error} = await supabase
            .from('savedLists')
            .select()
        if (error) {
            setFetchError("error getting data from db")
            setFavourites(null)
            console.log(error)
        }

        if (data) {
            setFavourites(data)
            setFetchError(null)
        }
    }








    return (
        <MoviesContext.Provider
            value={{
                favourites,
                getFavourites,

            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
