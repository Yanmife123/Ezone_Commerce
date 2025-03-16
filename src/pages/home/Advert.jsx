import { Link } from "react-router-dom";
import { Images } from "../../constant";

const Advert = () => {
  return (
    <div className={` w-full flex bg-black  px-4 py-15 mt-18 mb-5 `}>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-start w-[95%]">
          <div className="flex items-center">
            <p className="font-alt md:text-[15px] text-[12px] text-green">
              Categories
            </p>
          </div>
          <h2 className="mt-5 text-white lg:text-5xl md:text-3xl text-[18px] lg:leading-[60px] md:leading-[45px] leading-[25px] font-alt font-semibold">
            Enhance Your Music Experience
          </h2>
          <div className="pt-10">
            <div>
              <Link
                to={""}
                className="font-alt bg-green text-white sm:text-[15px] text-[13px] py-4 sm:px-12 px-6 rounded-[4px]"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={Images.JBL}
          alt="JBL"
          className="lg:h-[300px] lg:w-[500px] md:h-[250px] md:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Advert;
