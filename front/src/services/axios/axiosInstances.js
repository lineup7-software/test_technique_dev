import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PROTOCOLE || 'https'}://${import.meta.env.VITE_HOST}/api`,
});

export default axiosInstance;
