import { NavigationS, Star } from "../../components";
import LoadingPage from "../../components/LoadingPage";
import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AddCart } from "../../lib/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import { Images } from "../../constant";

const ProductDetail = () => {
  const redirect = useNavigate();
  const params = useParams();
  const { userAccess } = useContext(AppContext);
  const { setShouldIFetch } = useContext(CartContext);
  const [isadded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigatedir = [
    {
      id: 1,
      dir: "/",
      name: "home",
    },
    { id: 2, dir: "/product", name: "product" },
  ];

  const { result, error, ispending } = useFetch(
    "productDetail.php",
    params,
    "POST"
  );

  console.log(error);
  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(<Star key={i} color={i > 5 ? `#7d8184` : `gold`} />);
  }

  const handleAddCart = async () => {
    setIsLoading(true);
    if (userAccess) {
      const cartResult = await AddCart({
        product_id: result["data"]["product_Id"],
        quantity: 1,
      });
      if (cartResult.status) {
        setShouldIFetch(true);
        setIsAdded(true);
        console.log("added");
      } else {
        console.log(error);
      }
    } else {
      redirect("/login");
    }
    setIsLoading(false);
  };
  return (
    <div className="paddingX paddingY justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
      {ispending && (
        <div className="h-[400px] relative">
          <LoadingPage />
        </div>
      )}
      {!ispending && result ? (
        <div className=" w-full flex justify-center items-center">
          <div className="w-full max-w-5xl  my-12 sm:p-6 p-4  py-6 sm:bg-white  rounded-3xl shadow-lg">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Product Image */}
              <div className="flex-1 flex justify-center items-center">
                <div className="h-[350px] w-[350px] bg-gradient-to-tr from-blue-100 to-white rounded-2xl flex justify-center items-center shadow-md p-6">
                  <img
                    src={result?.data?.product_image}
                    alt={result?.data?.product_name}
                    className="h-[80%] w-auto rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {result["data"]["product_name"]}
                  </h2>
                  <div className="text-2xl font-bold text-gray-600">
                    Category: {result["data"]["category"]}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">{stars}</div>
                    <span className="text-gray-500 text-sm">(104 reviews)</span>
                  </div>
                  <p className="text-lg text-gray-700">
                    {result["data"]["product_description"]}
                  </p>
                  <p className="text-2xl font-semibold text-blue-700">
                    $ {result["data"]["product_price"]}
                  </p>
                  <div className="flex gap-4 mt-2">
                    {!isadded ? (
                      !isLoading ? (
                        <button
                          className="bg-crimson hover:bg-red-900 transition text-white px-8 py-3 rounded-lg font-semibold shadow cursor-pointer"
                          onClick={handleAddCart}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          className="ml-4 px-3 py-1 bg-gray-400 text-white rounded cursor-not-allowed flex items-center"
                          disabled
                        >
                          <svg
                            className="animate-spin h-4 w-4 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Adding...
                        </button>
                      )
                    ) : (
                      <button className="bg-grey text-blue-600 px-2 py-3 rounded-lg font-semibold shadow">
                        Added to Cart
                      </button>
                    )}
                    <button className="border border-gray-300 hover:bg-gray-100 transition px-8 py-3 rounded-lg font-semibold text-gray-700">
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        !ispending && (
          <div className="w-full flex flex-col items-center">
            <img
              src={Images.ProductNotFound}
              alt=""
              className=" sm:h-[600px] sm:w-[600px]  h-[400px] w-[400px]"
            />
            <div>
              <Link
                to="/allProduct"
                className="text-white font-alt text-lg rouded-lg bg-crimson px-6 font-semibold rounded-md py-2 transition-colors duration-300"
              >
                Go Back to Products
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetail;
