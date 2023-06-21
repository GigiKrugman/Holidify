//import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/user/register", {
        name,
        email,
        password,
      });
      alert("Registration Succesful!");
    } catch (error) {
      alert("Registration Not Succesful...try later!");
    }
  }

  return (
    <div>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-32">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max w-2l mx-auto border" onSubmit={registerUser}>
            <input
              type="text"
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
              onChange={(e) => setPassword(e.target.value)}
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
