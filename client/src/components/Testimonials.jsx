import { ReactComponent as NewYorkTime } from "../assets/Images/the-new-york-times.svg";
import { ReactComponent as Bbc } from "../assets/Images/bbc-2.svg";
import { ReactComponent as Wired } from "../assets/Images/wired.svg";
import { ReactComponent as Google } from "../assets/Images/google-travel.svg";
import { ReactComponent as Skyteam } from "../assets/Images/skyteam-1.svg";
import { ReactComponent as Emirates } from "../assets/Images/emirates-airlines.svg";

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      <h6 className="text-3xl text-neutral-600 text-center mt-10 mb-5">
        Talk about us:
      </h6>
      <div className="flex flex-row justify-around">
        <NewYorkTime className="h-[250px] w-[150px] fill-inherit" />
        <Bbc className="h-[250px] w-[150px]" />
        <Wired className="h-[250px] w-[150px]" />
      </div>
      <h6 className="text-3xl text-neutral-600 text-center mt-10 mb-5">
        Our Parners
      </h6>
      <div className="flex flex-row justify-around mt-4 ">
        <Google className="h-[150px] w-[150px]" />
        <Skyteam className="h-[150px] w-[150px]" />
        <Emirates className="h-[150px] w-[150px]" />
      </div>
    </div>
  );
}
