import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllJobPost = () => {
  const axios = useAxios();

  const allJobPost = async () => {
    const res = await axios.get(`allJobPost`);
    return res;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["allJobPost"],
    queryFn: allJobPost,
  });

  return { data, isLoading, error };
};

export default useAllJobPost;
