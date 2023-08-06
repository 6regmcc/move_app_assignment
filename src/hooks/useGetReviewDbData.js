import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";




export const useGetReviewDbData = (type, id) => {
    return useQuery({
        queryKey: ['reviewsTable'],
        queryFn: async () => {
            const data = await supabase
                .from('reviewsTable')
                .select('*')
                .eq('type', type)
                .eq('item_id', id)
            return data
        }
    })
}

