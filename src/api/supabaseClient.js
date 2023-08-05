import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ewpvvzbimorgqxmkzanf.supabase.co'
const supabaseKeyAnonKey = import.meta.env.VITE_SUPABASE_KEY


export const supabase = createClient(supabaseUrl, supabaseKeyAnonKey)



export async function signInWithEmail(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    console.log(data)
}

export async function logOut() {
    return await supabase.auth.signOut()

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

export async function addToTable(){
    const { data, error } = await supabase
        .from('testTable')
        .insert({  name: 'First item', user_id:"9e8e036b-5338-4367-bb3d-48ae748dfcc6" ,item_id: 123})
        .select()




}
