import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../course";
import { get } from "../../utils/api";
import { useEffect } from "react";

export default function CourseCatalog() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await get("courses/allCourses");

      if (data && data.courses) {
        setCourses(data.courses);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.courses.map((course) => course.category.name)),
        ];
        setCategories(uniqueCategories);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch courses");
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category.name === selectedCategory);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8 md:py-8 mb-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Header with Title and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-0">
            All Courses
          </h1>

          {!loading && !error && (
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    selectedCategory === category
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-semibold mb-2">
                Error loading courses
              </p>
              <p className="text-red-500 text-sm mb-4">{error}</p>
              <button
                onClick={fetchCourses}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Course Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseClick(course.id)}
                  className="cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  <CourseCard
                    image={course.img}
                    duration={course.duration}
                    price={course.price}
                    title={course.title}
                    description={course.description}
                    instructorName={course.instructor?.name}
                    instructorImage={course.instructor?.img}
                  />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  No courses found in this category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
