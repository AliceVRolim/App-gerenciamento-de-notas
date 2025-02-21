import axios from 'axios'




const url = "http://localhost:8080/api/notas/";

export const http = axios.create({
    withCredentials:false,
    baseURL:  url,
    
})
