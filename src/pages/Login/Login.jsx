import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import loginBackground from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const capthcaRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const captchaValue = capthcaRef.current.value;
    // console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div
      className="min-h-screen py-20 bg-fixed"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* main component here */}
      <div className="hero max-w-screen-sm  lg:max-w-screen-md mx-auto px-4 lg:px-0 shadow-xl shadow-slate-600 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-3/4 lg:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-3/4 lg:w-1/2">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* captcha here */}
              <div className="form-control  ">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={capthcaRef}
                  placeholder="fill the above captcha"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs btn-outline my-1"
                >
                  Validate{" "}
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value={"Login"}
                />
              </div>
            </form>
              <p className="text-center">
                <small className="text-sm font-semibold text-red-600">
                  New here ?{" "}
                  <Link to={"/signup"} className="cursor-pointer underline text-green-800">
                    Create an account!!
                  </Link>
                </small>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
