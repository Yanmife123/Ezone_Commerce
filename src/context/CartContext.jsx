// import { Context } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useGetCart } from "../lib/Cart";
import { AppContext } from "./AppContext";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const path = useLocation();
  const [cartData, setCartData] = useState([]);
  const [shouldIfetch, setShouldIFetch] = useState(false);
  const [shouldIfetchlocal, setShouldIFetchlocal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  function CartLocalStorage() {
    return JSON.parse(localStorage.getItem("cart"));
  }

  const {
    result: fetchedCartResult,
    ispending: isCartFetching,
    error: cartFetchError,
  } = useGetCart(shouldIfetch); // Pass shouldIfetch as a dependency or trigger

  useEffect(() => {
    let cartdata = CartLocalStorage();
    if (cartdata) {
      setCartData(cartdata);
      setIsLoading(false);
      setShouldIFetchlocal(false);
    } else {
      setShouldIFetchlocal(false);
      setShouldIFetch(true);
    }
  }, [shouldIfetchlocal]);

  useEffect(() => {
    if (shouldIfetch) {
      const timer = setTimeout(() => {
        const updated = CartLocalStorage();
        if (updated) {
          setCartData(updated);
        }
        setIsLoading(false);
        setShouldIFetch(false);
      }, 300); // delay slightly to allow fetch to complete

      return () => clearTimeout(timer);
    }
  }, [isCartFetching, fetchedCartResult]);
  return (
    <CartContext.Provider
      value={{
        cartData,
        isLoading,
        shouldIfetch,
        setShouldIFetch,
        setShouldIFetchlocal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
