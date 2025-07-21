import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavigationS, Toast } from "../../components";
import { Images } from "../../constant";
import useFetchUser from "../../hooks/useFetchUser";
import { use } from "react";
import { TokenRetrive, RemoveToken } from "../../lib";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const token = TokenRetrive();
  const currentPath = location.pathname.split("/").pop();
  const redirect = useNavigate();
  const { userAccess, isloadingAccess } = useContext(AppContext);
  const [showSessionExpired, setShowSessionExpired] = useState(false);
  const { isPending, result, error } = useFetchUser(
    "userDetails.php",
    {},
    "GET"
  );

  // console.log("Current location:", currentPath); // For debugging purpose
  useEffect(() => {
    if (!isloadingAccess) {
      if (!userAccess) {
        if (!token) {
          redirect("/login");
        } else {
          setShowSessionExpired(true);
          setTimeout(() => {
            setShowSessionExpired(false);
            RemoveToken();
            redirect("/login");
          }, 3000);
        }
      } // Wait until the user access state is determined
    }
  }, [isloadingAccess, userAccess, token]);
  const navigatedir = [
    {
      id: 1,
      dir: "/",
      name: "Home",
    },
    {
      id: 2,
      dir: "/myAccount",
      name: "My Account",
    },
  ];
  return (
    <div className="flex__center paddingX ">
      {showSessionExpired && (
        <Toast
          status={false}
          message={"Your session is up"}
          subtitle="Please log in again"
          duration={3000}
        />
      )}
      <div className="boxWidth my-12 h-auto">
        <div className="flex justify-between items-center md:mb-4 mb-6">
          <div className="flex gap-3 items-center ">
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
          {!isPending && result ? (
            <div className="flex items-center gap-2">
              <span className="text-black font-alt text-base capitalize">
                welcome{"  "}
                <span className="text-crimson"> {result.first_name} </span>
              </span>
            </div>
          ) : (
            <div className="w-[40px] h-[40px] text-shadow-crimson">
              {" "}
              {error}{" "}
            </div>
          )}
        </div>
        <div className="md:hidden block">
          <img
            src={Images.Menu}
            alt=""
            className="h-[30px]"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </div>
        <div className="mt-[50px] h-auto ">
          <div className="flex gap-10 sm:flex-row flex-col relative">
            <div
              className={`flex flex-col flex-1 gap-6 bg-white max-md:absolute max-md:w-[240px] w-full max-md:py-6 max-md:px-8 z-5 max-md:rounded-md ${
                isOpen ? "max-md:left-0 black__shadow" : "max-md:left-[-100%]"
              } max-md:top-[-40px] myAccount__Opening`}
            >
              <div>
                <h3 className="text-base text-black font-alt font-medium text-start">
                  Manage My Account
                </h3>
                <div className="mt-[10px] flex justify-end max-w-[240px]">
                  <ul className="list-none flex flex-col gap-[8px] items-start w-auto">
                    <li>
                      <Link
                        to={"profile"}
                        className={`${
                          currentPath === "profile"
                            ? "text-crimson"
                            : "text-gray-400"
                        } font-alt text-base`}
                        onClick={() => setIsOpen(false)}
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"addressBook"}
                        className={`${
                          currentPath === "addressBook"
                            ? "text-crimson"
                            : "text-gray-400"
                        } font-alt text-base`}
                        onClick={() => setIsOpen(false)}
                      >
                        Address Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"paymentMethod"}
                        className={`${
                          currentPath === "paymentMethod"
                            ? "text-crimson"
                            : "text-gray-400"
                        } font-alt text-base`}
                        onClick={() => setIsOpen(false)}
                      >
                        My Payment Options
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-base text-black font-alt font-medium text-start">
                  My Order
                </h3>
                <div className="mt-[10px] flex justify-end max-w-[240px]">
                  <ul className="list-none flex flex-col gap-[8px] items-start  w-[169px]">
                    <li>
                      <Link
                        to={"profile"}
                        className="text-gray-400 font-alt text-base"
                      >
                        My Returns
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"address_book"}
                        className="text-gray-400 font-alt text-base"
                      >
                        My Cancellation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-3  py-6  md:px-8 px-2 black__shadow relative">
              <div className="lg:w-[80%] md:w-[90%] w-full mx-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
