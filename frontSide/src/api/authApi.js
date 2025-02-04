import axiosInstance from './axios';

export const signupUser = async (userData) => {
    try {
      const response = await axiosInstance.post('/signup', userData);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message || 'Signup failed');
    }
  };

  
  export const loginUser = async (loginData) => {
    try {
      const response = await axiosInstance.post('/login', loginData);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message || 'Login failed');
    }
  };