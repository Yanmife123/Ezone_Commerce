import React from "react";
import { useState, useContext } from "react";
import { Images } from "../constant";
import CartRow from "./cartRow";
import { useEffect } from "react";
import { deleteCart, updateCart } from "../lib/Cart";
import { CartContext } from "../context/CartContext";
import Toast from "./alert-toast";

const CartData = ({
  product_name,
  cart_Id,
  Total,
  product_description,
  product_image,
  product_price,
  quantity,
}) => {
  const quantityI = parseInt(quantity); //convert the string value to integer
  const [productNumber, setProductNumber] = useState(quantityI);
  const [isLoading, setIsLoading] = useState(false);

  const { setShouldIFetch, setShouldIFetchlocal } = useContext(CartContext);

  const price = product_price;

  useEffect(() => {
    if (productNumber !== quantityI) {
      const result = updateCart({
        id: cart_Id,
        quantity: productNumber,
      });
      if (result) {
        setShouldIFetchlocal(true);
      }
    }
  }, [productNumber]);

  const handleDelete = async () => {
    setIsLoading(true);
    const result = await deleteCart({
      cart_Id: cart_Id,
    });
    if (result.status) {
      setShouldIFetch(true);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <CartRow>
      <div className="flex items-center gap-4">
        <img
          src={product_image}
          alt={product_name}
          className="h-[54px] w-[54px] rounded"
        />
        <div>
          <div
            className="font-semibold max-w-[180px] truncate"
            title={product_name}
          >
            {product_name}
          </div>
          <div
            className="text-sm text-gray-500 max-w-[180px] truncate"
            title={product_description}
          >
            {product_description.length > 100
              ? product_description.slice(0, 100) + "..."
              : product_description}
          </div>
        </div>
      </div>
      <div className="cartParagraph flex justify-center">${price}</div>
      <div className="cartParagraph flex justify-center">
        <button
          className="h-[44px] w-[32px] border rounded-l bg-gray-200 hover:bg-gray-300"
          onClick={() => setProductNumber((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="h-[44px] w-[40px] flex items-center justify-center border-t border-b">
          {productNumber}
        </span>
        <button
          className="h-[44px] w-[32px] border rounded-r bg-gray-200 hover:bg-gray-300"
          onClick={() => setProductNumber((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className="cartParagraph flex justify-end font-bold">
        ${productNumber * price}
      </div>
      <div className="flex justify-end">
        {!isLoading ? (
          <button
            className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
            onClick={handleDelete}
          >
            Delete
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
            Deleting...
          </button>
        )}
      </div>
    </CartRow>
  );
};

export default CartData;
