import { Images, data } from "../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { HandleUserToken, TokenRetrive, Logout } from "../lib";
import UserNavBar from "./UserNavBar";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const [userAccessNav, setUserAccessNav] = useState(false);
  const [userIcon_Clicked, setUserIcon_Clicked] = useState(false);
  const path = useLocation();
  const redirect = useNavigate();
  const { userAccess, isloadingAccess } = useContext(AppContext);

  useEffect(() => {
    if (!isloadingAccess) {
      if (userAccess) {
        setUserAccessNav(true);
      } else {
        setUserAccessNav(false);
        setUserIcon_Clicked(false);
      }
    }
  }, [isloadingAccess]);

  // useEffect(() => {
  //   const userToken = TokenRetrive();
  //   if (userToken) {
  //     const fetchAccess = async () => {
  //       const request = await HandleUserToken(userToken);
  //       if (request) {
  //         setUserAccess(true);
  //       } else {
  //         setUserAccess(false);
  //         setUserIcon_Clicked(false);
  //       }
  //     };
  //     fetchAccess();
  //   }
  // }, [path]);

  const handleLogout = async () => {
    const result = await Logout();
    if (result) {
      redirect("/login");
      setUserAccessNav(false);
      setUserIcon_Clicked(false);
    }
  };
  return (
    <nav className="flex item-center justify-between">
      <div className="flex items-center">
        <img
          src={Images.Ezone}
          alt="Ezone_Logo"
          className="lg:h-[25px] h-[20px] object-contain"
        />
      </div>
      <ul className="lg:flex hidden list-none gap-[28px] items-center text-base">
        {userAccess
          ? data.navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`text-black ${index > 3 ? "hidden" : ""}`}
              >
                <Link
                  to={link.dir}
                  className={`link font-poppins ${
                    link.dir !== path.pathname ? "" : "active"
                  } `}
                >
                  {link.title}
                </Link>
              </li>
            ))
          : data.navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`text-black ${index === 3 ? "hidden" : ""}`}
              >
                <Link
                  to={link.dir}
                  className={`link font-poppins ${
                    link.dir !== path.pathname ? "" : "active"
                  } `}
                >
                  {link.title}
                </Link>
              </li>
            ))}
      </ul>
      <div className="lg:flex hidden items-center justify-center gap-5">
        <div className="bg-smoke px-3 py-1 rounded-[5px] flex items-center gap-2">
          <input
            type="text"
            className="bg-transparent py-1 px-2 box-border text-xs border-0 outline-none text-black placeholder:text-gray-400 font-poppins"
            placeholder="What are you looking for?"
          />
          <button className="">
            <img
              src={Images.Search}
              alt="Search icon"
              className="btn navIcon"
            />
          </button>
        </div>
        <div>
          <ul className="list-none flex gap-2 items-center">
            <li>
              <Link to={"wishlist"}>
                <img src={Images.WishList} alt="wishlist" className="navIcon" />
              </Link>
            </li>
            <li>
              <Link to={"wishlist"}>
                <img src={Images.Cart} alt="wishlist" className="navIcon" />
              </Link>
            </li>
            {userAccess && (
              <li
                className={`btn`}
                onClick={() => {
                  setUserIcon_Clicked((prev) => !prev);
                }}
              >
                <img
                  src={userIcon_Clicked ? Images.User_Clicked : Images.UserIcon}
                  alt="userIcon"
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={`lg:hidden flex gap-7 items-center`}>
        <ul className="list-none flex gap-2 items-center">
          <li>
            <Link to={"wishlist"}>
              <img src={Images.WishList} alt="wishlist" className="navIcon" />
            </Link>
          </li>
          <li>
            <Link to={"wishlist"}>
              <img src={Images.Cart} alt="wishlist" className="navIcon" />
            </Link>
          </li>
          {userAccessNav && (
            <li
              className={`btn mr-[2px]`}
              onClick={() => {
                setUserIcon_Clicked((prev) => !prev);
              }}
            >
              <img
                src={userIcon_Clicked ? Images.User_Clicked : Images.UserIcon}
                alt="userIcon"
              />
            </li>
          )}
        </ul>

        <div
          className={` flex items-center cursor-pointer w-[30px]`}
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <img
            src={menuState ? Images.CloseMenu : Images.Menu}
            alt="menu"
            className="h-[32px]"
          />
        </div>
      </div>
      {menuState && (
        <div className="fixed menuActive left-0 top-[63px] bg-[#7d8184] text-white w-full h-full lg:hidden block z-3">
          <div className="flex justify-center py-12">
            <div className="bg-smoke px-3 py-1 rounded-[20px] flex items-center gap-3 sm:w-[60%] sm:max-w-[390px] w-[300px] justify-center">
              <input
                type="text"
                className="bg-transparent py-3 px-2 box-border w-[80%] text-normal border-0 outline-none text-black placeholder:text-gray-400 font-poppins"
                placeholder="What are you looking for?"
              />
              <button
                className=""
                onClick={() => {
                  setMenuState((prev) => !prev);
                }}
              >
                <img
                  src={Images.Search}
                  alt="Search icon"
                  className="btn navIcon"
                />
              </button>
            </div>
          </div>
          <ul className="flex flex-col gap-[30px] items-center justify-center h-[50%]">
            {data.NavLinksPhone.map((link, index) => (
              <li
                key={link.id}
                className={`text-[18px] text-white font-poppins ${
                  userAccess && index > 2 ? "hidden" : ""
                }`}
              >
                <Link
                  to={link.dir}
                  onClick={() => {
                    setMenuState((prev) => !prev);
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {userIcon_Clicked && <UserNavBar logout={handleLogout} />}
    </nav>
  );
};

export default NavBar;
