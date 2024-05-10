import useAuthContext from "../../../hooks/useAuthContext";

const UserHome = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h3 className="text-3xl">
        <span>Hi welcome </span>
        {user?.displayName ? user.displayName : "back"}
      </h3>
    </div>
  );
};

export default UserHome;
