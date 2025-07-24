import { useSearchParams, useNavigate } from "react-router-dom";
import { Star, NavigationS, Product2, SkeletonCard } from "../../../components";
import { useEffect, useMemo } from "react";
import useFetch from "../../../hooks/useFetch";
import { Images } from "../../../constant";

const SearchProduct = () => {
  const [searchParams] = useSearchParams();
  const value = searchParams.get("q") ?? null;
  const redirect = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);

  useEffect(() => {
    if (!value) {
      redirect("/allProduct");
    }
  }, [value]);

  const stars = [];

  for (let i = 1; i < 6; i++) {
    stars.push(<Star key={i} color={i > 5 ? `#7d8184` : `gold`} />);
  }
  const requestBody = useMemo(() => ({ value: value }), [value]);
  const { result, error, ispending } = useFetch(
    "searchproduct.php",
    requestBody,
    "POST"
  );
  const navigatedir = [
    {
      id: 1,
      dir: "/",
      name: "home",
    },
    { id: 2, dir: "/allProduct", name: "Product" },
    { id: 3, dir: "/product", name: `Search = ${value}` },
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
            {!ispending ? (
              result.data ? (
                result.data.map((data) => (
                  <Product2 key={data.product_Id} {...data} />
                ))
              ) : (
                <div className="col-span-full text-center mt-12">
                  <img
                    src={Images.NotFoundIcon}
                    alt="No results"
                    className="mx-auto w-48 h-48 object-contain"
                  />
                  <h2 className="text-2xl font-semibold mt-4">
                    No products found
                  </h2>
                  <p className="text-gray-500 mt-2">
                    We couldn't find anything for "
                    <span className="font-medium text-black">{value}</span>"
                  </p>
                  <button
                    onClick={() => redirect("/allProduct")}
                    className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    View All Products
                  </button>
                </div>
              )
            ) : (
              Array(19)
                .fill(0)
                .map((_, idx) => <SkeletonCard key={idx} />)
            )}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
