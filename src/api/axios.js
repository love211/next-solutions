// axiosInstance.js
import axios from "axios";
import { toast } from "react-toastify";
const apiService = axios.create({
  baseURL: "https://next-solution-be.vercel.app/", // Replace with your API base URL
});

apiService.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  (error) => {
    // Handle response errors here
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request (400)");
          break;
        case 401:
          toast.error(error.response.data.message || "Unauthorized (401)");
          break;
        case 403:
          toast.error("Forbidden (403)");
          break;
        case 404:
          toast.error("Not Found (404)");
          break;
        case 500:
          toast.error("Internal Server Error (500)");
          break;
        default:
          toast.error(`Error: ${error.response.status}`);
      }
    } else if (error.request) {
      // The request was made but no response was received
      toast.error("No response received!");
    } else {
      // Something happened in setting up the request that triggered an Error
      toast.error("Request setup error!");
    }
    return Promise.reject(error);
  }
);

export default apiService;
