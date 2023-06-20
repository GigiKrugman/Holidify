//import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function registerUser(e) {
    e.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-32">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max w-2l mx-auto border" onSubmit={registerUser}>
            <input
              type="name"
              placeholder="max mustermann"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              onChange={(e) => setPassword(e.target.password)}
            />
            <button className="primary"> Register</button>
            <div className="text-center py-2 text-gray-500">
              Already Have an account?
              <Link to={"/login"} className="underline text-black">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
