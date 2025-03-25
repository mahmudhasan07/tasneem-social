import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

// Function to configure Axios instance
export const useAxios = (): AxiosInstance => {
    const AxiosSource = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASEURL as string, // Replace with your API base URL
    });
    
    // Add an interceptor to include the token in all requests
    AxiosSource.interceptors.request.use(
        (config) => {
            const token = Cookies.get("accessToken");
            // console.log(token);
             // Retrieve the token from cookies
            if (token) {
                config.headers["Authorization"] = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return AxiosSource;
};



// Login thunk
