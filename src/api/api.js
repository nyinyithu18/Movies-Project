import axios from "axios";

export const api_key = "e4476258ea8650206cb48632f3acfaa5"

export const api = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})