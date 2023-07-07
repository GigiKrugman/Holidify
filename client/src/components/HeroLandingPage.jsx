import { Link } from "react-router-dom";

export default function HeroLandingPage() {
  return (
    <div className="w-full h-screen">
      <img
        src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/59978225_868078573541894_2708410603105419264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=ZYmhsoBcTQwAX_4a033&_nc_ht=scontent-ber1-1.xx&oh=00_AfBrpgqrVpxgmrqMOI_kgTCgMEjoPIOjONe3F-OnjU9VtA&oe=64CF1E1E"
        className="object-cover w-full h-full opacity-75"
      />
      <div className=" p-4 relative bottom-[800px] flex  items-center justify-center flex-col  rounded-md text-white">
        <h1 className="text-9xl  font-extrabold  mb-4 drop-shadow-2xl">
          Discover the world with us
        </h1>
        <h3 className="text-5xl font-semibold mb-4 drop-shadow-2xl">
          Join today thousands of wanderlust and experience the best
        </h3>
        <Link
          to="/home"
          className="font-medium text-3xl border  rounded-lg px-4 py-3 bg-sky-600 text-white "
        >
          Start
        </Link>
      </div>
    </div>
  );
}
