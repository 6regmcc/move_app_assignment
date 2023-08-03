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

async function addToFavourites (id) {

}


export default function MovieFavoriteIcon (props) {
    const queryClient = useQueryClient()

    const deleteFavourite = useMutation(async (id) => {
        const data = await supabase
            .from('savedLists')
            .delete()
            .eq('item_id', id)
        return data
    },{onSuccess: () => queryClient.invalidateQueries('savedLists')})

    const addFavourite = useMutation(async (id) => {
        const { data, error } = await supabase
            .from('savedLists')
            .insert([
                { 'list_name': 'favourites', item_id: id, 'user_id': '9e8e036b-5338-4367-bb3d-48ae748dfcc6' },
            ])
            .select()
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

    function handleFavouriteUpdate () {
        if (isFavouriteMovie) {
            deleteFavourite.mutate(props.movie.id)
        } else {
            addFavourite.mutate(props.movie.id)
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