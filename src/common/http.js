import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:1111/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});