import { Link } from "react-router-dom";

export default function ProductsWidget() {
  return (
    <div className="grid grid-cols-2  gap-4 mt-11 p-10">
      <div className="flex items-center justify-center">
        <Link className="flex flex-row items-center text-2xl font-semibold text-sky-700">
          Browse Experience
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="../src/assets/Images/Berlino holidify.jpeg"
          className="border rounded-3xl"
          alt="Berlin"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src="../src/assets/Images/Berlino holidify.jpeg"
          className="border rounded-3xl"
          alt="Berlin"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link className="flex flex-row items-center text-2xl font-semibold text-sky-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>
          Browse Accomodations
        </Link>
      </div>
    </div>
  );
}
