import {IconButton} from "@mui/material";
import * as PropTypes from "prop-types";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from '@mui/icons-material/Favorite'
import {supabase} from "../api/supabaseClient.js";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {useFavoritesData} from "../hooks/useFavoritesData.js";
import React from "react";


function checkIfMovieInList (id, dbData) {
    console.log('this function was called')
    for(let i = 0; i < dbData.length; i++){
        if (dbData[i].item_id === id){
            return true
        }
    }
}




export default function MovieFavoriteIcon (props) {
    const queryClient = useQueryClient()

    const updateFavourite = useMutation(async (id) => {
        const data = await supabase
            .from('savedLists')
            .delete()
            .eq('item_id', id)
        return data
    },{onSuccess: () => queryClient.invalidateQueries('savedLists')})

    const { isLoading, isError, data, error } = useFavoritesData()

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const isFavouriteMovie = checkIfMovieInList(props.movie.id, data.data)
    console.log(props.movie.id +" and " )
    console.log(isFavouriteMovie)

    return (
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={()=>{updateFavourite.mutate(props.movie.id)}}>
                <FavoriteIcon   sx={{color: isFavouriteMovie && "red"}} />
            </IconButton>
        </CardActions>
        )

}