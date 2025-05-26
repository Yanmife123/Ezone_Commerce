import { KEY, URL } from "../lib";
import { useState, useEffect } from "react";
const useFetch = (Endpoint, body, method) => {
  const [error, setError] = useState("");
  const [ispending, setIsPending] = useState(true);
  const [result, setresult] = useState("");
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(URL + Endpoint, {
      method: method,
      headers: {
        Authorization: KEY,
        "Content-Type": "json/application",
      },
      body: JSON.stringify(body),
      signal: abortCont.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to connect to the Database");
        } else {
          return res.json();
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
  }, []);
  return { result, error, ispending };
};

export default useFetch;
