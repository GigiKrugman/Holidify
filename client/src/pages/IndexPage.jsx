//import React from 'react'
//import Header from "../components/Header";
// import { useContext } from "react";
// import { UserContext } from "../userContext";
import ProductsWidget from "../components/ProductsWidget";
import { Link } from "react-router-dom";
export default function IndexPage() {
  //const { user } = useContext(UserContext);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 auto-rows-max min-h-full  p-4 sm:p-8 md:p-16">
        <img
          className="border rounded-lg"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="border rounded-lg"
          src="https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MzZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="border rounded-lg"
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="border rounded-lg"
          src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />

        <img
          className="border rounded-lg"
          src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="border rounded-lg"
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <div className="relative h-screen sm:h-96 md:h-[700px]">
        <img
          className="object-cover w-full h-full absolute"
          src="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold text-white text-center">
            Best Travel Platform 2023
          </h1>
          <Link
            className="mt-4 text-2xl sm:text-3xl font-bold border-4 rounded-lg text-white p-4 sm:p-6"
            to="/about"
          >
            About us
          </Link>
        </div>
      </div>

      <ProductsWidget />
    </div>
  );
}
