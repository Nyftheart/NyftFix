import axios from "axios";

/** base url des requests*/
const instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
});

export default instance;