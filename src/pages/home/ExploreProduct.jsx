import { useRef } from "react";
import { ArrowLeft, ArrowrRight, SalesHeader } from "../../components";

const ExploreProduct = () => {
  const useSlider = useRef(null);
  return (
    <section className="paddingY border-b-1 border-b-grey">
      <div className="flex justify-between items-end">
        <SalesHeader title={`Our Product`} headText={`Explore Our Products`} />
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
    </section>
  );
};

export default ExploreProduct;
