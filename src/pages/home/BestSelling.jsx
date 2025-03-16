import React, { useRef } from "react";
import { data } from "../../constant";

import { SalesHeader, BtnLink, Product } from "../../components";

const BestSelling = () => {
  const useSlider = useRef(null);

  return (
    <section className="paddingY flex flex-col gap-4">
      <div className="flex justify-between items-center pt-2">
        <SalesHeader title={`This month`} headText={`Best Selling Product`} />
        <div className="flex min-w-[100px] h-auto mt-[-10px]">
          <BtnLink
            text={`View All`}
            style={`max-sm:px-2 max-sm:py-3 max-sm:text-[13px]`}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-9 pt-6">
        {data.BestSell.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
