import { Link } from "react-router-dom";
import { NavigationS } from "../../components";

const NotFound = () => {
  const navigatedir = [
    {
      id: 1,
      dir: "/",
      name: "Home",
    },
    {
      id: 2,
      dir: "*",
      name: "404 error",
    },
  ];
  return (
    <div className="flex__center paddingX ">
      <div className="boxWidth my-12 h-auto">
        <div className="flex gap-3 md:mb-4 mb-6">
          {navigatedir.map((link, index) => (
            <NavigationS
              key={link.id}
              link_dir={link.dir}
              name={link.name}
              color={
                index === navigatedir.length - 1 ? "text-black" : "text-grey"
              }
              hidden={index === navigatedir.length - 1 ? "hidden" : ""}
            />
          ))}
        </div>
        <div className="mt-[50px] flex flex-col items-center justify-center h-[400px]  bg-white shadow-lg ">
          <h1 className="text-[90px] font-bold text-gray-800 mb-4">
            404 Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="text-white font-alt text-base rouded-lg bg-crimson px-4 py-2 transition-colors duration-300"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
