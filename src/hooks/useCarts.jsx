import { useQuery } from "@tanstack/react-query";
import useAxiosBaseURL from "./useAxiosBaseURL";
import useAuthContext from "./useAuthContext";

const useCarts = () => {
  const axiosBaseURL = useAxiosBaseURL();
  const { user } = useAuthContext();
  // console.log(user?.email);

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosBaseURL.get(`/carts/`, {
        params: {
          email: user?.email,
        },
      });
      return res.data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
