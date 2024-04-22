const SectionTitle = ({ sectionText, sectionHeading }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-20">
      <div className=" w-[250px] md:w-[300px]  mx-auto">
        <p className="text-yellow-500 text-sm md:text-lg font-semibold text-center pb-2">
          ---{sectionText}---
        </p>
        <h3 className="border-t-2 border-b-2 border-gray-400 text-xl md:text-3xl text-center py-3 uppercase text-gray-800">
          {sectionHeading}
        </h3>
      </div>
    </div>
  );
};

export default SectionTitle;
