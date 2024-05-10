import useAuthContext from "../../../hooks/useAuthContext";
import {
  FaBoxArchive,
  FaDollarSign,
  FaListCheck,
  FaUsers,
} from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const { user } = useAuthContext();

  const axiosSecure = useAxiosSecure();

  const { data: stats={} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res?.data;
    },
  });
  console.log(stats?.totalRevenue);

  return (
    <div className="max-w-screen-md mx-auto">
      <h3 className="text-3xl font-bold">
        <span>Hi welcome </span> {user?.displayName ? user.displayName : "back"}
      </h3>

      {/* admin stats showing */}
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign></FaDollarSign>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">{stats?.totalRevenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers></FaUsers>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaListCheck></FaListCheck>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBoxArchive></FaBoxArchive>
          </div>
          <div className="stat-title">MenuItems</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
