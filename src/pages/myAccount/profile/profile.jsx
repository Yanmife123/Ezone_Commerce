import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetchUser";

const Profile = () => {
  const { isPending, result, error } = useFetch("userDetails", {}, "GET");
  const { userAccess, isloadingAccess } = useContext(AppContext);
  const redirect = useNavigate();
  useEffect(() => {
    if (!isloadingAccess) {
      if (userAccess) {
        console.log("checking user access");
      } else {
        redirect("/login");
      } // Wait until the user access state is determined
    }
  }, [isloadingAccess]);
  return (
    <div>
      {!isPending && result ? (
        <form className="flex flex-col gap-6">
          <h3 className="capitalize text-crimson text-[20px] font-alt font-medium">
            edit your profile
          </h3>
          <div className="flex gap-[20px] md:flex-row flex-col  justify-center">
            <div className="flex-1">
              <h4 className="text-black text-base font-alt mb-2">First Name</h4>
              <input
                type="text"
                name="firstName"
                placeholder="Your Name"
                required
                defaultValue={result.first_name || ""}
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-black text-base font-alt mb-2">Last Name</h4>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                required
                defaultValue={result.last_name || ""}
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
          </div>
          <div className="flex gap-[20px] md:flex-row flex-col justify-center">
            <div className="flex-1">
              <h4 className="text-black text-base font-alt mb-2">Email</h4>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                defaultValue={result.email || ""}
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-black text-base font-alt mb-2">Address</h4>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                defaultValue={result.address || "32 alexsander street"}
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-black text-base font-alt ">Password Changes</h4>
            <div className="flex-1">
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                required
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
            <div className="flex-1">
              <input
                type="password"
                name="password"
                placeholder="New Password"
                required
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
            <div className="flex-1">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="flex-1 box-border bg-smoke rounded-[6px] px-6 py-3 black__shadow outline-none w-[100%]"
              />
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              className="font-alt bg-crimson text-white text-[15px] py-3 px-10 rounded-[4px]"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-crimson text-2xl font-alt">{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
