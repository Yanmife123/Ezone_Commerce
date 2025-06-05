import { useState, useEffect } from "react";
import { URL } from "../lib";
import { TokenRetrive } from "../lib";

const useFetch = (Endpoint, body, method) => {
  const token = TokenRetrive();
  const [error, setError] = useState("");
  const [ispending, setIsPending] = useState(true);
  const [result, setresult] = useState("");
  useEffect(() => {
    const FetchUser = async () => {
      try {
        const request = await fetch(URL + Endpoint, {
          method: method,
          headers: {
            Authorization: token,
            "Content-Type": "json/application",
          },
          // body: JSON.stringify(body),
        });
        if (request.ok) {
          setIsPending(false);
          const data = await request.json();
          // console.log("Data fetched successfully:", data);
          setresult(data.data);
          // console.log("Data fetched successfully:", data.data.first_name);
        }
        if (request.status === 404) {
          setIsPending(false);
          setError("Not Found");
        }
        if (request.status === 500) {
          setIsPending(false);
          setError("Internal Server Error");
        }
        if (request.status === 401) {
          setIsPending(false);
          setError("Unauthorized");
        }
        if (request.status === 400) {
          setIsPending(false);
          setError("Bad Request");
        }
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.error("Fetch error:", error);
      }
    };
    FetchUser();
    // Cleanup function to abort the fetch request if the component unmounts
  }, []);
  return { result, error, ispending };
};

export default useFetch;
