import { URL } from "./lib";
import TokenRetrive from "./TokenRetrive";
import { useState, useEffect } from "react";

const AddCart = async (body) => {
  const token = TokenRetrive();
  try {
    const request = await fetch(URL + "addcart.php", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
    if (request.status === 201) {
      return {
        status: true,
      };
    } else {
      const data = await request.json();
      return {
        status: false,
        message: data.message,
      };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      status: false,
      message: error.message,
    };
  }
};

const useGetCart = (triggerFetch) => {
  const [error, setError] = useState("");
  const [ispending, setIsPending] = useState(true);
  const [result, setResult] = useState([]);
  // const [status, setStatus] = useState(false);
  const token = TokenRetrive();
  useEffect(() => {
    if (!triggerFetch) {
      // Only fetch if triggerFetch is true
      setResult([]); // Clear previous result if not triggering
      setError("");
      setIsPending(false);
      return;
    }
    const abortCont = new AbortController();
    const FetchCart = async () => {
      try {
        const request = await fetch(URL + "getCart.php", {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          // body: null,
          credentials: "include",
          signal: abortCont.signal,
        });
        const data = await request.json();
        if (request.ok) {
          // setStatus(true);
          setResult(data.data);
          setIsPending(false);
          localStorage.setItem("cart", JSON.stringify(data.data));
        } else {
          // setStatus(false);
          setError(data.message);
          setIsPending(false);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);

          setError(error.message);
          setIsPending(false);
        }
      }
    };
    FetchCart();
    return () => {
      abortCont.abort();
    };
  }, [triggerFetch]);
  return { result, ispending, error };
};

const updateCart = ({ id, quantity }) => {
  try {
    const carts = JSON.parse(localStorage.getItem("cart"));
    const selectedCart = carts.findIndex((cart) => cart.cart_Id === id);
    carts[selectedCart].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(carts));
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

const deleteCart = async (body) => {
  const token = TokenRetrive();
  try {
    const request = await fetch(URL + "deleteCart.php", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "json/application",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
    if (request.ok) {
      return {
        status: true,
      };
    } else {
      const data = await request.json();
      return {
        status: false,
        message: data.message,
      };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      status: false,
      message: error.message,
    };
  }
};

export { useGetCart, AddCart, updateCart, deleteCart };
