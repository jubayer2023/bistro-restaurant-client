import chefServiceImage from "../../../assets/home/chef-service.jpg";

const BistroDesc = () => {
  return (
    <div className=" relative h-[450px]">
      <img src={chefServiceImage} alt="chef" className="h-full" />
      <div
        className="absolute top-0 left-0 w-full h-full "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          opacity: "1",
        }}
      >
        <div className="flex justify-center items-center h-full max-w-screen-md mx-auto ">
          <div className="text-center bg-white py-16 space-y-4">
            <h3 className="uppercase text-3xl">Bistro Boss</h3>
            <p className="px-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
              autem consequuntur? Odit quo totam tenetur, architecto incidunt ad
              veniam, magni quaerat laborum quam molestiae ut iure repellat
              quidem repellendus id!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroDesc;
