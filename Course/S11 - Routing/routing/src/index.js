import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
// import axios from "./axios"; // another instance of axios

// Defaults for ALL requests
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "MY_AUTH_KEY";
axios.defaults.headers.post["Content-Type"] = "application/json"; // this is actually the default

// This will be shared across the app:
axios.interceptors.request.use(
    (myRequest) => {
        // here we can edit the request before returning it, headers, etc
        console.log(myRequest);
        // return the request, otherwise IT WILL STOP EVERYWHERE
        return myRequest;
    },
    (error) => {
        // here are "request" errors, ex: no internet; errors elsewhere won't be fired, ex: .get("URL_doesntExist.com")
        console.log(error);
        // also return, so it can be managed elsewhere with .catch()
        return Promise.reject(error);
    }
);

// This will be shared across the app:
axios.interceptors.response.use(
    (myResponse) => {
        console.log(myResponse);
        return myResponse;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
