import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  Globe,
  Award,
  PlayCircle,
  FileText,
  Download,
  CheckCircle,
  ShoppingCart,
  Check,
} from "lucide-react";
import { get } from "../../utils/api";
import { addToCart } from "../../utils/cartApi";
import { useCart } from "../../hooks/useCart";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Fetch course details from API
const fetchCourseDetails = async (courseId) => {
  const response = await get(`courses/showCourse/${courseId}`);

  if (!response.status) {
    throw new Error(response.message || "Failed to fetch course");
  }

  const apiCourse = response.course;

  // Transform API response to match component structure
  return {
    id: apiCourse.id,
    title: apiCourse.title,
    description: apiCourse.description,
    price: apiCourse.price,
    img: apiCourse.img,
    category: apiCourse.category,
    instructor: apiCourse.instructor,
    lessons: apiCourse.lessons,
    // Mock data for fields not in API
    rating: 4.7,
    studentsCount: 12450,
    totalHours: apiCourse.lessons?.length * 0.75 || 42, // Estimate based on lessons
    language: "English",
    lastUpdated: "2025-01",
    whatYouWillLearn: [
      "Master Laravel 12 fundamentals and advanced concepts",
      "Build real-world applications from scratch",
      "Understand routing, middleware, and controllers",
      "Work with Form Requests and validation",
      "Implement authentication and authorization",
      "Deploy Laravel applications to production",
    ],
    requirements: [
      "Basic knowledge of PHP programming",
      "Understanding of HTML and CSS",
      "Familiarity with databases (MySQL preferred)",
      "A computer with internet connection",
    ],
    courseContent:
      apiCourse.lessons?.length > 0
        ? groupLessonsIntoSections(apiCourse.lessons)
        : [],
  };
};

