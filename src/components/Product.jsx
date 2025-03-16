import { useState } from "react";
import Star from "./Star";
import WihlistCom from "./wihlistCom";

const Product = ({ img, name, price, star }) => {
  const [wishList, setWishList] = useState(false);

  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(<Star key={i} color={i > star ? `#7d8184` : `gold`} />);
  }

  return (
    <div className="sm:w-[270px] sm:min-w-[270px] w-full h-full flex flex-col sm:items-start items-center gap-4 product">
      <div className="sm:w-full w-[70%] max-w-[260px] h-[250px] bg-smoke flex justify-center items-center sm:p-4 py-6 px-16 rounded-[8px] relative">
        <img src={img} alt={name} className="h-[65%] object-contain" />
        <div
          className="absolute top-[10px] right-[8px] bg-white w-[26px] h-[26px]  flex justify-center items-center rounded-full btn"
          onClick={() => {
            setWishList(!wishList);
          }}
        >
          <WihlistCom
            color={wishList ? `#db4444` : `black`}
            bg={wishList ? `#db4444` : `none`}
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 sm:w-[full] w-[70%] sm:max-w-full max-w-[260px] ">
        <h4 className="text-black text-poppins text-base font-medium leading-[28px] w-full">
          {name}
        </h4>
        <p className="text-crimson text-[14px] font-medium font-poppins">
          {price}
        </p>
        <div className="flex gap-2">{stars}</div>
      </div>
    </div>
  );
};

export default Product;
