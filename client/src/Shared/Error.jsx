export default function Error() {
  return (
    <div className="p-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full text-blue-800 text-center"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <h1 className="text-6xl">
        {" "}
        Oooooops... Looks like there has been an error!
      </h1>
      <p className="text-4xl">
        Please check your internet connection or come back later!...
      </p>
    </div>
  );
}
