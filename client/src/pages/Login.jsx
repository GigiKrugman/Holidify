//import React from 'react'
import { Link } from "react-router-dom";
//import Register from "./Register";

export default function Login() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max w-2l mx-auto border">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary"> Login</button>
          <div className="text-center py-2 text-gray-500">
            Do not have an account yet?
            <Link to={"/register"} className="underline text-black">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
