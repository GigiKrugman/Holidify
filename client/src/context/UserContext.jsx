import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem("user")) || null;
  const localToken = localStorage.getItem("token") || null;
  const localCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [user, setUser] = useState(localUser);
  const [token, setToken] = useState(localToken);
  const [cart, setCart] = useState(localCart);

  // function removeFromCart(bookingId) {
  //   setCart((prevCart) =>
  //     prevCart.filter((booking) => booking.bookingId !== bookingId)
  //   );
  // }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  }

  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  const setUserAndStore = (userData) => {
    console.log("setUserAndStore called with:", userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const setTokenAndStore = (tokenData) => {
    localStorage.setItem("token", tokenData);
    setToken(tokenData);
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUserAndStore,
        token,
        setToken: setTokenAndStore,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
