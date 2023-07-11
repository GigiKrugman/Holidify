import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookingWidget from "../../components/BookingWidget";

export default function AccommodationsDetailed() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/accommodations/${id}`)
      .then((res) => {
        setAccommodation(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!accommodation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-9">
      <img
        src={accommodation.images[0]}
        alt={accommodation.name}
        className="h-auto w-auto border rounded-xl"
      />
      <h2 className="text-5xl font-bold mt-4">{accommodation.name}</h2>
      <p className="text-2xl font-semibold mt-4">{accommodation.description}</p>
      <p>Price per night: {accommodation.price} $ / night</p>
      <p className="mb-20">Location: {accommodation.location}</p>

      <BookingWidget accommodation={accommodation} />
    </div>
  );
}
