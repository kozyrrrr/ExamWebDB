import { SupabaseClient } from "@supabase/supabase-js"
import supabase from "./dbConfig.js"

export const fetchData = async () => {
    let { data, error } = await SupabaseClient
        .from('ExamDB')
        .select('*')
        .order('id', {ascending:true});
    if (error) console.log('error',error);
    return data;
};

export const addName = async(firstname, lastname) => {
    const {data, error} = await SupabaseClient
        .from('ExamDB')
        .insert ({firstname: firstname, lastname: lastname})
        .single();
    console.log('added', data);
    if (error) console.log(error);
}

