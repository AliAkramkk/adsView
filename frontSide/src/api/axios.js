import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/', // Replace with your backend UR
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, 
  });
  
  export default axiosInstance;