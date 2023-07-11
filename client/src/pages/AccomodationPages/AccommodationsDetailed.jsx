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
      <div className="grid grid-cols-3 gap-4">
        {accommodation.images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Accommodation ${index + 1}`}
            className="object-cover h-full w-full  rounded-lg"
          />
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-7xl font-bold text-sky-700">
          {accommodation.name}
        </h2>
        <p className="text-4xl font-semibold mt-4 text-sky-500">
          {accommodation.description}
        </p>
        <p className="text-4xl font-semibold mt-4 mb-10 text-gray-500 ">
          Price per night: {accommodation.price} $ / night
        </p>
        <p className=" text-4xl font-semibold mb-20">
          Location: {accommodation.location}
        </p>
      </div>
      <div>
        <BookingWidget accommodation={accommodation} />
      </div>
    </div>
  );
}
