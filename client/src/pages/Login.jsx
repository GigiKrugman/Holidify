//import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
//import Register from "./Register";
import axios from "axios";
import { UserContext } from "../userContext";
//import IndexPage from "./IndexPage";
export default function Login() {
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);

  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", { email, password });
      setUser(response.data);

      setRedirect(true); // Set the redirect state to true
    } catch (error) {
      console.log(error);
    }
  }

  if (redirect) {
    navigate("/home");
    return null;
  }

  //

  return redirect ? (
    navigate("/")
  ) : (
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
            <Link to={"/home/register"} className="underline text-black">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
