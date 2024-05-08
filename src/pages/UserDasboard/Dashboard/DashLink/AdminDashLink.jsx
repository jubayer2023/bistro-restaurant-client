import { FaHome, } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./DashLink.css";
import { FaBook, FaList, FaUsers, FaUtensils } from "react-icons/fa6";

const AdminDashLink = () => {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
        to={"/dashboard/adminHome"}
      >
        <span className="text-xl font-semibold">
          <FaHome></FaHome>
        </span>{" "}
        Admin Home
      </NavLink>

      <NavLink
        to={"/dashboard/addItems"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <FaUtensils></FaUtensils>
        </span>{" "}
        Add Items
      </NavLink>

      <NavLink
        to={"/dashboard/manageItems"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <FaList></FaList>
        </span>{" "}
        Manage Items
      </NavLink>

      <NavLink
        to={"/dashboard/carts"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <FaBook></FaBook>
        </span>{" "}
        My Cart
      </NavLink>

      <NavLink
        to={"/dashboard/users"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <FaUsers></FaUsers>
        </span>{" "}
        All Users
      </NavLink>
    </>
  );
};

export default AdminDashLink;
