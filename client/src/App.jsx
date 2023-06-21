//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
//import Header from "../src/components/Header";
import Login from "./pages/Login";
import IndexPage from "./pages/IndexPage";
import Register from "./pages/Register";
import Layout from "./layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
