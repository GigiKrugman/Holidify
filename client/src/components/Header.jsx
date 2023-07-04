import { Link } from "react-router-dom";
import About from "../pages/About";
import TravelExperiences from "../pages/TravelExperiences";
import Accomodations from "../pages/Accomodations";
//import { ReactComponent as SiteLogo } from "../assets/Images/Holidify def logo.svg";

export default function Header() {
  return (
    <div className="flex flex-items justify-around items-stretch row  w-full h-30 p-4">
      <div>
        <h3 className="text-4xl  text-sky-500">Holidify</h3>
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
          to="accomodations"
          element={<Accomodations />}
          className="mr-4 text-xl font-semibold text-sky-700"
        >
          Accomodations
        </Link>
      </div>
      <div className="flex items-center ">
        <Link
          to="/home/login"
          className=" mr-4 text-2xl font-semibold border-4 rounded-2xl border-sky-600 text-sky-700 py-2 px-4"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
