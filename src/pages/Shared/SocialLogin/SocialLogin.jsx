import { FaGoogle } from "react-icons/fa6";
import useAuthContext from "../../../hooks/useAuthContext";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuthContext();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const userInfo = {
        email: result?.user?.email,
        name: result.user.displayName,
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="w-3/4 mx-auto space-y-2">
      <p className="px-2 text-sm font-semibold to-gray-700">
        Or Sign in with google
      </p>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-sm btn-outline btn-secondary  w-full"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
