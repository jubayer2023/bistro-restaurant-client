const PageCover = ({ menuCover, title }) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${menuCover})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="py-36 ">
        <div
          className="text-white max-w-screen-md mx-auto py-20 flex justify-center items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", opacity: "1" }}
        >
          <div className="text-center space-y-6">
            <h3 className="font-bold text-2xl md:text-3xl lg:text-6xl tracking-wider">
              {title}
            </h3>
            <p className="text-sm font-semibold uppercase">
              Would you like to try a dish ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
