import { useState } from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import TravelExperiences from "../pages/TravelExperiences/TravelExperiences";
import Accommodations from "../pages/AccomodationPages/Accommodations";
import DropDownUser from "../dropdowns/DropDownUser";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between w-full p-4">
      <div className="flex items-center w-1/4">
        <Link to="/home">
          <h3 className="text-4xl text-sky-500">Holidify</h3>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center w-1/2">
        <Link
          to="/about"
          element={<About />}
          className="mx-4 text-xl font-semibold text-sky-700"
        >
          About us
        </Link>
        <Link
          to="/experiences"
          element={<TravelExperiences />}
          className="mx-4 text-xl font-semibold text-sky-700"
        >
          Experiences
        </Link>
        <Link
          to="/accommodations"
          element={<Accommodations />}
          className="mx-4 text-xl font-semibold text-sky-700"
        >
          Accommodations
        </Link>
      </div>
      <div className="flex items-center justify-end w-1/4">
        <div className="hidden md:flex">
          <DropDownUser className="mr-4" />
          {/* <DropDownCart className="mr-4" /> */}
        </div>
        <button
          className="md:hidden p-3 bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-2 w-6 mb-1 bg-black ${isOpen ? "rotate-45" : ""}`}
          ></div>
          <div
            className={`h-2 w-6 mb-1 bg-black ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`h-2 w-6 bg-black ${isOpen ? "-rotate-45" : ""}`}
          ></div>
        </button>
      </div>
      <div
        className={`flex flex-col w-full items-center ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <Link
          to="/about"
          element={<About />}
          className="mb-4 text-xl font-semibold text-sky-700"
        >
          About us
        </Link>
        <Link
          to="/experiences"
          element={<TravelExperiences />}
          className="mb-4 text-xl font-semibold text-sky-700"
        >
          Experiences
        </Link>
        <Link
          to="/accommodations"
          element={<Accommodations />}
          className="mb-4 text-xl font-semibold text-sky-700"
        >
          Accommodations
        </Link>
        <DropDownUser className="mb-4" />
        {/* <DropDownCart className="mb-4" /> */}
      </div>
    </div>
  );
}
