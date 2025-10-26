import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../../styles/global.css";
import { validateSignup } from "../../../validations/signupValidation";
import { postFormData } from "../../../utils/api";
import LoadingOverlay from "../../../components/Loading";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    if (apiError) {
      setApiError("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setApiError("");

    // Validate form data
    const validationErrors = validateSignup(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name.trim());
        formDataToSend.append("email", formData.email.trim().toLowerCase());
        formDataToSend.append("phone", formData.phone.trim());
        formDataToSend.append("password", formData.password);
        formDataToSend.append(
          "password_confirmation",
          formData.confirmPassword
        );

        console.log("Sending form data:");
        for (let [key, value] of formDataToSend.entries()) {
          console.log(`${key}:`, value);
        }

        // Send to API
        const response = await postFormData("auth/register", formDataToSend);

        console.log("Registration successful:", response);

        navigate("/login", {
          state: { message: "Account created successfully! Please login." },
        });
      } catch (error) {
        console.error("Registration error:", error);

        let errorMessage = "Registration failed. Please try again.";

        if (error.response) {
          if (error.response.errors) {
            const errorMessages = Object.entries(error.response.errors)
              .map(
                ([, messages]) =>
                  `${Array.isArray(messages) ? messages.join(", ") : messages}`
              )
              .join("\n");
            errorMessage = errorMessages;
          } else if (error.response.message) {
            errorMessage = error.response.message;
          }
        } else if (error.message) {
          errorMessage = error.message;
        }

        setApiError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Validation failed", validationErrors);
    }
  }

  return (
    <div className="bg-gray-50">
      {isLoading && <LoadingOverlay />}

      <div className="flex flex-col md:flex-row min-h-screen">
        <div id="user-info" className="w-full md:w-1/2 p-6 md:p-20 relative">
          <div className="absolute top-4 left-4">
            <Link
              to="/"
              className="learnnova-logo text-2xl font-bold"
              style={{ color: "var(--Primary-1)" }}
            >
              LearnNova
            </Link>
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
            {apiError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md whitespace-pre-line">
                {apiError}
              </div>
            )}

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
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                disabled={isLoading}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                value={formData.phone}
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                disabled={isLoading}
                placeholder="01xxxxxxxxx"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
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
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-semibold py-2 px-4 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--Primary-1)" }}
              onMouseOver={(e) =>
                !isLoading &&
                (e.currentTarget.style.backgroundColor = "var(--Primary-2)")
              }
              onMouseOut={(e) =>
                !isLoading &&
                (e.currentTarget.style.backgroundColor = "var(--Primary-1)")
              }
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
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
