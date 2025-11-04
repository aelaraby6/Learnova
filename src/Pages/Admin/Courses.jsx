import React, { useState, useEffect } from "react";
import { BookOpen, Plus, Trash2, X } from "lucide-react";
import { get, postFormData, del } from "../../utils/api";

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    instructor_id: "",
    category_id: "",
    title: "",
    price: "",
    description: "",
    img: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  // Get token from localStorage
  const getToken = () => {
    return localStorage.getItem("token") || localStorage.getItem("authToken");
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = getToken();

      // Fetch courses
      const coursesResponse = await get("admin/courses", token);
      if (coursesResponse.status && coursesResponse.courses) {
        setCourses(coursesResponse.courses);
      } else if (Array.isArray(coursesResponse)) {
        setCourses(coursesResponse);
      } else if (coursesResponse.data) {
        setCourses(coursesResponse.data);
      }

      // Fetch instructors
      const instructorsResponse = await get("instructors", token);
      if (instructorsResponse.status && instructorsResponse.instructors) {
        setInstructors(instructorsResponse.instructors);
      } else if (Array.isArray(instructorsResponse)) {
        setInstructors(instructorsResponse);
      } else if (instructorsResponse.data) {
        setInstructors(instructorsResponse.data);
      }

      // Fetch categories
      const categoriesResponse = await get("categories", token);
      if (categoriesResponse.status && categoriesResponse.categories) {
        setCategories(categoriesResponse.categories);
      } else if (Array.isArray(categoriesResponse)) {
        setCategories(categoriesResponse);
      } else if (categoriesResponse.data) {
        setCategories(categoriesResponse.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setFormData({
      instructor_id: "",
      category_id: "",
      title: "",
      price: "",
      description: "",
      img: null,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      instructor_id: "",
      category_id: "",
      title: "",
      price: "",
      description: "",
      img: null,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, img: file });
    }
  };

  const handleSubmit = async () => {
    if (
      !formData.instructor_id ||
      !formData.category_id ||
      !formData.title ||
      !formData.price ||
      !formData.description ||
      !formData.img
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("instructor_id", formData.instructor_id);
      formDataToSend.append("category_id", formData.category_id);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("img", formData.img);

      let token = getToken();

      const response = await postFormData(
        "admin/courses",
        formDataToSend,
        token
      );

      if (response.status || response.success) {
        // Refresh courses list
        await fetchData();
        handleCloseModal();
      } else {
        setError("Failed to create course");
      }
    } catch (err) {
      console.error("Error creating course:", err);
      setError(err.message || "Failed to create course");
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        let token = getToken();
        const response = await del(`admin/courses/${courseId}`, token);

        if (response.status || response.success) {
          // Refresh courses list
          await fetchData();
        } else {
          setError("Failed to delete course");
        }
      } catch (err) {
        console.error("Error deleting course:", err);
        setError(err.message || "Failed to delete course");
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-gray-600">Loading courses...</div>
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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-xl"
                style={{ backgroundColor: "#0f437f" }}
              >
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Courses</h2>
                <p className="text-sm text-gray-600">
                  {courses.length} total courses
                </p>
              </div>
            </div>
            <button
              onClick={handleOpenModal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90 shadow-md"
              style={{ backgroundColor: "#0f437f" }}
            >
              <Plus size={20} />
              Add Course
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: "#e1edfb" }}>
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  ID
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  TITLE
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  DESCRIPTION
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  PRICE
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  INSTRUCTOR
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  CATEGORY
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="py-8 px-6 text-center text-gray-500"
                  >
                    No courses found
                  </td>
                </tr>
              ) : (
                courses.map((course, index) => (
                  <tr
                    key={course.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index === courses.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-4 px-6 text-gray-600">{course.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        {course.img ? (
                          <img
                            src={course.img}
                            alt={course.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
                            style={{ backgroundColor: "#064ea4" }}
                          >
                            {course.title
                              ? course.title[0].toUpperCase()
                              : "N/A"}
                          </div>
                        )}
                        <span className="font-medium text-gray-900">
                          {course.title || "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-700 line-clamp-2">
                        {course.description || "N/A"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-green-600">
                        ${course.price || "0.00"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-700">
                        {course.instructor?.name || "N/A"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {course.category?.name || "N/A"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDelete(course.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
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

      {/* Add Course Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div
              className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10"
              style={{ backgroundColor: "#e1edfb" }}
            >
              <h3 className="text-xl font-bold text-gray-900">
                Add New Course
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Instructor <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.instructor_id}
                  onChange={(e) =>
                    setFormData({ ...formData, instructor_id: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Instructor</option>
                  {instructors.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category_id}
                  onChange={(e) =>
                    setFormData({ ...formData, category_id: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter course title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter price"
                  step="0.01"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Enter course description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {formData.img && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.img.name}
                  </p>
                )}
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90 shadow-md"
                  style={{ backgroundColor: "#0f437f" }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesSection;
