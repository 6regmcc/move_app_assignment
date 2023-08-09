import {supabase} from "../api/supabaseClient.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useDbUpdate = () => {
    const queryClient = useQueryClient()
    return useMutation(async (variables) => {
        console.log(variables)
        const { data, error } = await supabase
            .from(variables.table)
            .insert([
                variables.data
            ])
            .select()
        return data
    },{onSuccess: (variables) => {
            queryClient.invalidateQueries(variables.table)
            console.log('favourite added')
        }})
}



