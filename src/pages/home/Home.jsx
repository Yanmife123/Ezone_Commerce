import BestSelling from "./BestSelling";
import Categories from "./categories";
import Hero from "./Hero";
import TodaysSales from "./todaysSale";
import Advert from "./Advert";
import ExploreProduct from "./ExploreProduct";
import NewArrival from "./NewArrival";
import { Footer, Services } from "../../components";

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
          <NewArrival />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Home;
