import { Link } from "react-router-dom";
import About from "../pages/About";
import TravelExperiences from "../pages/TravelExperiences";
import Accomodations from "../pages/AccomodationPages/Accommodations";

export default function Footer() {
  return (
    <div className="flex flex-items justify-between  items-center row bg-sky-600  w-full h-[150px] p-9 mt-[350px]">
      <div>
        <h3 className="text-4xl  text-white">Holidify</h3>
      </div>
      <div className="flex flex-items items-center">
        <Link
          to="/about"
          element={<About />}
          className="mr-4 text-lg text-white"
        >
          About us
        </Link>
        <Link
          to="/experiences"
          element={<TravelExperiences />}
          className="mr-4 text-lg text-white"
        >
          Experiences
        </Link>
        <Link
          to="accomodations"
          element={<Accomodations />}
          className="mr-4 text-lg text-white"
        >
          Accomodations
        </Link>
      </div>
    </div>
  );
}
