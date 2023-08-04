import {supabase} from "../api/supabaseClient.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useDbUpdate = () => {
    const queryClient = useQueryClient()
    return useMutation(async (variables) => {
        const { data, error } = await supabase
            .from(variables.table)
            .insert([
                { 'list_name': 'favourites', 'item_id': variables.id, 'user_id': '9e8e036b-5338-4367-bb3d-48ae748dfcc6' },
            ])
            .select()
        return data
    },{onSuccess: (variables) => {
            queryClient.invalidateQueries(variables.table)
            console.log('favourite added')
        }})
}



