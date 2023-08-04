import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../../Shared/Error";
import BackArrow from "../../Shared/BackArrow";

export default function TravelExperiencesDetailed() {
  const { id } = useParams();
  const [experience, setExperience] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperienceDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/experiences/${id}`
        );
        setExperience(response.data);
      } catch (error) {
        console.error("Error fetching data from server", error);
        setError(error);
      }
    };

    fetchExperienceDetail();
  }, [id]);

  if (error) return <Error />;

  const handleBooking = () => {
    const bookingDetails = {
      bookingId: Math.random().toString(36).substr(2, 9),
      experience,
      totalPrice: experience.price,
    };

    // addToCart(bookingDetails); // This function is missing in your code snippet. Make sure to include it.
  };

  return (
    <div className="p-4 sm:p-8 lg:p-9">
      <BackArrow to="/experiences" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-sky-700">
          {experience.name}
        </h2>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-sky-500">
          {experience.description}
        </p>
        <p className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-blue-500">
          Location: {experience.location}
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-500">
          Duration: {experience.duration} days
        </p>
        <p className="text-3xl sm:text-4xl font-semibold mb-10 text-gray-500 ">
          Price: ${experience.price}
        </p>
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white p-3 rounded-md max-w-md w-full text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
