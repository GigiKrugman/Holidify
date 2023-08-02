import { Link } from "react-router-dom";

export default function BackArrow({ to }) {
  return (
    <Link to={to}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-sky-500 text-4xl mb-5 hover:scale-150 transition-transform duration-200 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </Link>
  );
}
