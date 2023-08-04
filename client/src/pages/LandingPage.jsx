import { ReactComponent as ParachuteSvg } from "../assets/Images/parachuteSVG.svg";
import { ReactComponent as TravelBag } from "../assets/Images/travelBag.svg";
import { ReactComponent as TravelGlobe } from "../assets/Images/travelGlob.svg";
import ProductsWidget from "../components/ProductsWidget";
import Testimonials from "../components/Testimonials";
import HeroLandingPage from "../components/HeroLandingPage";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <HeroLandingPage />
      <div className="flex flex-col justify-center items-center mt-9 px-5">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 p-3 text-center">
          The best experiences are waiting for{" "}
          <span className="text-sky-600">you</span> !
        </h2>
        <h4 className="text-sm sm:text-xl md:text-2xl text-neutral-800 font-semibold">
          Why Choose us:
        </h4>
      </div>
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-around w-full p-5 mt-10 mx-auto items-center">
        <div className="flex flex-col items-center text-center">
          <TravelGlobe className="h-[50px] sm:h-[100px] w-[100px] sm:w-[200px]" />
          <h5 className="text-sm sm:text-xl md:text-2xl text-stone-800 font-bold">
            Best experiences and accommodations around the world
          </h5>
        </div>
        <div className="flex flex-col items-center text-center">
          <TravelBag className="h-[50px] sm:h-[100px] w-[100px] sm:w-[200px]" />
          <h5 className="text-sm sm:text-xl md:text-2xl text-stone-800 font-bold">
            Best value for money
          </h5>
        </div>
        <div className="flex flex-col items-center text-center">
          <ParachuteSvg className="h-[50px] sm:h-[100px] w-[100px] sm:w-[200px]" />
          <h5 className="text-sm sm:text-xl md:text-2xl text-stone-800 font-bold">
            Support 24/7
          </h5>
        </div>
      </div>
      <ProductsWidget />
      <Testimonials />
    </div>
  );
}
