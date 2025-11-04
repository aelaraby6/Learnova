import React, { useState, useEffect } from "react";
import { Video, Plus, Trash2, X } from "lucide-react";
import { get, postFormData, del } from "../../utils/api";

const LessonsSection = () => {
  const [lessons, setLessons] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    video: null,
    course_id: "",
  });

  // Fetch all courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingCourses(true);
      try {
        const token =
          localStorage.getItem("token") || localStorage.getItem("authToken");
        const response = await get("admin/courses", token);

        console.log("Courses API response:", response);

        // Handle correct structure
        if (response?.courses && Array.isArray(response.courses)) {
          setCourses(response.courses);
        } else {
          console.warn("⚠️ Unexpected response structure:", response);
          setCourses([]);
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to fetch courses");
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle adding a new lesson
  const handleAddLesson = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title || !formData.video || !formData.course_id) {
      setError("Please fill in all fields and upload a video.");
      return;
    }

    try {
      const token =
        localStorage.getItem("token") || localStorage.getItem("authToken");

      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("video", formData.video);
      fd.append("course_id", formData.course_id);

      const response = await postFormData("admin/courses/lessons", fd, token);

      if (response?.lesson || response?.id) {
        setLessons([...lessons, response.lesson || response]);
        setFormData({ title: "", video: null, course_id: "" });
        setShowAddForm(false);
      } else {
        console.warn("Unexpected response:", response);
      }
    } catch (err) {
      console.error("Error adding lesson:", err);
      setError("Failed to add lesson");
    }
  };

  // Handle deleting a lesson using full endpoint
  const handleDeleteLesson = async (lessonId, courseId) => {
    try {
      const token =
        localStorage.getItem("token") || localStorage.getItem("authToken");
      await del(`admin/courses/${courseId}/lessons/${lessonId}`, token);
      setLessons(lessons.filter((lesson) => lesson.id !== lessonId));
    } catch (err) {
      console.error("Error deleting lesson:", err);
      setError("Failed to delete lesson");
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <Video className="w-5 h-5 text-blue-600" />
          Lessons
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition"
        >
          <Plus className="w-4 h-4" /> Add Lesson
        </button>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-500 font-medium">{error}</div>
      )}

      {/* Add Lesson Form */}
      {showAddForm && (
        <div className="relative mb-6 p-6 border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
          <button
            onClick={() => setShowAddForm(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Add New Lesson
          </h3>

          <form onSubmit={handleAddLesson} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Lesson Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter lesson title"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Upload Video
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) =>
                  setFormData({ ...formData, video: e.target.files[0] })
                }
                className="w-full border border-gray-300 rounded-lg p-2 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Course
              </label>
              <select
                value={formData.course_id}
                onChange={(e) =>
                  setFormData({ ...formData, course_id: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">
                  {loadingCourses ? "Loading courses..." : "Select Course"}
                </option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
            >
              Save Lesson
            </button>
          </form>
        </div>
      )}

      {/* Lessons List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.length === 0 ? (
          <p className="text-gray-500 italic">No lessons available.</p>
        ) : (
          lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex justify-between items-center shadow-sm"
            >
              <div>
                <h4 className="text-gray-800 font-medium">{lesson.title}</h4>
                <p className="text-gray-500 text-sm">
                  {lesson.course_title || "No course info"}
                </p>
              </div>
              <button
                onClick={() => handleDeleteLesson(lesson.id, lesson.course_id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LessonsSection;
