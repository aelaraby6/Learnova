import { useState } from "react";
import "../../../styles/global.css";
import { validateSignup } from "../../../validations/signupValidation";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateSignup(formData);
    setErrors(validationErrors);

    console.log(formData.email);
    console.log(validationErrors.email);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Validation failed", validationErrors);
    }
  }

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div id="user-info" className="w-full md:w-1/2 p-6 md:p-20 relative">
          <div className="absolute top-4 left-4">
            <a
              href="#"
              className="learnnova-logo text-2xl font-bold"
              style={{ color: "var(--Primary-1)" }}
            >
              LearnNova
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Create An Account
          </h1>

          <p className="text-base md:text-xl text-center text-gray-500 mb-6 leading-relaxed">
            Start your learning journey today
          </p>

          <form
            id="signup-form"
            className="max-w-md mx-auto bg-white p-8 shadow-md space-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                value={formData.name}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                value={formData.email}
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                value={formData.password}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium mb-1"
              >
                Confirm Password
              </label>
              <input
                value={formData.confirmPassword}
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              style={{ backgroundColor: "var(--Primary-1)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--Primary-2)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--Primary-1)")
              }
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <a
              href="#login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </a>
          </p>
        </div>

        <div
          id="sign-up-welcome-page"
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
            src="/assets/images/signup-img.jpg"
            alt="sign-up-image"
            className="w-[500px] h-[500px] object-cover rounded-lg shadow-2xl p-4"
          />
        </div>
      </div>
    </div>
  );
}
