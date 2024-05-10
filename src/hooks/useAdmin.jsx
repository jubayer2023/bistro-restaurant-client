import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log(res.data);
      return res.data.admin;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
