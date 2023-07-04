//import React from 'react'
import { ReactComponent as ParachuteSvg } from "../assets/Images/parachuteSVG.svg";
import { ReactComponent as TravelBag } from "../assets/Images/travelBag.svg";
import { ReactComponent as TravelGlobe } from "../assets/Images/travelGlob.svg";
import ProductsWidget from "../components/ProductsWidget";
import Testimonials from "../components/Testimonials";
//import Header from "../components/Header";
import HeroLandingPage from "../components/HeroLandingPage";
//import IndexPage from "./IndexPage";
export default function LandingPage() {
  return (
    <div>
      <HeroLandingPage />
      <div className="flex flex-col justify-center items-center mt-9">
        <h2 className="text-5xl font-bold mb-3 p-3">
          The best experience are waiting for you!
        </h2>
        <h4 className="text-2xl text-neutral-800 font-semibold">
          Why Choose us:
        </h4>
      </div>
      <div className="flex justify-around w-full h-150 p-5 mt-10">
        <div className="flex flex-col items-center">
          <TravelGlobe className="h-[100px] w-[200px]" />
          <h5 className="text-2xl text-stone-800   font-bold">
            Best experiences and accommodations around the world
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <TravelBag className="h-[100px] w-[200px]" />
          <h5 className="text-2xl text-stone-800 font-bold">
            Best value for money
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <ParachuteSvg className="h-[100px] w-[200px]" />
          <h5 className="text-2xl text-stone-800 font-bold">Support 24/7</h5>
        </div>
      </div>
      <ProductsWidget />
      <Testimonials />
    </div>
  );
}
