import { Link } from "react-router-dom";
import About from "../pages/About";
import TravelExperiences from "../pages/TravelExperiences/TravelExperiences";
import Accomodations from "../pages/AccomodationPages/Accommodations";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-sky-600 w-full p-5 md:p-9 mt-[350px]">
      <div className="text-center mb-4 md:mb-0">
        <h3 className="text-2xl md:text-4xl text-white">Holidify</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center">
        <Link
          to="/about"
          element={<About />}
          className="text-sm md:text-lg text-white"
        >
          About us
        </Link>
        <Link
          to="/experiences"
          element={<TravelExperiences />}
          className="text-sm md:text-lg text-white"
        >
          Experiences
        </Link>
        <Link
          to="accomodations"
          element={<Accomodations />}
          className="text-sm md:text-lg text-white"
        >
          Accomodations
        </Link>
      </div>
    </div>
  );
}
