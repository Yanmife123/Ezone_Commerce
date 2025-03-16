import { Link } from "react-router-dom";
import { data } from "../../constant";
import { AdvertLink, ArrowrRight } from "../../components";

const Hero = () => {
  return (
    <section className="pb-[64px]">
      <div className="flex h-full">
        <div className=" lg:block hidden flex-1  border-r-1 border-grey pt-[35px]">
          <ul className="flex flex-col gap-3 list-none justify-end ">
            {data.sideNavLink.map((link, index) => (
              <li
                key={link.id}
                className="font-poppins text-[18px]  text-black font-normal  flex justify-between items-center"
              >
                <Link to={link.id} className=" flex w-[95%] justify-between">
                  <div>{link.title}</div>
                  {index > 1 ? (
                    ""
                  ) : (
                    <div className="text-[20px] font-semibold text-black font-poppins">
                      {">"}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-4  pt-6 flex lg:justify-end justify-center">
          <div
            className={`lg:w-[95%] w-full flex h-full bg-black lg:px-0 px-4 pt-5 md:pb-2 pb-5`}
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-col items-start">
                <div className="flex gap-3 items-center">
                  <img
                    src={data.Opening_Offer.logo}
                    alt=""
                    className="h-[38px]"
                  />
                  <p className="font-alt md:text-[15px] text-[12px] text-white">
                    {data.Opening_Offer.name}
                  </p>
                </div>
                <h2 className="mt-2 text-white lg:text-5xl md:text-3xl text-[20px] lg:leading-[60px] md:leading-[45px] leading-[25px] font-alt font-semibold">
                  Up to 10% <br /> off Voucher
                </h2>
                <div className="flex md:gap-4  gap-2 items-center mt-4">
                  <AdvertLink link={` `} />
                  <div>
                    <ArrowrRight color={`white`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={data.Opening_Offer.banner}
                alt={data.Opening_Offer.name}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
