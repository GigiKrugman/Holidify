import { Link } from "react-router-dom";

export default function HeroLandingPage() {
  return (
    <div className="w-full h-screen">
      <img
        src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm91dGUlMjA2NnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        className="object-cover w-full h-full opacity-75"
      />
      <div className=" p-4 relative bottom-[800px] flex  items-center justify-center flex-col  rounded-md text-white">
        <h1 className="text-9xl  font-extrabold  mb-4">
          Discover the world with us
        </h1>
        <h3 className="text-5xl font-semibold mb-4">
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
