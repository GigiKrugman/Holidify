import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Datepicker from "react-tailwindcss-datepicker";

export default function BookingWidget({ accommodation }) {
  const { addToCart } = useContext(UserContext);
  const [numGuests, setNumGuests] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleGuestsChange = (e) => {
    setNumGuests(e.target.value);
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleAddToCart = () => {
    const startDate = new Date(selectedDate.startDate);
    const endDate = new Date(selectedDate.endDate);
    const bookingId = Math.random().toString(36).substr(2, 9);

    const numNights = Math.ceil(
      Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = numGuests * numNights * accommodation.price;
    console.log(totalPrice);

    const bookingDetails = {
      bookingId,
      accommodation,
      startDate: startDate,
      endDate: endDate,
      numGuests,
      numNights,
      totalPrice,
    };

    console.log(bookingDetails);

    addToCart(bookingDetails);

    setItemAdded(true);

    setTimeout(() => {
      setItemAdded(false);
    }, 3000);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-20 my-5">
      <div className="text-sky-700 text-2xl font-semibold  ">Guests</div>
      <input
        type="number"
        value={numGuests}
        onChange={handleGuestsChange}
        className="mt-4 border border-sky-700 w-20  p-2 rounded-md"
        placeholder="Number of guests"
      />
      <h2 className="text-sky-700 text-2xl font-semibold mt-8">
        Check In - Check Out
      </h2>
      <div className="mt-4">
        <Datepicker
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-sky-700 w-16 p-2 rounded-md"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-sky-700 text-white text-center rounded-md py-4 px-10 mt-4 hover:bg-sky-600"
      >
        Add to Cart
      </button>
      {itemAdded && (
        <h4 className="text-green-500 text-xl text-center mt-4">
          Item added to cart
        </h4>
      )}
    </div>
  );
}
