import { Link } from "react-router-dom";

export default function AccommodationCard({ accommodation }) {
  return (
    <div>
      <Link to={`/accommodations/${accommodation._id}`}>
        <img
          src={accommodation.images[0]}
          alt={accommodation.name}
          className="border rounded-lg"
        />
      </Link>
      <div>
        <h2 className="text-2xl font-semibold ">{accommodation.name}</h2>
        <p className="text-lg">{accommodation.location}</p>
        <p className="text-lg">{accommodation.price} / night</p>
      </div>
    </div>
  );
}
