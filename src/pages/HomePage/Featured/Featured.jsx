import "./Featured.css";
import featureImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div className="fetaured_item my-20 bg-fixed">
      <div
        className="py-16 space-y-6"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          opacity: "1",
        }}
      >
        <SectionTitle
          sectionHeading={"Featured Items"}
          sectionText={"Check it out"}
          color={"text-white"}
        ></SectionTitle>
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-10  items-center max-w-screen-md mx-auto ">
          <div className="flex-1 ">
            <img className="" src={featureImg} alt="fetaureImage" />
          </div>
          <div className="flex-1 text-neutral-300 space-y-2">
            <p className="text-sm text-neutral-50">March 20, 2023</p>
            <h3 className="text-sm text-neutral-50">WHERE CAN I GET SOME?</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            <button className="btn  btn-outline border-0 border-b-4 btn-sm text-white uppercase">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
