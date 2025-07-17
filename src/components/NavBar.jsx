import { Images, data } from "../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Logout } from "../lib";
import UserNavBar from "./UserNavBar";
import { AppContext } from "../context/AppContext";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const [userAccessNav, setUserAccessNav] = useState(false);
  const [userIcon_Clicked, setUserIcon_Clicked] = useState(false);

  const path = useLocation();
  const redirect = useNavigate();
  const { userAccess, isloadingAccess, setUserAccess } = useContext(AppContext);
  const { cartData } = useContext(CartContext);

  useEffect(() => {
    if (!isloadingAccess) {
      setUserAccessNav(userAccess);
      if (!userAccess) setUserIcon_Clicked(false);
    }
  }, [isloadingAccess, userAccess]);

  useEffect(() => {
    document.body.style.overflow = menuState ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuState]);

  const handleLogout = async () => {
    const result = await Logout();
    if (result) {
      redirect("/login");
      setUserAccessNav(false);
      setUserIcon_Clicked(false);
      setUserAccess(false);
    }
  };

  const NavLinks = ({ isMobile = false }) => (
    <ul
      className={`${
        isMobile ? "space-y-1" : "lg:flex hidden gap-7 items-center"
      } list-none`}
    >
      {(isMobile ? data.NavLinksPhone : data.navLinks).map((link, index) => {
        const isHidden = userAccess
          ? isMobile
            ? index > 2
            : index > 3
          : !isMobile && index === 3;
        if (isHidden) return null;

        return (
          <li
            key={link.id}
            className={
              isMobile
                ? "transform hover:translate-x-2 transition-transform duration-300"
                : ""
            }
          >
            <Link
              to={link.dir}
              onClick={() => isMobile && setMenuState(false)}
              className={`${
                isMobile
                  ? "flex items-center gap-3 py-3 px-4 rounded-lg text-[#000000] hover:bg-[#d9d9d9] hover:text-[#db4444] transition-all duration-300"
                  : "text-[#000000] hover:text-[#db4444] transition-colors duration-300"
              } font-poppins ${
                link.dir === path.pathname
                  ? isMobile
                    ? "bg-[#d9d9d9] text-[#db4444] border-l-4 border-[#db4444]"
                    : "active"
                  : ""
              }`}
            >
              {isMobile && (
                <span className="w-2 h-2 bg-current rounded-full opacity-60"></span>
              )}
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  const UserActions = ({ isMobile = false }) =>
    userAccess && (
      <ul
        className={`${
          isMobile ? "grid grid-cols-2 gap-3" : "flex gap-3 items-center"
        } list-none`}
      >
        <li>
          <Link
            to="wishlist"
            onClick={() => isMobile && setMenuState(false)}
            className={`${
              isMobile
                ? "flex flex-col items-center gap-2 py-4 px-3 rounded-xl bg-[#ffffff] border border-[#d9d9d9] hover:border-[#db4444] hover:bg-[#f5f5f5] transition-all duration-200"
                : "hover:scale-110 transition-transform duration-200"
            }`}
          >
            <img
              src={Images.WishList}
              alt="wishlist"
              className={`navIcon ${isMobile ? "" : ""}`}
            />
            {isMobile && (
              <span className="text-[#000000] text-sm font-poppins">
                Wishlist
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="cart"
            onClick={() => isMobile && setMenuState(false)}
            className={`${
              isMobile
                ? "flex flex-col items-center gap-2 py-4 px-3 rounded-xl bg-[#ffffff] border border-[#d9d9d9] hover:border-[#db4444] hover:bg-[#f5f5f5] transition-all duration-200"
                : "hover:scale-110 transition-transform duration-200"
            } relative`}
          >
            <div className="relative">
              <img
                src={Images.Cart}
                alt="cart"
                className={`navIcon ${isMobile ? "" : ""}`}
              />
              {cartData.length > 0 && (
                <div className="absolute -top-2 -right-2 h-[18px] w-[18px] bg-[#db4444] text-[#ffffff] rounded-full text-xs leading-[18px] text-center animate-pulse">
                  {cartData.length}
                </div>
              )}
            </div>
            {isMobile && (
              <span className="text-[#000000] text-sm font-poppins">Cart</span>
            )}
          </Link>
        </li>
        {!isMobile && (
          <li
            className="btn hover:scale-110 transition-transform duration-200"
            onClick={() => setUserIcon_Clicked((prev) => !prev)}
          >
            <img
              src={userIcon_Clicked ? Images.User_Clicked : Images.UserIcon}
              alt="userIcon"
            />
          </li>
        )}
      </ul>
    );

  return (
    <>
      <nav className="flex items-center justify-between relative z-4 bg-[#ffffff]">
        <img
          src={Images.Ezone}
          alt="Ezone_Logo"
          className="lg:h-[25px] h-[20px] object-contain"
        />

        <NavLinks />

        <div className="lg:flex hidden items-center gap-5">
          <div className="bg-[#f5f5f5] px-3 py-1 rounded-[5px] flex items-center gap-2 hover:ring-2 hover:ring-[#db4444] hover:ring-opacity-50 transition-all duration-300">
            <input
              type="text"
              className="bg-transparent py-1 px-2 text-xs border-0 outline-none text-[#000000] placeholder:text-[#999999] font-poppins"
              placeholder="What are you looking for?"
            />
            <button className="hover:scale-110 transition-transform duration-200">
              <img src={Images.Search} alt="Search" className="btn navIcon" />
            </button>
          </div>
          <UserActions />
        </div>

        <div className="lg:hidden flex gap-4 items-center">
          <UserActions />
          <button
            className="w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors duration-200"
            onClick={() => setMenuState(!menuState)}
          >
            <div className="w-[20px] h-[20px] relative">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`absolute h-[2px] w-[20px] bg-[#000000] transition-all duration-300 ${
                    menuState
                      ? i === 0
                        ? "rotate-45 translate-y-0"
                        : i === 1
                        ? "opacity-0"
                        : "-rotate-45 translate-y-0"
                      : `translate-y-[${i * 6 - 6}px]`
                  }`}
                  style={{
                    top: "50%",
                    transform: menuState
                      ? i === 0
                        ? "rotate(45deg)"
                        : i === 2
                        ? "rotate(-45deg)"
                        : ""
                      : `translateY(${i * 6 - 6}px)`,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#000000]/60 lg:hidden z-5 transition-opacity duration-300 ${
          menuState ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[85%] max-w-[400px] bg-gradient-to-br from-[#fefaf1] via-[#f5f5f5] to-[#fefaf1] shadow-2xl transform transition-transform duration-300 ${
            menuState ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#d9d9d9]">
            <div className="flex items-center gap-3">
              <img
                src={Images.Ezone}
                alt="Logo"
                className="h-[24px] object-contain"
              />
            </div>
            <button
              onClick={() => setMenuState(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#d9d9d9] text-[#000000] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 border-b border-[#d9d9d9]">
            <div className="bg-[#ffffff] border border-[#d9d9d9] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#db4444] focus-within:border-[#db4444] transition-colors duration-200">
              <svg
                className="w-5 h-5 text-[#666666]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                className="bg-transparent flex-1 text-[#000000] placeholder:text-[#666666] font-poppins outline-none"
                placeholder="Search products..."
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6">
              <NavLinks isMobile={true} />
              {userAccess && (
                <div className="mt-8 pt-6 border-t border-[#d9d9d9]">
                  <h3 className="text-[#666666] font-poppins text-sm font-medium mb-4">
                    Quick Actions
                  </h3>
                  <UserActions isMobile={true} />
                </div>
              )}
            </div>
          </div>

          <div className="p-6 border-t border-[#d9d9d9]">
            <div className="text-center text-[#666666] text-sm font-poppins">
              © 2024 Ezone. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {userIcon_Clicked && <UserNavBar logout={handleLogout} />}
    </>
  );
};

export default NavBar;
