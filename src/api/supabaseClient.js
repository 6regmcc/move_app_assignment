import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ewpvvzbimorgqxmkzanf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY


export const supabase = createClient(supabaseUrl, supabaseKey)



export async function signInWithEmail(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
}


export async function signUpWithEmail(email, password, firstName, lastName){
    const  { data, error } = await supabase.auth.signUp(
        {
            email: email,
            password: password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName
                }
            }
        }
    )
}


