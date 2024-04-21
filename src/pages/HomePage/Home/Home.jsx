import Heading from "../../Shared/Heading/Heading";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div className="">
      {/* banner section */}
      <Banner></Banner>

      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 lg:px-0">
        {/* Category section */}
        <section>
          <Heading
            sectionHeading={"Order Online"}
            sectionText={"From 11:00am to 10:00pm"}
          ></Heading>
          <Category></Category>
        </section>
      </div>
    </div>
  );
};

export default Home;
