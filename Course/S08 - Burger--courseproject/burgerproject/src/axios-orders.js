import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://react-burgers-70936.firebaseio.com/"
});

export default axiosInstance;
