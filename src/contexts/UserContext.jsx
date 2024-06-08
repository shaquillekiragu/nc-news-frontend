import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export function useAuth() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [authUser, setAuthUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
