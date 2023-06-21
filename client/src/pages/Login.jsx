//import React from 'react'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
//import Register from "./Register";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function loginUser(e) {
    e.preventDefault();
    try {
      await axios.post("/user/login", { email, password });
      alert("Login Succesful");
      setRedirect(true);
    } catch (e) {
      alert("User not existent!Please login first!");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max w-2l mx-auto border" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
