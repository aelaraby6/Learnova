import { useState } from "react";
import "../../../styles/global.css";
import { validateLogin } from "../../../validations/loginValidation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login successful", formData);
    } else {
      console.log("Validation failed", validationErrors);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div
        className="hidden md:flex w-1/2 justify-center items-center relative overflow-hidden"
        style={{ backgroundColor: "var(--Primary-2)" }}
      >
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
          style={{ backgroundColor: "var(--Secondary-2)" }}
        ></div>
        <div
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full"
          style={{ backgroundColor: "var(--Secondary-2)" }}
        ></div>

        <img
          src="/assets/images/Login-img.jpg"
          alt="login-image"
          className="w-[500px] h-[500px] object-cover rounded-lg shadow-2xl p-4"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-20 relative">
        {/* Logo */}
        <div className="absolute top-4 right-4">
          <a
            href="#"
            className="text-2xl font-bold"
            style={{ color: "var(--Primary-1)" }}
          >
            LearnNova
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-5 mb-4">
          Access your <span className="text-blue-600">learning journey</span>
        </h1>
        <p className="text-center text-gray-500 text-sm md:text-base mb-8">
          Your next big achievement starts here.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 mt-10 shadow-md space-y-8 rounded-lg min-h-[320px]"
          noValidate
        >
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-4 mt-1 rounded-md transition duration-300"
            style={{ backgroundColor: "var(--Primary-1)" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--Primary-2)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--Primary-1)")
            }
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-3">
          Don’t have an account?{" "}
          <a
            href="#signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
