import axios from 'axios';
import store from '@/redux/store';

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.token;
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            store.dispatch({ type: 'auth/logout' });
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance; 