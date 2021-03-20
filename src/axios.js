import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http://localhost:8084/api",
    headers: {Auth: "Simple AUTH"},
    timeout: 3000,
}) 