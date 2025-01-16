import axios from "axios";

export const axiosSecurity = axios.create({
    baseURL: 'http://localhost:5000'
})


const axiosSecure = () => {
    return axiosSecurity
};

export default axiosSecure;