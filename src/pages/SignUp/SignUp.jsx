import { Link } from "react-router-dom";
import loginBackground from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-3/4 lg:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-3/4 lg:w-1/2">
            <h1 className="text-5xl font-bold text-center">Sign up now!</h1>

            <form onSubmit={handleSignUp} className="card-body w-full">
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
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="fill the above captcha"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                <button className="btn btn-xs btn-outline ">Validate </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Sign up"}
                />
              </div>
            </form>
            <p className="text-center">
                <small className="text-sm font-semibold text-amber-500">
                  Already have an account ?{" "}
                  <Link to={"/login"} className="cursor-pointer underline text-green-700">
                    Login here!!
                  </Link>
                </small>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
