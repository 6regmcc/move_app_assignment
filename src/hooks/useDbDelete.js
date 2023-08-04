import {supabase} from "../api/supabaseClient.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useDbDelete = () => {
    const queryClient = useQueryClient()
    return useMutation(async (variables) => {
        const data = await supabase
            .from('savedLists')
            .delete()
            .eq('item_id', variables.id)
        return data
    },{onSuccess: (variables) => {queryClient.invalidateQueries(variables.table)}})
}
