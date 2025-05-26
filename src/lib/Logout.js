import { URL } from "./lib";

const Logout = async () => {
  try {
    const request = await fetch(URL + "logout.php", {
      method: "POST",
      credentials: "include",
    });

    if (request.status !== 200) {
      return false;
    }

    if (request.status === 200) {
      localStorage.removeItem("token");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export default Logout;
