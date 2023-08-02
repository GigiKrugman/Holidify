import { useState, useEffect } from "react";
import axios from "axios";
import AccommodationCard from "./AccommodationCard";
import Error from "../../Shared/Error";

export default function Accommodations() {
  const [accommodations, setAccommodations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/accommodations"
        );
        setAccommodations(response.data);
      } catch (error) {
        console.error("Error fetching data from server", error);
        setError(error);
      }
    };

    fetchAccommodations();
  }, []);

  if (error) return <Error />;

  return (
    <div>
      <div className="flex justify-center mb-10 p-3">
        <img
          className="mx-auto border rounded-xl"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
        />
        <h3 className="absolute text-4xl font-semibold text-white transform -translate-x-1/2 left-1/2 top-32">
          Accomodations
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4 p-8 ">
        {accommodations.length > 0 &&
          accommodations.map((accommodation) => (
            <AccommodationCard
              key={accommodation._id}
              accommodation={accommodation}
            />
          ))}
      </div>
    </div>
  );
}
