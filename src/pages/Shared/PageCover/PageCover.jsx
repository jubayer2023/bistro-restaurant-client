import { Parallax } from "react-parallax";

const Cover = ({ menuCover, title, text }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={menuCover}
      bgImageAlt="the dog"
      strength={-200}
    >
        <div className="h-[550px] flex justify-center items-center text-white max-w-screen-md mx-auto">
          <div
            className="w-full py-16"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", opacity: "1" }}
          >
            <div className="text-center space-y-6">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-6xl tracking-wider">
                {title}
              </h3>
              <p className="text-sm font-semibold uppercase">{text && text}</p>
            </div>
          </div>
        </div>
    </Parallax>
  );
};

export default Cover;
