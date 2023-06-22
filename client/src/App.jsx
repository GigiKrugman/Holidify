import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import IndexPage from "./pages/IndexPage";
import Register from "./pages/Register";
import Layout from "./layout";
import axios from "axios";
import { UserProvider } from "./userContext";
import LandingPage from "./pages/LandingPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home/*" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
