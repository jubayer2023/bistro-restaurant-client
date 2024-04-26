import { Link } from "react-router-dom";
import loginBackground from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import useAuthContext from "../../hooks/useAuthContext";

const SignUp = () => {
  const { signUpUser } = useAuthContext();
  //   console.log(signUpUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
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
                <Link
                  to={"/login"}
                  className="cursor-pointer underline text-green-700"
                >
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
