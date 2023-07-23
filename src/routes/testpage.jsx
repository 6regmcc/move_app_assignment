import React from "react";
import { useQuery } from '@tanstack/react-query'
import {supabase} from "../api/supabaseClient.js";




export default function TestPage() {
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

    return(
        <div>
            {data.data.map(item => item.id)}
        </div>
    )
}