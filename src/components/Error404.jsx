const Error404 = () => {
  return (
    <div className="flex items-center w-screen h-screen bg-gray-300">
      <div className="container flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
        <div className="w-full mx-8 lg:w-1/2">
          <div className="mb-8 font-extrabold text-[#064EA4] text-7xl font-dark">
            404
          </div>
          <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
            Sorry we couldn't find the page you're looking for
          </p>
          <a 
            href="#" 
            className="inline px-5 py-3 text-sm font-medium leading-5 text-white transition-all shadow-2xl rounded-lg border-transparent border bg-[#064EA4] duration-400 focus:outline-none active:bg-red-600 hover:bg-red-700"
          >
            back to homepage
          </a>
        </div>
        <div className="w-full mx-5 my-12 lg:flex lg:justify-end lg:w-1/2">
          <img 
            src="/assets/server_down.svg" 
            className="" 
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default Error404;
