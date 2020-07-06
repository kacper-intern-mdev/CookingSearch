import axios from 'axios';

export const apiURL = "https://api.edamam.com/api/food-database/v2/";
export const searchURL = apiURL + '/parser?';

export const appId = "a01e118a";
export const appKey = "9cd498eefc0dda7d06dc02c1b2242174";

export async function genericFetch(url){
    console.log(url);
    const res = await axios.get(url);
    console.log("Response: ",  res );
    return res.data;
}

export async function fetchFoodData(query, options){
    if(query.length === 0) return;
    function encodeOptions(options){
        let encodedStr = "";

        for(let [key,val] of Object.entries(options)){
            if(val === "") continue;
            if(key === "nutrition"){
                key = "nutrition-type";
                val = val ? "logging" : "";
            }
            key = key === "type" ? "categoryLabel" : key;
            encodedStr += `${key}=${val}&`;
        }

        return encodedStr;
    }

    const fetchURL = `${searchURL}ingr=${encodeURIComponent(query)}&app_id=${appId}&app_key=${appKey}&${encodeOptions(options)}`;
    console.log(fetchURL);
    return await genericFetch(fetchURL);
}