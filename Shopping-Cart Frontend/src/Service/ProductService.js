import axios from "axios";
const url = "http://localhost:8080/api/v2";


export const getProduct=()=>{
    return axios.get(url+`/products`);
}

