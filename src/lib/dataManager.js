import { URL, KEY } from "./lib";

const handleUserAction = async (endPoint, body) => {
  try {
    const request = await fetch(`${URL}${endPoint}`, {
      method: "POST",
      headers: {
        "X-API-Key": KEY,
        "Content-Type": "json/application",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });

    if (request.status !== 200) {
      throw new Error("Failed to connect");
    }

    let data = await request.json();

    if (data.status) {
      localStorage.setItem("token", data.token);
      return {
        status: true,
      };
    } else {
      return {
        status: false,
        error: data.error,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleUserAction;
