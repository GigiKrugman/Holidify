import { Link } from "react-router-dom";
import About from "../pages/About";
import TravelExperiences from "../pages/TravelExperiences/TravelExperiences";
import Accommodations from "../pages/AccomodationPages/Accommodations";
import DropDownUser from "../dropdowns/DropDownUser";

export default function Header() {
  return (
    <div className="flex flex-items justify-around items-stretch row  w-full h-30 p-4">
      <div>
        <Link to="/home">
          <h3 className="text-4xl  text-sky-500">Holidify</h3>
        </Link>
      </div>
      <div className="flex flex-items items-center">
        <Link
          to="/about"
          element={<About />}
          className="mr-4 text-xl font-semibold text-sky-700"
        >
          About us
        </Link>
        <Link
          to="/experiences"
          element={<TravelExperiences />}
          className="mr-4 text-xl font-semibold text-sky-700"
        >
          Experiences
        </Link>
        <Link
          to="accommodations"
          element={<Accommodations />}
          className="mr-4 text-xl font-semibold text-sky-700"
        >
          Accomodations
        </Link>
      </div>
      <DropDownUser className="mr-10" />
      {/* <DropDownCart /> */}
    </div>
  );
}
