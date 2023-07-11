import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function DropDownCart() {
  const { cart, removeFromCart, clearCart } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-12 text-sky-700 bg-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
      {cart.length > 0 && (
        <span className="absolute top-3 right-0 w-3 h-3 bg-red-500 rounded-full" />
      )}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 p-4 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <h2 className="text-2xl p-3 font-medium text-sky-300">Your Cart</h2>
          {cart.map((booking, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mt-2">
                {booking.accommodation.name}
              </h3>
              <p className="text-lg font-medium mt-2">
                Guests: {booking.numGuests}
              </p>
              <p className="text-2xl font-medium mt-2">
                Total Price: {booking.totalPrice} $
              </p>
              <button
                onClick={() => removeFromCart(booking.bookingId)}
                className="p-1 mb-5"
              >
                Remove Item
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="px-4 py-3 text-lg text-center text-white bg-red-500 hover:bg-red-700 "
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
