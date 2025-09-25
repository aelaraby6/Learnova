import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between h-screen bg-white">
      {/* Left Decorative Circle (Top Left) */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full z-20"
        style={{
          backgroundColor: "#fcdf69",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>

      {/* Right Decorative Circle (Bottom Right) */}
      <div
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full z-0"
        style={{
          backgroundColor: "#f99d76",
          transform: `translateY(-${scrollY * 0.2}px)`,
        }}
      ></div>

      {/* Left Section */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Grow your skills,
          <br /> define your future
        </h1>
        <p className="text-gray-500 mb-8">
          Presenting Academy, the tech school of the future. We teach you the
          right skills to be prepared for tomorrow.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-3xl font-semibold hover:bg-blue-800 hover:scale-95 transition-transform duration-300 ease-in-out">
            EXPLORE COURSES
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-3xl font-semibold hover:bg-gray-300 hover:scale-95 transition-transform duration-300 ease-in-out">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative flex items-center justify-center md:justify-end z-10">
        <img
          src="/assets/images/welcome.jpeg"
          alt="Person using laptop"
          className="relative w-3/4 md:w-1/2 mt-20 mr-70 rounded-2xl transform scale-105"
        />
      </div>
    </div>
  );
}
