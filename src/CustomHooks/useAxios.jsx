import axios from "axios";

const instance = axios.create({
  baseURL: "https://job-nest-backend.vercel.app/api/",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
