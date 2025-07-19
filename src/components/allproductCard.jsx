import { useState, useContext } from "react";
import Star from "./Star";
import WihlistCom from "./wihlistCom";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../context/AppContext";
import { AddCart } from "../lib/Cart";
const Product2 = ({
  product_image,
  product_name,
  product_price,
  product_Id,
}) => {
  const { userAccess } = useContext(AppContext);
  const { setShouldIFetch } = useContext(CartContext);
  const [wishList, setWishList] = useState(false);
  const [isadded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(<Star key={i} color={i > 5 ? `#7d8184` : `gold`} />);
  }
  const handleAddCart = async () => {
    setIsLoading(true);
    if (userAccess) {
      const cartResult = await AddCart({
        product_id: product_Id,
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
    <div className="sm:w-[270px] sm:min-w-[270px] w-full h-full flex flex-col sm:items-start items-center gap-4 product">
      <Link
        to={`/product/${product_Id}`}
        className="w-full h-full max-w-[260px]"
      >
        <div className="w-full max-w-[260px] h-[250px] bg-smoke flex justify-center items-center sm:p-4 py-6 px-16 rounded-[8px] relative">
          <img
            src={product_image}
            alt={product_name}
            className="h-[65%] object-contain"
          />
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
      </Link>
      <div className="flex flex-col items-start gap-2 sm:w-[full] w-[70%] sm:max-w-full max-w-[260px] ">
        <h4 className="text-black text-poppins text-base font-medium leading-[28px] w-full">
          {product_name}
        </h4>
        <p className="text-crimson text-[14px] font-medium font-poppins">
          {product_price}
        </p>
        <div className="flex gap-2">{stars}</div>
        <div className="flex gap-4 mt-2 w-full">
          {isadded ? (
            !isLoading ? (
              <button className="bg-grey text-blue-600 px-2 py-3 rounded-lg font-semibold shadow">
                Added to Cart
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
            <button
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-semibold shadow cursor-pointer"
              onClick={handleAddCart}
            >
              Add to Cart
            </button>
          )}
          <button className="border border-gray-300 hover:bg-gray-100 transition px-2 py-2 rounded-lg font-semibold text-gray-700 text-sm">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product2;
