import axios from "axios";

const DEV_SERVER_IP = process.env.DEV_SERVER_IP;
const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT;

const axiosClient = axios.create({
  baseURL: "http://" + DEV_SERVER_IP + ":" + DEV_SERVER_PORT + "/",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
