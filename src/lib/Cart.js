import { URL } from "./lib";
import TokenRetrive from "./TokenRetrive";
import { useState, useEffect } from "react";

const AddCart = async (body) => {
  const token = TokenRetrive();
  try {
    const request = await fetch(URL + "addcart", {
      method: "POST",
      headers: {
        Authorization: token,
       "Content-Type": "application/json",
      },
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
        const request = await fetch(URL + "getCart", {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          // body: null,
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

const updateCart = async (body) => {
  const token = TokenRetrive();
  try {
    const request = await fetch(URL + "updateCart", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "json/application",
      },
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

const deleteCart = async (body) => {
  const token = TokenRetrive();
  try {
    const request = await fetch(URL + "deleteCart", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "json/application",
      },
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
