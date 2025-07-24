import { KEY, URL } from "../lib";
import { useState, useEffect } from "react";
const useFetch = (Endpoint, body, method) => {
  const [error, setError] = useState("");
  const [ispending, setIsPending] = useState(true);
  const [result, setresult] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(URL + Endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: abortCont.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          throw new Error("Data not found");
        } else {
          throw new Error("Failed to connect to the Database");
        }
      })
      .then((data) => {
        setresult(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => {
      abortCont.abort();
    };
  }, [body]);
  return { result, error, ispending };
};

export default useFetch;
