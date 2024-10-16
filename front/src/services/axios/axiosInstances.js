import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.DJANGO_BASE_URL,
});

export default axiosInstance;
