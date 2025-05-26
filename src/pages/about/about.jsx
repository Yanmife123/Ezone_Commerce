import { useState } from "react";
import { NavigationS, Services } from "../../components";
import { data, Images } from "../../constant";

const About = () => {
  const navigatedir = ["home", "about"];
  return (
    <div className="flex__center paddingX ">
      <div className="boxWidth my-12 h-auto">
        <div className="flex gap-3 md:mb-4 mb-6">
          {navigatedir.map((link, index) => (
            <NavigationS
              key={link}
              link_dir={link}
              index={index}
              color={
                index === navigatedir.length - 1 ? "text-black" : "text-grey"
              }
              hidden={index === navigatedir.length - 1 ? "hidden" : ""}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-10">
          <div className="flex-1 flex items-center">
            <div className="flex flex-col gap-[40px] md:w-[95%] w-full">
              <h2 className="text-black text-[53px] font-semibold md:text-start text-center">
                Our Story
              </h2>
              <div className="flex flex-col gap-[24px]">
                <p className="leading-6  text-black text-base font-poppins ">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p className="leading-6  text-black text-base font-poppins ">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1  flex justify-end">
            <div className="md:w-[95%] w-full">
              <img
                src={Images.Contact_image}
                alt="Company Females"
                className="h-[100%] w-[100%] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="my-[80px]">
          <div className="flex gap-[28px] justify-center flex-wrap">
            {data.About_Serivce.map((service) => (
              <div
                key={service.id}
                className="w-[200px] h-[200px] px-3 py-1 border-1 border-grey flex flex-col justify-center items-center"
              >
                <img src={service.img} alt="" className="w-[70px] h-[70px]" />
                <div className="flex flex-col gap-2 mt-3">
                  <h2 className="font-bold text-black text-3xl text-center">
                    {service.value}
                  </h2>
                  <p className="text-[14px] text-black font-normal font-poppins">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-auto mb-12 mt-7">
          <div className="flex gap-[30px] flex-wrap justify-center">
            {data.About_founder.map((founder) => (
              <div className=" w-[320px] " key={founder.id}>
                <div className="h-[380px] black__shadow bg-smoke flex justify-center items-end rounded-[5px]">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="h-[90%]"
                  />
                </div>
                <div className="mt-5 p-2 flex flex-col items-center">
                  <h3 className="font-medium text-3xl text-black font-poppins">
                    {founder.name}
                  </h3>
                  <p className="font-poppins font-normal text-base text-black">
                    {founder.profession}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Services />
      </div>
    </div>
  );
};

export default About;
