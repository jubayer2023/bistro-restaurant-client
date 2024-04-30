import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./DashLink.css";
import { FaCalendar } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";

const DashLink = () => {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
        to={"/"}
      >
        <span className="text-xl font-semibold">
          <FaHome></FaHome>
        </span>{" "}
        User Home
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <FaCalendar></FaCalendar>
        </span>{" "}
        Reservation
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <RiSecurePaymentFill></RiSecurePaymentFill>
        </span>{" "}
        Payment History
      </NavLink>

      <NavLink
        to={"/dashboard/carts"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <FaShoppingCart></FaShoppingCart>
        </span>{" "}
        My Cart
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <MdReviews></MdReviews>
        </span>{" "}
        Add Review
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "activeCss" : "defaultCss"
        }
      >
        <span className="text-xl font-semibold">
          <TbBrandBooking></TbBrandBooking>
        </span>{" "}
        My Bookings
      </NavLink>
    </>
  );
};

export default DashLink;
