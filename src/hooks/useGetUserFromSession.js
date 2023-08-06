import {useQuery} from "@tanstack/react-query";
import {supabase} from "../api/supabaseClient.js";
import {useEffect} from "react";




export const  useGetUserFromSession = (setUser, navigate) => {
    return useEffect(() => {
        const getSession = supabase.auth.getSession().then((result) => {
            if(result.data.session === null){
                console.log('user not signed in')
                //navigate('/login')
            }
            return result
        })
        getSession.then(async result => {
            return supabase
                .from('users')
                .select("*")
                .eq('user_id', result.data.session?.user.id)
        })
            .then(loggedInUser => setUser(loggedInUser?.data[0])).catch(error => console.log(error))
    },[])
}

