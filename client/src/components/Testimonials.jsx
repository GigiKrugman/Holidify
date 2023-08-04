import { ReactComponent as NewYorkTime } from "../assets/Images/the-new-york-times.svg";
import { ReactComponent as Bbc } from "../assets/Images/bbc-2.svg";
import { ReactComponent as Wired } from "../assets/Images/wired.svg";
import { ReactComponent as Google } from "../assets/Images/google-travel.svg";
import { ReactComponent as Skyteam } from "../assets/Images/skyteam-1.svg";
import { ReactComponent as Emirates } from "../assets/Images/emirates-airlines.svg";

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      <h6 className="text-2xl md:text-3xl text-neutral-600 text-center mt-10 mb-5">
        Talk about us:
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <NewYorkTime className="h-[150px] md:h-[250px] w-[100px] md:w-[150px] fill-inherit" />
        <Bbc className="h-[150px] md:h-[250px] w-[100px] md:w-[150px]" />
        <Wired className="h-[150px] md:h-[250px] w-[100px] md:w-[150px]" />
      </div>
      <h6 className="text-2xl md:text-3xl text-neutral-600 text-center mt-10 mb-5">
        Our Partners
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mt-4 ">
        <Google className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] mt-8 md:mt-8" />
        <Skyteam className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] mt-8 md:mt-8" />
        <Emirates className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] mt-8 md:mt-8" />
      </div>
    </div>
  );
}
