import { Route, Routes } from "react-router-dom";
import Login from "./pages/UserAuthentication/Login";
import IndexPage from "./pages/IndexPage";
import Register from "./pages/UserAuthentication/Register";
import Layout from "./Layout";
import axios from "axios";
import { UserProvider } from "./context/UserContext";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import TravelExperiences from "./pages/TravelExperiences/TravelExperiences";
import TravelExperiencesDetailed from "./pages/TravelExperiences/TravelExperiencesDetailed";
import Accommodations from "./pages/AccomodationPages/Accommodations";
import AccommodationsDetailed from "./pages/AccomodationPages/AccommodationsDetailed";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="experiences" element={<TravelExperiences />} />
          <Route
            path="/experiences/:id"
            element={<TravelExperiencesDetailed />}
          />
          <Route path="accommodations" element={<Accommodations />} />
          <Route
            path="/accommodations/:id"
            element={<AccommodationsDetailed />}
          />
          <Route path="home/*">
            <Route index element={<IndexPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
