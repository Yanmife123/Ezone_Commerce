import { Images, data } from "../constant";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const path = useLocation();
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
        {data.navLinks.map((link) => (
          <li key={link.id} className="text-black">
            <Link
              to={link.dir}
              className={`link font-poppins ${
                link.dir !== path.pathname ? "" : "active"
              }`}
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
            className="bg-transparent py-1 px-2 box-border text-xs border-0 outline-none text-black placeholder:text-grey font-poppins"
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
          </ul>
        </div>
      </div>
      <div
        className={`lg:hidden flex items-center cursor-pointer`}
        onClick={() => {
          setMenuState(!menuState);
        }}
      >
        <img
          src={menuState ? Images.CloseMenu : Images.Menu}
          alt=""
          className="h-[32px]"
        />
      </div>
      {menuState && (
        <div className="fixed menuActive left-0 top-[63px] bg-[#7d8184] text-white w-full h-full lg:hidden block z-3">
          <div className="flex justify-center py-12">
            <div className="bg-smoke px-3 py-1 rounded-[20px] flex items-center gap-3 sm:w-[60%] sm:max-w-[390px] w-[300px] justify-center">
              <input
                type="text"
                className="bg-transparent py-3 px-2 box-border w-[80%] text-xs border-0 outline-none text-black placeholder:text-grey font-poppins"
                placeholder="What are you looking for?"
              />
              <button
                className=""
                onClick={() => {
                  setMenuState(!menuState);
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
            {data.NavLinksPhone.map((link) => (
              <li key={link.id} className="text-[18px] text-white font-poppins">
                <Link
                  to={link.dir}
                  onClick={() => {
                    setMenuState(!menuState);
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
