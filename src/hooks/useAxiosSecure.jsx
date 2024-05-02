import axios from "axios";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      // console.log("token from config", token);
      config.headers.authorization = `Bearer ${token}`;
      // console.log("request from config");
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      // console.log(error);
      if (error.response.status === 401 || error.response.status === 403) {
        await logOut();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
