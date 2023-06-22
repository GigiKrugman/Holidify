//import React from 'react'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReactComponent as HeroSvg } from "../assets/Images/HOLIDIFY canguro svg.svg";

//import IndexPage from "./IndexPage";
export default function LandingPage() {
  return (
    <div>
      <Header />

      <div className="">
        <h1>Travel with us</h1>
        <h3>Here a sub section subtitle</h3>
        <Link to="/home">Start Exploring</Link>
        <HeroSvg />
      </div>
      <div>Services</div>
      <div>Suggestions</div>
      <div>Testimonials</div>
      <div>Footer</div>
    </div>
  );
}
