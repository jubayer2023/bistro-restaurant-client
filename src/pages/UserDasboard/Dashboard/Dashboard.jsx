import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaHome } from "react-icons/fa";
import AdminDashLink from "./DashLink/AdminDashLink";
import UserDashLink from "./DashLink/UserDashLink";
import useAdmin from "../../../hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* sidebar dashBoard */}
      <div className="w-60 px-8 min-h-screen bg-orange-400">
        <div className="uppercase text-center py-8">
          <h3 className="font-bold text-lg md:text-2xl ">Bistro Boss</h3>
          <p className="tracking-tight text-xs md:text-lg font-bold ">
            R e s t a u r a n t
          </p>
        </div>
        <ul className="flex flex-col space-y-4 ">
          {isAdmin ? (
            <AdminDashLink></AdminDashLink>
          ) : (
            <UserDashLink></UserDashLink>
          )}
          {/* common dash link */}
          <div className="divider "></div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
            }
            to={"/"}
          >
            <span className="text-xl font-semibold">
              <FaHome></FaHome>
            </span>{" "}
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
            }
            to={"/menu"}
          >
            <span className="text-xl font-semibold">
              <FaEnvelope></FaEnvelope>
            </span>{" "}
            Menu
          </NavLink>
        </ul>
      </div>
      {/* dashboard outlet */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
