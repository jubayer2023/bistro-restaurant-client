import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
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
        to={"/contact"}
      >
        Contact Us
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-2 px-2 uppercase font-semibold text-yellow-400"
            : "py-2 px-2 uppercase font-semibold text-white"
        }
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-2 px-2 uppercase font-semibold text-yellow-400"
            : "py-2 px-2 uppercase font-semibold text-white"
        }
        to={"/ourMenu"}
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
        to={"ourShop"}
      >
        Our Shop
      </NavLink>
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-black bg-opacity-60 px-0 pr-3 md:px-10">
      <div className="navbar-start  w-[500px] md:w-[400px]">
        <div className="dropdown text-white">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-[8px] md:mt-[14px] z-[1] p-2 shadow bg-slate-700 rounded-md w-52"
          >
            {/* navlinks here */}
            {navItems}
            {""}
          </ul>
        </div>
        {/* logo-title */}
        <div className="uppercase text-white">
          <h3 className="font-bold text-lg md:text-2xl ">Bistro Boss</h3>
          <p className="tracking-tight text-xs md:text-lg font-bold ">
            R e s t a u r a n t
          </p>
        </div>
      </div>
      <div className=" navbar-end w-full">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {/* navlinks here */}
          {navItems}
          {""}
        </ul>
        <div className="flex justify-center items-center text-xs md:text-sm font-semibold uppercase space-x-1 text-white">
          <p>Cart</p>
          <p>Sign Out</p>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
