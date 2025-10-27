import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName") || "User";

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function toggleProfile() {
    setIsProfileOpen(!isProfileOpen);
  }

  function handleSignup() {
    navigate("/signup");
    setIsMenuOpen(false);
  }

  function handleLogin() {
    navigate("/login");
    setIsMenuOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("authToken");
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    navigate("/");
  }

  function handleProfile() {
    navigate("/profile");
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b-2 border-gray-100">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            LearnNova
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/home"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/courses"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
          >
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/teachers"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
          >
            Teachers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-xl text-gray-700 hover:text-blue-600 transition-all duration-300 relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>

          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <i
                  className={`fa-solid fa-chevron-down text-gray-600 text-sm transition-transform duration-300 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-800">
                      {userName}
                    </p>
                    <p className="text-xs text-gray-500">Welcome back!</p>
                  </div>
                  <button
                    onClick={handleProfile}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
                  >
                    <i className="fa-solid fa-user"></i>
                    My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center gap-2"
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={handleSignup}
                className="border-2 border-blue-600 text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Sign Up
              </button>
              <button
                onClick={handleLogin}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-5 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-all duration-300"
          onClick={toggleMenu}
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <nav className="flex flex-col p-4">
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
            >
              Courses
            </Link>
            <Link
              to="/teachers"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
            >
              Teachers
            </Link>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <button className="w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 flex items-center justify-between">
                <span>Cart</span>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>

              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleProfile}
                    className="w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 flex items-center gap-2 mt-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {userName.charAt(0).toUpperCase()}
                    </div>
                    <span>{userName}'s Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 px-4 mt-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignup}
                    className="w-full py-3 px-4 mt-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={handleLogin}
                    className="w-full py-3 px-4 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
