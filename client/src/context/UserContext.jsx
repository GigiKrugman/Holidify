import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem("user")) || null;
  const localToken = localStorage.getItem("token") || null;

  const [user, setUser] = useState(localUser);
  const [token, setToken] = useState(localToken);

  const setUserAndStore = (userData) => {
    console.log("setUserAndStore called with:", userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const setTokenAndStore = (tokenData) => {
    localStorage.setItem("token", tokenData);
    setToken(tokenData);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUserAndStore,
        token,
        setToken: setTokenAndStore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
