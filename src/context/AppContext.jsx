import { createContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HandleUserToken, TokenRetrive } from "../lib";

export const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const path = useLocation();
  const [userAccess, setUserAccess] = useState(null);
  const [isloadingAccess, setIsLoadingAccess] = useState(true);
  const userToken = TokenRetrive();
  useEffect(() => {
    if (userToken) {
      const fetchAccess = async () => {
        const request = await HandleUserToken(userToken);
        if (request) {
          setUserAccess(true);
          setIsLoadingAccess(false);
          console.log("User token found, access granted.");
        } else {
          setUserAccess(false);
          setIsLoadingAccess(false);
          console.log("User token found, but access denied.");
          s;
        }
      };
      fetchAccess();
    } else {
      setUserAccess(false);
      setIsLoadingAccess(false);
      console.log("No user token found, setting user access to false.");
    }
  }, [path]);
  return (
    <AppContext.Provider value={{ userAccess, isloadingAccess }}>
      {children}
    </AppContext.Provider>
  );
};
