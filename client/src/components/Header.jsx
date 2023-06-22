import { Link } from "react-router-dom";
import { ReactComponent as SiteLogo } from "../assets/Images/HOLIDIFY Logo.svg";

export default function Header() {
  return (
    <header className=" flex justify-between items-center h-15 py-3 px-8 bg-white-200">
      <SiteLogo className="h-30 w-auto " />
      <div className="flex gap-4 text-lg font-medium">
        <p>About us</p>
        <p>Experiences</p>

        <Link to={"/home/login"} className="flex items-center">
          Sign In
        </Link>
      </div>
    </header>
  );
}
