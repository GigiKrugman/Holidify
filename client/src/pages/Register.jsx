//import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import { Navigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //const [registrationSuccessful, setRegistrationSuccesful] = useState(false);

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/user/register", {
        name,
        email,
        password,
      });
      navigate("/home/login");
      //setRegistrationSuccesful(true);
    } catch (error) {
      alert("Registration Not Succesful...try later!");
    }
  }

  // if (registrationSuccessful) {
  //   return <Navigate to="/home/login" />;
  // }

  return (
    <div>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-32">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max w-2l mx-auto " onSubmit={registerUser}>
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
            <button className="primary p-4 border rounded-lg text-white">
              {" "}
              Register
            </button>
            <div className="text-center py-2 text-gray-500 text-lg">
              Already Have an account?
              <Link to={"/home/login"} className="underline text-black text-lg">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
