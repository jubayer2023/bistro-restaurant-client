import { Link, useNavigate } from "react-router-dom";
import loginBackground from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import useAuthContext from "../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpUser, updateUserProfile } = useAuthContext();
  //   console.log(signUpUser);
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    signUpUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            Swal.fire({
              title: "Sign up  successfully!!",
              showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
              },
              hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
              },
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
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

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-full"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 font-semibold text-xs">
                      *Name is required !!!
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600 font-semibold text-xs">
                      * Photo URL is required !!!
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 font-semibold text-xs">
                      *Email is required !!!
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                    })}
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600 font-semibold text-xs">
                      *Password is required !!!
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600 font-semibold text-xs">
                      *Password must be at least 6 characters!!!!!
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600 font-semibold text-xs">
                      Must contain at least one number and one uppercase and
                      lowercase letter, and at least 8 or more characters
                    </span>
                  )}
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
                <small className="text-xs font-semibold text-amber-500">
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
    </>
  );
};

export default SignUp;
