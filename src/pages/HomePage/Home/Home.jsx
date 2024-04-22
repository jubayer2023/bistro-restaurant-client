import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import BistroDesc from "../BitroDesc/BistroDesc";
import Category from "../Category/Category";
import PopularItems from "../PopularItems/PopularItems";

const Home = () => {
  return (
    <div className="">
      {/* banner section */}
      <Banner></Banner>

      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto ">
        {/* Category section */}
        <section>
          {/* heading */}
          <SectionTitle
            sectionHeading={"Order Online"}
            sectionText={"From 11:00am to 10:00pm"}
          />
          <Category></Category>
        </section>

        {/* chef Service  section*/}
        <section className="my-24">
          <BistroDesc></BistroDesc>
        </section>

        {/* our menu section */}
        <section>
          {/* heading */}
          <SectionTitle
            sectionHeading={"Popular Items"}
            sectionText={"Check it out"}
          />
          <PopularItems></PopularItems>
        </section>
      </div>
    </div>
  );
};

export default Home;
