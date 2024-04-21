import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <footer className="flex flex-col md:flex-row justify-between items-center text-white h-full">
        <div className="bg-slate-700 w-full h-full py-7">
          <div className=" flex justify-center md:justify-end md:mr-20 lg:mr-32 h-full ">
            <div className="text-center pb-3">
              <h3 className="text-xl my-2">Contact us</h3>
              <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
              <p className="text-sm">+88 123456789</p>
              <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 w-full h-full py-12">
          <div className="flex justify-center md:justify-start md:ml-20 lg:ml-32 h-full">
            <div className="text-center space-y-3">
              <h3 className="text-xl">Follow US</h3>
              <p className="text-sm ">Join us on social media</p>
              <p className="text-white flex justify-center items-center space-x-3 pt-2">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-gray-800 text-white">
        <aside>
          <p>Copyright &copy; 2024 - All right reserved by Md. Jubayer Sarker</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
