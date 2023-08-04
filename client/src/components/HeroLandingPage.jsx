import { Link } from "react-router-dom";

export default function HeroLandingPage() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <img
        src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/59978225_868078573541894_2708410603105419264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=ZYmhsoBcTQwAX_4a033&_nc_ht=scontent-ber1-1.xx&oh=00_AfBrpgqrVpxgmrqMOI_kgTCgMEjoPIOjONe3F-OnjU9VtA&oe=64CF1E1E"
        alt="Hero"
        className="absolute object-cover w-full h-full opacity-75"
      />
      <div className="text-center text-white p-4 z-10 space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-9xl font-extrabold mb-4 drop-shadow-2xl">
          Discover the world with us
        </h1>
        <h3 className="text-xl sm:text-3xl md:text-5xl font-semibold mb-4 drop-shadow-2xl">
          Join today thousands of wanderlust and experience the best
        </h3>
        <Link
          to="/home"
          className="font-medium text-lg sm:text-xl md:text-3xl border rounded-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-sky-600 text-white hover:bg-sky-700 transition duration-300 mt-4 sm:mt-6 md:mt-28" // Adjusted the margin-top here
        >
          Start
        </Link>
      </div>
    </div>
  );
}
