import { useEffect } from "react";
import { URL, KEY } from "../../lib/lib";

import BestSelling from "./BestSelling";
import Categories from "./categories";
import Hero from "./Hero";
import TodaysSales from "./todaysSale";
import Advert from "./Advert";
import ExploreProduct from "./ExploreProduct";
import NewArrival from "./NewArrival";
import { Services } from "../../components";

// const fetchData = async () => {
//   try {
//     const request = await fetch(URL, {
//       method: "POST",
//       headers: {
//         Authorization: KEY,
//       },
//     });

//     if (request.status !== 200) {
//       throw new Error("Failed to connect");
//     }
//     let data = await request.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const Home = () => {
  // useEffect(() => {
  //   fetchData();
  // }, []);

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
