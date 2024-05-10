import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuthContext from "../../../hooks/useAuthContext";

const NavItems = () => {
  const [isAdmin] = useAdmin();
  const { user } = useAuthContext();

  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-2 px-2 uppercase font-semibold text-yellow-400"
            : "py-2 px-2 uppercase font-semibold text-white"
        }
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-2 px-2 uppercase font-semibold text-yellow-400"
            : "py-2 px-2 uppercase font-semibold text-white"
        }
        to={"/menu"}
      >
        Our Menu
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-2 px-2 uppercase font-semibold text-yellow-400"
            : "py-2 px-2 uppercase font-semibold text-white"
        }
        to={"/order/Salad"}
      >
        Order
      </NavLink>
      {user && isAdmin && (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "py-2 px-2 uppercase font-semibold text-yellow-400"
              : "py-2 px-2 uppercase font-semibold text-white"
          }
          to={"/dashboard/adminHome"}
        >
          Dashboard
        </NavLink>
      )}
      {user && !isAdmin && (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "py-2 px-2 uppercase font-semibold text-yellow-400"
              : "py-2 px-2 uppercase font-semibold text-white"
          }
          to={"/dashboard/userHome"}
        >
          Dashboard
        </NavLink>
      )}
    </>
  );
};

export default NavItems;
