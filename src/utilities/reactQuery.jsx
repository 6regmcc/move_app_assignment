import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";
import React from "react";


export const getFavouritesList = () => {

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['savedLists'],
        queryFn: async () => {
            const data = await supabase.from('savedLists').select()
            return data
        },

    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }



}

export function checkIfMovieInList (movie) {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['savedLists'],
        queryFn: async () => {
            const data = await supabase.from('savedLists').select()
            return data
        },

    })

   if(data) {
       for(let i = 0; i < data.data.length; i++){
           if (data.data[i].item_id === movie.id){
               return true
           }
       }
   }


}