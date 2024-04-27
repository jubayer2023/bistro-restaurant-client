import { NavLink } from "react-router-dom";

const NavItems = () => {
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
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-2 px-2 uppercase font-semibold text-yellow-400"
            : "py-2 px-2 uppercase font-semibold text-white"
        }
        to={"/test"}
      >
        Private
      </NavLink>
    </>
  );
};

export default NavItems;
