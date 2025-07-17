import React, { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { SkeletonCard } from "../../components";
import { data } from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SalesHeader, BtnLink, Product } from "../../components";

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

const BestSelling = () => {
  const { result, error, ispending, status } = useFetch(
    "randomProduct.php",
    null,
    "POST"
  );
  const useSlider = useRef(null);

  return (
    <section className="paddingY flex flex-col gap-4">
      <div className="flex justify-between items-center pt-2">
        <SalesHeader title={`This month`} headText={`Best Selling Product`} />
        <div className="flex min-w-[100px] h-auto mt-[-10px]">
          <BtnLink
            location={"/allProduct"}
            text={`View All`}
            style={`max-sm:px-2 max-sm:py-3 max-sm:text-[13px]`}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-9 pt-6">
        {!ispending && result ? (
          <div className="h-[400px] mt-8 relative max-w-[full] overflow-hidden justify-center">
            <Slider {...settings} ref={useSlider}>
              {result.data.map((today) => (
                <Link
                  key={today.product_Id}
                  to={`/product/${today.product_Id}`}
                >
                  <Product {...today} />
                </Link>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="h-[400px] mt-8 relative max-w-[full] overflow-hidden justify-center">
            <Slider {...settings} ref={useSlider}>
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <SkeletonCard key={idx} />
                ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSelling;
