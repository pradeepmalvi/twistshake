import axios from "axios";

// creating an instance
const instance = axios.create({
  baseURL: "http://twistshake.ewtlive.in/admin/api",
});

export default instance;
