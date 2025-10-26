import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSignup() {
    navigate("/signup");
    setIsMenuOpen(false);
  }

  function handleLogin() {
    navigate("/login");
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            className="learnnova-logo text-2xl font-bold text-[var(--Primary-1)]"
          >
            LearnNova
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="block md:hidden text-2xl text-[var(--Primary-1)]"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Nav Menu */}
        <ul
          id="menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-8 items-center 
          fixed md:static top-16 left-0 w-full bg-white md:w-auto md:bg-transparent 
          py-8 md:py-0 px-8 md:px-0 shadow-md md:shadow-none`}
        >
          <li>
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/teachers"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300"
            >
              Teachers
            </Link>
          </li>
          <li>
            <button className="text-xl text-[var(--Primary-2)] hover:text-[var(--Secondary-2)] transition-all duration-300 my-2 md:my-0 mx-2 md:mx-0 whitespace-nowrap">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </li>
          <li>
            <button
              onClick={handleSignup}
              className="signup-btn border border-[var(--Primary-2)] text-[var(--Primary-2)] font-semibold px-4 py-2 rounded hover:bg-[var(--Secondary-2)] hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              Sign Up
            </button>
          </li>
          <li>
            <button
              onClick={handleLogin}
              className="login-btn border border-[var(--Primary-2)] text-[var(--Primary-2)] font-semibold px-4 py-2 rounded hover:bg-[var(--Secondary-2)] hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
