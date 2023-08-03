import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";




export const useFavoritesData = () => {
    return useQuery({
        queryKey: ['savedLists'],
        queryFn: async () => {
            const data = await supabase.from('savedLists').select()
            return data

        }
    })
}