import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://projeto-api-ecommerce-1.onrender.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;