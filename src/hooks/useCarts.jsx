import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  // console.log(user?.email);

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/`, {
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
