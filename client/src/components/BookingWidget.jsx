import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Datepicker from "react-tailwindcss-datepicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BookingWidget({ accommodation }) {
  const { addToCart } = useContext(UserContext);
  const [numGuests, setNumGuests] = useState(1);
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

    const numNights = Math.ceil(
      Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = numGuests * numNights * accommodation.price;
    console.log(totalPrice);

    const bookingDetails = {
      accommodation,
      startDate: startDate,
      endDate: endDate,
      numGuests,
      numNights,
      totalPrice,
    };

    console.log(bookingDetails);

    addToCart(bookingDetails);
  };

  return (
    <div>
      <TextField
        label="number of guests"
        type="number"
        value={numGuests}
        onChange={handleGuestsChange}
      />

      <Datepicker
        label="Check-in  Check out"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
}
