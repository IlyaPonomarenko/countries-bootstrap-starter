import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/all";

const getAll = async () =>{
    const res = await axios.get(baseURL)
    return res.data;
}

export default {getAll};