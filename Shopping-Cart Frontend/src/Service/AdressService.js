import axios from "axios";
const url = "http://localhost:8080/api/v2";



export const getAddress=(id)=>{
    return axios.get(url+`/address/${id}`);
}

export const postAddress=(add)=>{
    return axios.post(url+'/address',add)
}