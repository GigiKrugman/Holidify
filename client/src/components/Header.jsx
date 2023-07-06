import { useState } from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import TravelExperiences from "../pages/TravelExperiences";
import Accomodations from "../pages/Accomodations";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
//import { ReactComponent as SiteLogo } from "../assets/Images/Holidify def logo.svg";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

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
          to="accomodations"
          element={<Accomodations />}
          className="mr-4 text-xl font-semibold text-sky-700"
        >
          Accomodations
        </Link>
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-12 text-sky-800 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 p-4 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                <h4 className="text-2xl p-3 font-medium text-sky-300">
                  Welcome, <span className="">{user.name}</span>
                </h4>
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-3 text-lg text-center text-white bg-red-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/home/login"
            className="text-2xl font-semibold border-4 rounded-2xl border-sky-600 text-sky-700 py-2 px-4"
          >
            Sign In
          </Link>
        )}
        <div className="ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-12 text-sky-700 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
