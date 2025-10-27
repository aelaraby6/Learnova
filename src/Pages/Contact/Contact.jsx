import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoadingOverlay from "../../components/Loading";
import { postFormData } from "../../utils/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await postFormData("contacts", formDataToSend);

      console.log("Form submission successful:", response);

      setSuccessMessage(
        "Thank you for contacting us! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Form submission error:", error);

      let errorMessage = "Submission failed. Please try again.";

      if (error.response) {
        if (error.response.errors) {
          const backendErrors = {};
          Object.entries(error.response.errors).forEach(([field, messages]) => {
            backendErrors[field] = Array.isArray(messages)
              ? messages.join(", ")
              : messages;
          });
          setFieldErrors(backendErrors);
          errorMessage = "Please check the form for errors.";
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
  };

  return (
    <>
      <Header />
      {isLoading && <LoadingOverlay />}

      <div className="min-h-screen bg-white relative overflow-hidden mt-10">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "#e1edfb" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/2 -translate-x-1/3"
          style={{ backgroundColor: "#f99d76" }}
        ></div>
        <div
          className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full translate-x-1/3"
          style={{ backgroundColor: "#fcdf69" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1
                className="text-5xl font-bold mb-4"
                style={{ color: "#064ea4" }}
              >
                Get in touch!
              </h1>
              <p className="text-gray-500 mb-8 max-w-md">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>

              {successMessage && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div className="flex-1">
                    <h4 className="text-green-800 font-semibold mb-1">
                      Success!
                    </h4>
                    <p className="text-green-700 text-sm">{successMessage}</p>
                  </div>
                  <button
                    onClick={() => setSuccessMessage("")}
                    className="text-green-500 hover:text-green-700"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
              )}

              {apiError && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start space-x-3">
                  <AlertCircle
                    className="text-red-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div className="flex-1">
                    <h4 className="text-red-800 font-semibold mb-1">Error</h4>
                    <p className="text-red-700 text-sm whitespace-pre-line">
                      {apiError}
                    </p>
                  </div>
                  <button
                    onClick={() => setApiError("")}
                    className="text-red-500 hover:text-red-700"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0f437f" }}
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        fieldErrors.name ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      style={{ backgroundColor: "#f3f8fc" }}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={14} />
                        <span>{fieldErrors.name}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0f437f" }}
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@youremail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        fieldErrors.email ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      style={{ backgroundColor: "#f3f8fc" }}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={14} />
                        <span>{fieldErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0f437f" }}
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="475-5448-1543"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        fieldErrors.phone ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      style={{ backgroundColor: "#f3f8fc" }}
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={14} />
                        <span>{fieldErrors.phone}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0f437f" }}
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Ex. Courses"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        fieldErrors.subject
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      style={{ backgroundColor: "#f3f8fc" }}
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={14} />
                        <span>{fieldErrors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#0f437f" }}
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      fieldErrors.message ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    style={{ backgroundColor: "#f3f8fc" }}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={14} />
                      <span>{fieldErrors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-8 py-3 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#064ea4" }}
                >
                  {isLoading ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </div>

            <div className="space-y-8 lg:pt-32">
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#e1edfb" }}
                >
                  <Mail size={24} style={{ color: "#064ea4" }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "#0f437f" }}>
                  Email
                </h3>
                <p className="text-gray-600">sanfrancisco@educationic.com</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#e1edfb" }}
                >
                  <Phone size={24} style={{ color: "#064ea4" }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "#0f437f" }}>
                  Phone
                </h3>
                <p className="text-gray-600">475-5856-1237</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#e1edfb" }}
                >
                  <MapPin size={24} style={{ color: "#064ea4" }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "#0f437f" }}>
                  Address
                </h3>
                <p className="text-gray-600">
                  51 Osceola Ln, San Francisco,
                  <br />
                  California(CA), 94124
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
