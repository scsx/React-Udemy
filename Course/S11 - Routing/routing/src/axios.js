import axios from "axios";

const myAxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

myAxiosInstance.defaults.headers.common["Authorization"] = "MY_OTHER_AUTH_KEY";

export default myAxiosInstance;
