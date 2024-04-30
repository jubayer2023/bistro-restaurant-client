import { useQuery } from "@tanstack/react-query";
import useAxiosBaseURL from "./useAxiosBaseURL";

const useCarts = () => {
  const axiosBaseURL = useAxiosBaseURL();

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosBaseURL.get("/carts");
      return res.data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
