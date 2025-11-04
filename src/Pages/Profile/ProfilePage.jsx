import { useState, useEffect } from "react";
import Header from "../../components/Header";
import LoadingOverlay from "../../components/Loading";
import { get, put, postFormData } from "../../utils/api";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    newPassword: "",
  });

  const [activeTab, setActiveTab] = useState("Profile");
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [orders, setOrders] = useState([]); // ✅ new state for orders

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setApiError("Please login to view your profile");
        return;
      }

      setIsLoading(true);
      try {
        const response = await get("profile", token);
        const userData = response.user || response;

        setForm({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          password: "",
          newPassword: "",
        });

        if (userData.img || userData.photo) {
          setPreview(userData.img || userData.photo);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setApiError(error.response?.message || "Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ✅ New useEffect to fetch user orders
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const response = await get("user/orders/pending", token);
        setOrders(response.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (activeTab === "My Orders") fetchOrders();
  }, [activeTab]);

  const handleUpload = async () => {
    if (!selectedFile) {
      setApiError("Please select a photo first");
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      setApiError("Please login first");
      return;
    }

    setIsLoading(true);
    setApiError("");
    setSuccessMessage("");

    try {
      const formData = new FormData();
      formData.append("img", selectedFile);
      formData.append("_method", "PUT");

      const response = await postFormData("user/avatar", formData, token);
      setSuccessMessage("Photo uploaded successfully!", response);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Photo upload error:", error);
      setApiError(error.response?.message || "Failed to upload photo");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) errors.phone = "Phone is required";

    if (form.newPassword && !form.password) {
      errors.password = "Current password is required to set new password";
    }
    if (form.newPassword && form.newPassword.length < 6) {
      errors.newPassword = "New password must be at least 6 characters";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");

    if (!validateForm()) return;

    const token = localStorage.getItem("authToken");
    if (!token) {
      setApiError("Please login first");
      return;
    }

    setIsLoading(true);

    try {
      const updateData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
      };

      if (form.password && form.newPassword) {
        updateData.password = form.password;
        updateData.newPassword = form.newPassword;
      }

      const response = await put("profile", updateData, token);
      console.log("Profile update successful:", response);
      setSuccessMessage("Profile updated successfully!");
      setForm({ ...form, password: "", newPassword: "" });
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Profile update error:", error);
      let errorMessage = "Failed to update profile";

      if (error.response?.errors) {
        const backendErrors = {};
        Object.entries(error.response.errors).forEach(([field, messages]) => {
          backendErrors[field] = Array.isArray(messages)
            ? messages.join(", ")
            : messages;
        });
        setFieldErrors(backendErrors);
        errorMessage = "Please check the form for errors";
      } else if (error.response?.message) {
        errorMessage = error.response.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const navItems = [
    { name: "Profile" },
    { name: "Photo" },
    { name: "My Orders" },
  ];

  return (
    <>
      <Header />
      {isLoading && <LoadingOverlay />}

      <div className="flex min-h-screen bg-gray-50 mt-17">
        <aside className="w-64 bg-white border-r p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : form.name ? (
              form.name.charAt(0).toUpperCase()
            ) : (
              "U"
            )}
          </div>
          <h2 className="mt-4 font-semibold text-center">
            {form.name || "User Name"}
          </h2>

          <nav className="mt-6 w-full">
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className={`px-3 py-2 rounded cursor-pointer hover:bg-gray-100 ${
                    activeTab === item.name ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-10 flex justify-between items-start">
          <div className="w-full max-w-2xl">
            {successMessage && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start space-x-3">
                <CheckCircle
                  className="text-green-500 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div className="flex-1">
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
                  <p className="text-red-700 text-sm">{apiError}</p>
                </div>
                <button
                  onClick={() => setApiError("")}
                  className="text-red-500 hover:text-red-700"
                >
                  <XCircle size={20} />
                </button>
              </div>
            )}

            {activeTab === "Profile" && (
              <>
                <h1 className="text-2xl font-bold">Public profile</h1>
                <p className="text-gray-600 mb-6">
                  Add information about yourself
                </p>

                <div className="space-y-6 max-w-xl">
                  <div>
                    <h3 className="font-semibold mb-2">Basics:</h3>
                    <div className="flex flex-col gap-4 max-w-md">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={`border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300 ${
                            fieldErrors.name ? "border-red-500" : ""
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle size={14} />
                            <span>{fieldErrors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className={`border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300 ${
                            fieldErrors.email ? "border-red-500" : ""
                          }`}
                        />
                        {fieldErrors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle size={14} />
                            <span>{fieldErrors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          className={`border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300 ${
                            fieldErrors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle size={14} />
                            <span>{fieldErrors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="password"
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Current Password (leave empty to keep current)"
                          className={`border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300 ${
                            fieldErrors.password ? "border-red-500" : ""
                          }`}
                        />
                        {fieldErrors.password && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle size={14} />
                            <span>{fieldErrors.password}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="password"
                          name="newPassword"
                          value={form.newPassword}
                          onChange={handleChange}
                          placeholder="New Password (leave empty to keep current)"
                          className={`border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300 ${
                            fieldErrors.newPassword ? "border-red-500" : ""
                          }`}
                        />
                        {fieldErrors.newPassword && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle size={14} />
                            <span>{fieldErrors.newPassword}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-[var(--Primary-1)] text-white px-4 py-2 rounded hover:bg-[var(--Primary-2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Saving..." : "Save"}
                  </button>
                </div>
              </>
            )}

            {activeTab === "Photo" && (
              <div className="max-w-md">
                <h1 className="text-2xl font-bold mb-2">Edit Photo</h1>
                <p className="text-gray-600 mb-6">
                  Upload or change your profile photo
                </p>

                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 mb-3">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400">No photo selected</span>
                      )}
                    </div>

                    <div className="flex gap-3 mt-3">
                      <label className="cursor-pointer bg-white border-2 border-gray-300 rounded px-3 py-1.5 text-sm hover:bg-gray-50 transition">
                        Select Photo
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setSelectedFile(file);
                              setPreview(URL.createObjectURL(file));
                            }
                          }}
                        />
                      </label>

                      <button
                        className="bg-[var(--Primary-1)] text-white px-3 py-1.5 text-sm rounded hover:bg-[var(--Primary-2)] disabled:opacity-50"
                        onClick={handleUpload}
                        disabled={isLoading}
                      >
                        {isLoading ? "Uploading..." : "Upload"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "My Orders" && (
              <div>
                <h1 className="text-2xl font-bold mb-4">My Orders</h1>

                {orders.length === 0 ? (
                  <p className="text-gray-600">You have no pending orders.</p>
                ) : (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border rounded-lg p-4 shadow-sm bg-white"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h2 className="font-semibold">
                            Order #{order.id} - {order.status}
                          </h2>
                          <span className="text-gray-500 text-sm">
                            {new Date(order.created_at).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Total:{" "}
                          <span className="font-semibold">${order.total}</span>
                        </p>

                        <div className="space-y-3">
                          {order.cart_items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center space-x-4 border-t pt-3"
                            >
                              <img
                                src={item.course.img}
                                alt={item.course.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-medium">
                                  {item.course.title}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                  {item.course.description}
                                </p>
                                <p className="text-blue-600 font-semibold">
                                  ${item.course.price}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full flex justify-center mt-10">
            <div className="relative w-[25rem] h-[25rem] rounded-full bg-[var(--Primary-1)] flex items-center justify-center shadow-2xl drop-shadow-2xl">
              <img
                src="/assets/images/profile.png"
                alt="Decoration"
                className="w-72 h-72 rounded-full object-cover shadow-2xl"
              />
              <div className="absolute top-1 right-3 w-16 h-16 rounded-full bg-[var(--Secondary-2)] shadow-lg"></div>
              <div className="absolute bottom-1 left-3 w-16 h-16 rounded-full bg-[var(--Secondary-2)] shadow-lg"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
