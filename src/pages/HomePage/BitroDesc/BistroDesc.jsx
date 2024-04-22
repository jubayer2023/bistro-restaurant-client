import "./Bistro.css";

const BistroDesc = () => {
  return (
    <div className="bistro_box w-full h-full">
      {/* <img src={chefServiceImage} alt="chef" className="h-full  bg-fixed" /> */}
      <div
        className="w-full h-full py-28"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          opacity: "1",
        }}
      >
        <div className="flex justify-center items-center h-full max-w-screen-md mx-auto ">
          <div className="text-center bg-white py-12 space-y-4">
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
