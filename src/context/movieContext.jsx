import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} )
    const [favourites, setFavourites] = useState([]);
    const [mustWatch, setMustWatch] = useState([])
    const [lists, setLists] = useState({})


    const addToFavourites = (movie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie)) {
            updatedFavourites.push(movie);
        }
        setFavourites(updatedFavourites);

    };

    const addToMustWatch = (movie) => {
        let updatedMustWatch = [...mustWatch];
        if (!mustWatch.includes(movie.id)) {
            updatedMustWatch.push(movie.id);
        }
        setMustWatch(updatedMustWatch);

    }

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie, review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
    };


    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addToMustWatch,
                mustWatch
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
