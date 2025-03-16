import { SalesHeader, ArrowLeft, ArrowrRight } from "../../components";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../constant";
import Cat_Camera from "../../components/Category-Camera";
import {
  Cat_CellPhone,
  Cat_Computer,
  Cat_Gamepad,
  Cat_Headphones,
  Cat_SmartWatch,
} from "../../components/categoryImage";

const Categories = () => {
  const useSlider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="paddingY pb-1 border-b-1 border-b-grey">
      <div className="flex justify-between items-end pt-4">
        <SalesHeader title={`Categories`} headText={`Browse By Category`} />
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
        <div className=" mt-8 relative max-w-[full] overflow-hidden justify-center">
          <Slider {...settings} ref={useSlider}>
            <Cat_CellPhone />
            <Cat_Computer />
            <Cat_SmartWatch />
            <Cat_Camera />
            <Cat_Headphones />
            <Cat_Gamepad />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
