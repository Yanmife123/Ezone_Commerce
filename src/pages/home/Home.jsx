import BestSelling from "./BestSelling";
import Categories from "./categories";
import Hero from "./hero";
import TodaysSales from "./todaysSale";
import Advert from "./Advert";
import ExploreProduct from "./ExploreProduct";

const Home = () => {
  return (
    <div>
      <div className="flex__center paddingX">
        <div className="boxWidth">
          <Hero />
          <TodaysSales />
          <Categories />
          <BestSelling />
          <Advert />
          <ExploreProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
