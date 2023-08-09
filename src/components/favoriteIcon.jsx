import {IconButton} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from '@mui/icons-material/Favorite'
import {useFavoritesData} from "../hooks/useFavoritesData.js";
import React, {useContext} from "react";
import {useDbUpdate} from "../hooks/useDbUpdate.js";
import {useDbDelete} from "../hooks/useDbDelete.js";
import UserContext from "../context/userContext.jsx";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";

function checkIfMovieInList (id, dbData) {
    for(let i = 0; i < dbData.length; i++){
        if (dbData[i].item_id === id){
            return true
        }
    }
}



export default function MovieFavoriteIcon (props) {

    const deleteFavourite = useDbDelete()
    const addFavourite = useDbUpdate()
    const { isLoading, isError, data, error } = useFavoritesData()
    const {user, setUser} = useContext(UserContext)

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const isFavouriteMovie = checkIfMovieInList(props.movie.id, data.data)

    function handleFavouriteUpdate () {
        if (isFavouriteMovie) {
            deleteFavourite.mutate({table:'savedLists',id: props.movie.id})
        } else {
            addFavourite.mutate({table:'savedLists',data:{item_id:props.movie.id,list_name:'favourites','user_id':user.user_id} }, )
        }
    }

    return (
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleFavouriteUpdate}>
                <FavoriteIcon   sx={{color: isFavouriteMovie && "red"}} />
            </IconButton>
        </CardActions>
    )
}