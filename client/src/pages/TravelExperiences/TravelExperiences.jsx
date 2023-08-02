import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TravelExperienceCard from "./TravelExperienceCard";

export default function TravelExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <div>
      <div className="flex justify-center mb-10 p-3">
        <img
          className="mx-auto border rounded-xl"
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <h3 className="absolute text-4xl font-semibold text-white transform -translate-x-1/2 left-1/2 top-32">
          Travel Experiences
        </h3>
      </div>
      <div className="p-8">
        {experiences.map((experience) => (
          <Link
            to={`/experiences/${experience._id}`}
            key={experience._id}
            className="block mb-6"
          >
            <div className="card-trip overflow-hidden bg-white shadow-md rounded p-8">
              <img
                className="h-full w-full object-cover"
                src={experience.images[0]}
                alt={experience.name}
              />
              <div className="card-trip-infos p-4 flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold">{experience.name}</h2>
                  <p className="text-lg text-gray-500">{experience.location}</p>
                </div>
                <h2 className="card-trip-pricing text-lg font-bold">
                  ${experience.price.toFixed(2)}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
