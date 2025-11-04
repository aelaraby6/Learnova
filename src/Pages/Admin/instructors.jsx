import React, { useState, useEffect } from "react";
import { GraduationCap, Plus, Edit, Trash2, X } from "lucide-react";
import { get, post, del } from "../../utils/api";

const InstructorsSection = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    linkedin: "",
    twitter: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("authToken");
      const response = await get("instructors", token);

      if (response.status && response.instructors) {
        setInstructors(response.instructors);
      }
    } catch (err) {
      console.error("Error fetching instructors:", err);
      setError(err.message || "Failed to fetch instructors");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (mode, instructor = null) => {
    setModalMode(mode);
    setSelectedInstructor(instructor);
    if (mode === "edit" && instructor) {
      setFormData({
        name: instructor.name,
        bio: instructor.bio || "",
        linkedin: instructor.linkedin || "",
        twitter: instructor.twitter || "",
        image: null,
      });
      setImagePreview(instructor.img || null);
    } else {
      setFormData({
        name: "",
        bio: "",
        linkedin: "",
        twitter: "",
        image: null,
      });
      setImagePreview(null);
    }
    setFormErrors({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstructor(null);
    setFormData({
      name: "",
      bio: "",
      linkedin: "",
      twitter: "",
      image: null,
    });
    setImagePreview(null);
    setFormErrors({});
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.bio.trim()) {
      errors.bio = "Bio is required";
    }

    if (!formData.linkedin.trim()) {
      errors.linkedin = "LinkedIn URL is required";
    }

    if (!formData.twitter.trim()) {
      errors.twitter = "Twitter URL is required";
    }

    if (modalMode === "add" && !formData.image) {
      errors.image = "Image is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);
      const token = localStorage.getItem("authToken");

      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("bio", formData.bio);
      submitData.append("linkedin", formData.linkedin);
      submitData.append("twitter", formData.twitter);

      if (formData.image) {
        submitData.append("image", formData.image);
      }

      let response;
      if (modalMode === "add") {
        response = await post("admin/instructors", submitData, token, true);
      } else {
        submitData.append("_method", "PUT");
        response = await post(
          `admin/instructors/${selectedInstructor.id}`,
          submitData,
          token,
          true
        );
      }

      if (response.status) {
        await fetchInstructors();
        handleCloseModal();
      } else {
        setFormErrors({ submit: response.message || "Operation failed" });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setFormErrors({ submit: err.message || "Failed to save instructor" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (instructor) => {
    if (
      !window.confirm(
        `Are you sure you want to delete ${instructor.name}? This action cannot be undone.`
      )
    ) {
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await del(`admin/instructors/${instructor.id}`, token);

      if (response.status) {
        await fetchInstructors();
      } else {
        alert(response.message || "Failed to delete instructor");
      }
    } catch (err) {
      console.error("Error deleting instructor:", err);
      alert(err.message || "Failed to delete instructor");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

//   const getInstructorStatus = (instructor) => {
//     return instructor.deleted_at ? "Inactive" : "Active";
//   };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-gray-600">Loading instructors...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div
          className="p-6 border-b border-gray-100"
          style={{
            background: "linear-gradient(135deg, #e1edfb 0%, #ffffff 100%)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-xl"
                style={{ backgroundColor: "#064ea4" }}
              >
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image
                </label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Instructors
                </h2>
                <p className="text-sm text-gray-600">
                  {instructors.length} total instructors
                </p>
              </div>
            </div>
            <button
              onClick={() => handleOpenModal("add")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#064ea4" }}
            >
              <Plus size={20} />
              Add Instructor
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: "#e1edfb" }}>
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  NAME
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  EMAIL
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  BIO
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  EXPERTISES
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  COURSES
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {instructors.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-8 px-6 text-center text-gray-500"
                  >
                    No instructors found
                  </td>
                </tr>
              ) : (
                instructors.map((instructor, index) => (
                  <tr
                    key={instructor.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index === instructors.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                          style={{ backgroundColor: "#0f437f" }}
                        >
                          {instructor.img ? (
                            <img
                              src={instructor.img}
                              alt={instructor.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            instructor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                          )}
                        </div>
                        <span className="font-medium text-gray-900">
                          {instructor.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {instructor.email}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {instructor.bio || "N/A"}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1">
                        {instructor.expertises && instructor.expertises.length > 0 ? (
                          instructor.expertises.slice(0, 3).map((exp, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: "#e1edfb",
                                color: "#064ea4",
                              }}
                            >
                              {exp}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500 text-sm">N/A</span>
                        )}
                        {instructor.expertises && instructor.expertises.length > 3 && (
                          <span className="text-gray-500 text-xs">
                            +{instructor.expertises.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {instructor.courses ? instructor.courses.length : 0} courses
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenModal("edit", instructor)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(instructor)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div
              className="p-6 border-b border-gray-100"
              style={{
                background: "linear-gradient(135deg, #e1edfb 0%, #ffffff 100%)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: "#064ea4" }}
                  >
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {modalMode === "add"
                      ? "Add Instructor"
                      : "Edit Instructor"}
                  </h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {formErrors.submit && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {formErrors.submit}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter instructor name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter email address"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password {modalMode === "add" ? "*" : "(Leave blank to keep current)"}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter password"
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.password}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter instructor bio"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expertises (comma separated)
                </label>
                <input
                  type="text"
                  name="expertises"
                  value={formData.expertises}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., HTML, CSS, JavaScript, ReactJS"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter URL
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://x.com/username"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#064ea4" }}
                >
                  {submitting
                    ? "Saving..."
                    : modalMode === "add"
                    ? "Add Instructor"
                    : "Update Instructor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default InstructorsSection;