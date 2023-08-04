import { Link } from "react-router-dom";

export default function ProductsWidget() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 sm:mt-32 lg:mt-72 p-4 sm:p-10">
      <div className="flex items-center justify-center">
        <Link
          to="/experiences"
          className="flex flex-row items-center text-lg sm:text-xl md:text-2xl font-semibold text-sky-700 text-center"
        >
          <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Browse Experiences
          </h4>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NzZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          className="border rounded-3xl w-full h-auto"
          alt="Berlin"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1633503736361-7e6d207abbf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFjY29tb2RhdGlvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          className="border rounded-3xl w-full h-auto"
          alt="Accommodation"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link
          to="/accomodations"
          className="flex flex-row items-center text-lg sm:text-xl md:text-2xl font-semibold text-sky-700 text-center"
        >
          <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Browse Accommodations
          </h4>
        </Link>
      </div>
    </div>
  );
}
