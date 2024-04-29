import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosBaseURL = () => {
  return axiosBaseURL;
};

export default useAxiosBaseURL;
