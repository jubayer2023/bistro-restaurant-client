import { useLoaderData } from "react-router-dom";
import CommonForm from "../../Shared/CommonForm/CommonForm";

const UpdateItem = () => {
  const item = useLoaderData();
  //   console.log(item);
  return (
    <div>
      <CommonForm heading={"Update An Item"} item={item} method={"patch"} ></CommonForm>
    </div>
  );
};

export default UpdateItem;
