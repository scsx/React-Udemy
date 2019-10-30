import axios from 'axios';

const myInstance1 = axios.create({
    baseURL = "https://jsonplaceholder.typicode.com"
});

myInstance1.defaults.headers.common["Authorization"] = "MY_OTHER_AUTH_KEY";

export default myInstance1;
