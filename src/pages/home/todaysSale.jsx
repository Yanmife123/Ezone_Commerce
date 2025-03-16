import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "../../constant";
import {
  ArrowrRight,
  ArrowLeft,
  SalesHeader,
  Product,
  BtnLink,
} from "../../components";

const TodaysSales = () => {
  const useSlider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="paddingY border-b-1 border-b-grey">
      <div className="flex justify-between items-end">
        <SalesHeader title={`Today's`} headText={`Flash sales`} />
        <div className="flex gap-3">
          <div
            className="p-4 rounded-full bg-smoke btn"
            onClick={() => {
              useSlider.current.slickPrev();
            }}
          >
            <ArrowLeft color={`black`} />
          </div>
          <div
            className="p-4 rounded-full bg-smoke btn"
            onClick={() => {
              useSlider.current.slickNext();
            }}
          >
            <ArrowrRight color={`black`} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[400px] mt-8 relative max-w-[full] overflow-hidden justify-center">
          <Slider {...settings} ref={useSlider}>
            {data.Todays_data.map((today) => (
              <Product key={today.id} {...today} />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-5">
          <BtnLink text={"View All Products"} />
        </div>
      </div>
    </section>
  );
};

export default TodaysSales;
