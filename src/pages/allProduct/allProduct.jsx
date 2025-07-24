import { NavigationS, Product2, Star, SkeletonCard } from "../../components";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const ALLProduct = () => {
  const { result, error, ispending } = useFetch("allProduct.php", null, "POST");
  const stars = [];

  for (let i = 1; i < 6; i++) {
    stars.push(<Star key={i} color={i > 5 ? `#7d8184` : `gold`} />);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigatedir = [
    {
      id: 1,
      dir: "/",
      name: "home",
    },
    { id: 2, dir: "/product", name: "Allproduct" },
  ];
  return (
    <div className="flex__center paddingX ">
      <div className="boxWidth my-12 h-auto">
        <div className="flex gap-2 mb-8 text-sm">
          {navigatedir.map((link, index) => (
            <NavigationS
              key={link.id}
              link_dir={link.dir}
              name={link.name}
              color={
                index === navigatedir.length - 1
                  ? "text-black font-semibold"
                  : "text-gray-400"
              }
              hidden={index === navigatedir.length - 1 ? "hidden" : ""}
            />
          ))}
        </div>
        <div className="mt-10 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:gap-9 gap-4">
            {!ispending && result
              ? result.data.map((data) => (
                  <Product2 key={data.product_Id} {...data} />
                ))
              : Array(19)
                  .fill(0)
                  .map((_, idx) => <SkeletonCard key={idx} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALLProduct;
