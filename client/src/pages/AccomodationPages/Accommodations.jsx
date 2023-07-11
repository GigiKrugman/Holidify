import { useState, useEffect } from "react";
import axios from "axios";
import AccommodationCard from "./AccommodationCard";

export default function Accommodations() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/accommodations"
        );
        setAccommodations(response.data);
      } catch (error) {
        console.error("Error fetching data from server", error);
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-8">
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
