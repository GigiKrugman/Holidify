import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

export default function TravelExperiencesDetailed() {
  const { id } = useParams();
  const [experience, setExperience] = useState({});
  const { addToCart } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/experiences/${id}`)
      .then((res) => {
        setExperience(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleBooking = () => {
    addToCart({ experience, bookingId: Date.now() }); // Adjust as needed
  };

  return (
    <div className="p-9">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {experience.images &&
          experience.images
            .slice(0, 3)
            .map((image, index) => (
              <img
                key={index}
                className="object-cover h-full w-full rounded-lg"
                src={image}
                alt={experience.name}
              />
            ))}
      </div>
      <div className="mt-6">
        <h2 className="text-7xl font-bold text-sky-700">{experience.name}</h2>
        <p className="text-4xl font-semibold mt-4 text-sky-500">
          {experience.description}
        </p>
        <p className="text-2xl font-semibold mt-4 mb-2 text-blue-500">
          Location: {experience.location}
        </p>
        <p className="text-xl font-semibold mb-2 text-gray-500">
          Duration: {experience.duration} days
        </p>
        <p className="text-4xl font-semibold mb-10 text-gray-500 ">
          Price: ${experience.price}
        </p>
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white p-3 rounded-md max-w-md w-full text-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
