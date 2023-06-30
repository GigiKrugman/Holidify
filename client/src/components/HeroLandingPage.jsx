import { Link } from "react-router-dom";

export default function HeroLandingPage() {
  return (
    <div className="w-full h-screen">
      <img
        src="/src/assets/Images/Berlino holidify.jpeg"
        className="object-cover w-full h-full opacity-75"
      />
      <div className=" p-4 relative bottom-[800px] flex  items-center justify-center flex-col  rounded-md text-white">
        <h1 className="text-7xl  font-bold mb-4">Discover the world with us</h1>
        <h3 className="text-4xl font-semibold mb-4">
          Join today thousands of wanderlust and experience the best
        </h3>
        <Link
          to="/home"
          className="font-medium text-3xl border border-solid rounded-lg px-4 py-3 bg-cyan-500 text-white "
        >
          Start
        </Link>
      </div>
    </div>
  );
}
