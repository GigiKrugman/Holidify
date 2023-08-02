import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Checkout() {
  const { cart, clearCart, removeFromCart } = useContext(UserContext);

  const handleBook = () => {
    // Logic for booking all items in the cart
    // Redirect to a confirmation page or show a confirmation message
  };

  return (
    <div className="p-9">
      <h1 className="text-4xl font-bold mb-4">Checkout</h1>
      <div className="divide-y divide-gray-200">
        {cart.map((item, index) => (
          <div key={index} className="py-4 flex items-center">
            <img src={item.image} alt="" className="w-24 h-24 object-cover" />
            <div className="ml-4">
              <h2 className="text-2xl font-medium">
                {item.accommodation?.name || item.experience?.name}
              </h2>
              <p className="text-lg font-medium mt-2">
                Guests: {item.numGuests}
              </p>
              <p className="text-2xl font-medium mt-2">
                Total Price: {item.totalPrice} $
              </p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="ml-auto px-2 py-2 text-white bg-red-500 hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearCart}
        className="px-4 py-3 text-lg text-center text-white bg-red-500 hover:bg-red-700 mt-6"
      >
        Clear Cart
      </button>
      <button
        onClick={handleBook}
        className="px-4 py-3 text-lg text-center text-white bg-green-500 hover:bg-green-700 mt-6 ml-4"
      >
        Book Now
      </button>
    </div>
  );
}
