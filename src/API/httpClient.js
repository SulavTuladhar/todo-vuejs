import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;

const http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    timeoutErrorMessage: 'Takes too long for response'
});

const getHeaders = (secured) =>{
    let options = {
        'Content-Type' : 'application/json'
    }
    if(secured){
        options['Authorization'] = localStorage.getItem('token')
    }
    return options
}

const GET = (url) =>{
    return http.get(url);
}

const POST = (url,data,isSecured = false) =>{
    return http.post(url,data,{
        headers: getHeaders(isSecured)
    })
}

const PUT = (url,data,isSecured = false) =>{
    return http.put(url,data,{
        headers: getHeaders(isSecured)
    })
}

const DELETE = (url,isSecured) => {
    return http.delete(url,{
        headers: getHeaders(isSecured) 
    })
}

export default {
    GET,
    POST: POST,
    PUT,
    DELETE
}