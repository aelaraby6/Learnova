import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
      <div className="logo">
        <a
          href="#"
          className="learnnova-logo text-2xl font-bold text-[var(--Primary-1)]"
        >
          LearnNova
        </a>
      </div>
      <button
        id="menu-btn"
        className="block md:hidden text-2xl text-[var(--Primary-1)]"
        onClick={toggleMenu}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul
        id="menu"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-8 md:gap-8 items-center absolute md:static top-[70px] left-0 w-full bg-white md:w-auto md:bg-transparent py-8 md:py-0 px-8 md:px-0 shadow-md md:shadow-none z-50`}
      >
        <li>
          <a
            href="#"
            className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
          >
            Teachers
          </a>
        </li>
        <li>
          <button className="text-xl text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300 my-2 md:my-0 mx-2 md:mx-0 whitespace-nowrap">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </li>
        <li>
          <button className="signup-btn border border-[var(--Primary-2)] text-[var(--Primary-2)] font-semibold px-4 py-2 rounded hover:bg-[var(--Secondary-2)] hover:text-black transition-all duration-300 whitespace-nowrap">
            Sign Up
          </button>
        </li>
        <li>
          <button className="login-btn border border-[var(--Primary-2)] text-[var(--Primary-2)] font-semibold px-4 py-2 rounded hover:bg-[var(--Secondary-2)] hover:text-black transition-all duration-300 whitespace-nowrap">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
