// import { useEffect } from "react";
import { URL, KEY } from "./lib";

const HandleUserToken = async (token) => {
  try {
    const request = await fetch(URL + "token.php", {
      method: "POST",
      headers: {
        "X-Access-Key": KEY,
        Authorization: token,
        "Content-Type": "json/application",
      },
      credentials: "include",
    });
    if (request.status === 401) {
      // localStorage.removeItem("token");
      return false;
    }
    if (request.status === 201) {
      const data = await request.json();
      localStorage.setItem("token", data);
      return true;
    }

    if (request.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export default HandleUserToken;
