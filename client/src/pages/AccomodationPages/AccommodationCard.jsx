import { Link } from "react-router-dom";

export default function AccommodationCard({ accommodation }) {
  return (
    <div className="rounded-lg border-sky-700 border-2 overflow-hidden">
      <Link to={`/accommodations/${accommodation._id}`}>
        <div className="relative pb-60">
          <img
            src={accommodation.images[0]}
            alt={accommodation.name}
            className="absolute h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col">
        <h2 className="text-4xl font-semibold">{accommodation.name}</h2>
        <div className="flex flex-row items-center mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-sky-700 text-3xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <p className="text-2xl ml-5">{accommodation.location}</p>
        </div>
        <div className="flex flex-row items-center mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-sky-700 text-3xl mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className="text-2xl">{accommodation.price} $ / night</p>
        </div>
      </div>
    </div>
  );
}