// Helper function to group lessons into sections
const groupLessonsIntoSections = (lessons) => {
  const sections = [];
  const lessonsPerSection = 4;

  for (let i = 0; i < lessons.length; i += lessonsPerSection) {
    const sectionLessons = lessons.slice(i, i + lessonsPerSection);
    sections.push({
      section: `Section ${Math.floor(i / lessonsPerSection) + 1}`,
      lectures: sectionLessons.length,
      duration: `${sectionLessons.length * 15}m`, // Estimate
      lessons: sectionLessons.map((lesson, idx) => ({
        title: lesson.title,
        duration: lesson.duration || `${10 + idx * 2}:00`,
        preview: idx === 0, // First lesson in each section is preview
      })),
    });
  }

  return sections;
};

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { refreshCart } = useCart();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState([0]);
  const [addingToCart, setAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const loadCourse = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCourseDetails(courseId);
      setCourse(data);
    } catch (error) {
      console.error("Error loading course:", error);
      setError(error.message || "Failed to load course");
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    if (courseId) {
      loadCourse();
      setAddedToCart(false); // Reset added state when course changes
    } else {
      setError("Course ID is missing");
      setLoading(false);
    }
  }, [courseId, loadCourse]);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleAddToCart = async () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please login to add courses to cart");
      navigate("/login");
      return;
    }

    try {
      setAddingToCart(true);
      await addToCart(courseId);

      // Refresh cart data
      refreshCart();

      // Set added to cart state
      setAddedToCart(true);

      // Reset the added state after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);

      // Show success message
      alert("Course added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);

      if (
        error.message.includes("already in cart") ||
        error.message.includes("duplicate")
      ) {
        alert("This course is already in your cart!");
        // Set as added since it's already in cart
        setAddedToCart(true);
        setTimeout(() => {
          setAddedToCart(false);
        }, 3000);
      } else if (error.message.includes("login")) {
        alert("Please login to add courses to cart");
        navigate("/login");
      } else {
        alert(error.message || "Failed to add course to cart");
      }
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <p className="text-red-500 text-lg mb-4">Error: {error}</p>
        <button
          onClick={loadCourse}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-gray-500">Course not found</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 mt-20">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2">
                {/* Breadcrumb */}
                <div className="text-sm mb-4 text-blue-200">
                  <span className="hover:underline cursor-pointer">
                    Development
                  </span>
                  <span className="mx-2">›</span>
                  <span className="hover:underline cursor-pointer">
                    {course.category.name}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-lg mb-6 text-blue-100">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 font-bold">
                      {course.rating}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="underline ml-1 text-blue-200">
                      ({course.studentsCount} ratings)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {course.studentsCount.toLocaleString()} students
                    </span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3 mt-6">
                  <span className="text-blue-100">Created by</span>
                  <img
                    src={course.instructor.img}
                    alt={course.instructor.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="hover:underline cursor-pointer text-blue-200">
                    {course.instructor.name}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-blue-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Last updated {course.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>{course.language}</span>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Course Card (Desktop) */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden sticky top-4">
                  <div className="relative">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                      <PlayCircle className="w-16 h-16 text-white" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="text-3xl font-bold mb-4 text-blue-900">
                      ${course.price}
                    </div>
                    <button
                      onClick={handleAddToCart}
                      disabled={addingToCart || addedToCart}
                      className={`w-full font-bold py-3 rounded mb-3 transition-colors flex items-center justify-center ${
                        addedToCart
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : addingToCart
                          ? "bg-purple-400 cursor-not-allowed text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                      }`}
                    >
                      {addingToCart ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Adding...
                        </>
                      ) : addedToCart ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                    <button className="w-full text-blue-900 font-bold py-3 rounded border-2 border-blue-900 transition-colors hover:bg-gray-50">
                      Buy now
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      30-Day Money-Back Guarantee
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="font-bold mb-3 text-blue-900">
                        This course includes:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <PlayCircle className="w-4 h-4 text-purple-600" />
                          <span>
                            {Math.round(course.totalHours)} hours on-demand
                            video
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-600" />
                          <span>{course.lessons?.length || 0} lessons</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Download className="w-4 h-4 text-purple-600" />
                          <span>Downloadable resources</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-purple-600" />
                          <span>Certificate of completion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-gray-300 mb-6">
                <div className="flex gap-8">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`pb-4 font-semibold transition-colors ${
                      activeTab === "overview"
                        ? "border-b-2 border-purple-600 text-blue-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("curriculum")}
                    className={`pb-4 font-semibold transition-colors ${
                      activeTab === "curriculum"
                        ? "border-b-2 border-purple-600 text-blue-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab("instructor")}
                    className={`pb-4 font-semibold transition-colors ${
                      activeTab === "instructor"
                        ? "border-b-2 border-purple-600 text-blue-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Instructor
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* What you'll learn */}
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-100">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">
                      What you'll learn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">
                      Requirements
                    </h2>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-gray-400">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">
                      Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {course.category.description}. This comprehensive course
                      covers {course.description} and more. Perfect for
                      developers who want to master modern PHP development with
                      Laravel.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-blue-900">
                    Course content
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {course.lessons?.length || 0} lessons
                  </p>
                  {course.courseContent.length > 0 ? (
                    <div className="space-y-2">
                      {course.courseContent.map((section, index) => (
                        <div
                          key={index}
                          className="border rounded-lg overflow-hidden border-gray-200"
                        >
                          <button
                            onClick={() => toggleSection(index)}
                            className={`w-full flex items-center justify-between p-4 transition-colors ${
                              expandedSections.includes(index)
                                ? "bg-gray-50"
                                : "bg-white hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <svg
                                className={`w-4 h-4 transition-transform text-purple-600 ${
                                  expandedSections.includes(index)
                                    ? "rotate-90"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                              <span className="font-semibold text-blue-900">
                                {section.section}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              {section.lectures} lectures • {section.duration}
                            </span>
                          </button>
                          {expandedSections.includes(index) && (
                            <div className="bg-white">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="flex items-center justify-between p-4 border-t hover:bg-gray-50 border-gray-100"
                                >
                                  <div className="flex items-center gap-3">
                                    <PlayCircle className="w-4 h-4 text-purple-600" />
                                    <span className="text-gray-700">
                                      {lesson.title}
                                    </span>
                                    {lesson.preview && (
                                      <span className="text-xs font-semibold text-purple-600">
                                        Preview
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-sm text-gray-600">
                                    {lesson.duration}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      No curriculum available yet.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "instructor" && (
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 text-blue-900">
                    Instructor
                  </h2>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <img
                      src={course.instructor.img}
                      alt={course.instructor.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-blue-900">
                        {course.instructor.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {course.instructor.bio}
                      </p>
                      <div className="flex gap-4 mb-4">
                        <a
                          href={course.instructor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline"
                        >
                          LinkedIn
                        </a>
                        <a
                          href={course.instructor.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline"
                        >
                          Twitter
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 text-blue-900">
                          Expertise:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {course.instructor.expertises.map((exp, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-blue-900"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Fixed Bottom Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="text-2xl font-bold text-blue-900">
              ${course.price}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={addingToCart || addedToCart}
              className={`font-bold py-3 px-8 rounded transition-colors flex items-center justify-center ${
                addedToCart
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : addingToCart
                  ? "bg-purple-400 cursor-not-allowed text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              {addingToCart ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Adding...
                </>
              ) : addedToCart ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
