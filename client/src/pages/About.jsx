export default function About() {
  return (
    <div>
      <div className="flex justify-center mb-10 p-3">
        <img
          className="mx-auto border rounded-xl"
          src="https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFib3V0JTIwdXMlMkJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
        />
        <h3 className="absolute text-4xl font-semibold text-white transform -translate-x-1/2 left-1/2 top-32">
          About us
        </h3>
      </div>
      <div className="">
        <h1 className="text-5xl text-neutral-900 font-extrabold text-center mb-10">
          Genuinly passionate about what we do:
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 p-10 ">
          <img
            className="border rounded-2xl "
            src="https://images.unsplash.com/photo-1517176642928-dfc2da661b3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <div className="flex flex-col items-center justify-center">
            <h6></h6>
            <p>Your subtext goes here</p>
          </div>
          <div className="flex flex-col items-center top-7 justify-center">
            <h6>Hard worker</h6>
            <p>Your subtext goes here</p>
          </div>
          <img
            className="border rounded-2xl "
            src="https://images.unsplash.com/photo-1614107151491-6876eecbff89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
}
