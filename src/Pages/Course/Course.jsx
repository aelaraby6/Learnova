import { useState, useEffect } from 'react';
import { Star, Clock, Users, Globe, Award, PlayCircle, FileText, Download, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const fetchCourseDetails = async () => {
  // This should be replaced with: const data = await get(`courses/${courseId}`);
  // For now, returning mock data based on your API structure
  return {
    id: 1,
    title: "Laravel 12 Complete Course",
    description: "Routing-Middleware-FormRequest-Controller",
    price: "350.00",
    img: "https://res.cloudinary.com/dcwnirwfq/image/upload/v1761982249/courses/me85xa174p9t9n8izlar.jpg",
    category: {
      id: 1,
      name: "Backend",
      description: "All You need to know in backend",
    },
    instructor: {
      id: 1,
      name: "Jeffery",
      email: "Jeffery25@gmail.com",
      expertises: ["Laravel 12", "MYSQL", "PHP", "HTML", "CSS", "JavaScript"],
      bio: "Backend Engineer",
      img: "https://res.cloudinary.com/dcwnirwfq/image/upload/v1761980879/instructors/hqknoevk8wo8mxptwpmz.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-abdullah-1890b02ab/",
      twitter: "https://x.com/MA99851445",
    },
    rating: 4.7,
    studentsCount: 12450,
    totalHours: 42,
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
    courseContent: [
      {
        section: "Getting Started",
        lectures: 8,
        duration: "1h 30m",
        lessons: [
          { title: "Course Introduction", duration: "5:30", preview: true },
          { title: "Installing Laravel 12", duration: "12:45", preview: false },
          { title: "Project Structure Overview", duration: "15:20", preview: true },
          { title: "First Laravel Application", duration: "18:30", preview: false },
        ],
      },
      {
        section: "Routing in Laravel",
        lectures: 12,
        duration: "2h 45m",
        lessons: [
          { title: "Basic Routing", duration: "10:15", preview: false },
          { title: "Route Parameters", duration: "14:20", preview: false },
          { title: "Named Routes", duration: "8:45", preview: false },
          { title: "Route Groups", duration: "16:30", preview: false },
        ],
      },
      {
        section: "Middleware",
        lectures: 10,
        duration: "2h 15m",
        lessons: [
          { title: "Understanding Middleware", duration: "12:30", preview: false },
          { title: "Creating Custom Middleware", duration: "18:45", preview: false },
          { title: "Middleware Groups", duration: "15:20", preview: false },
        ],
      },
      {
        section: "Controllers",
        lectures: 15,
        duration: "3h 30m",
        lessons: [
          { title: "Controller Basics", duration: "10:15", preview: false },
          { title: "Resource Controllers", duration: "20:30", preview: false },
          { title: "Controller Middleware", duration: "12:45", preview: false },
        ],
      },
    ],
  };
};

export default function CourseDetailPage() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState([0]);

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    try {
      const data = await fetchCourseDetails(1);
      setCourse(data);
    } catch (error) {
      console.error("Error loading course:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2" style={{ borderColor: 'var(--Primary-1)' }}></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Course not found</p>
      </div>
    );
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen mt-[80px]" style={{ backgroundColor: 'var(--Secondary-1)' }}>
      {/* Hero Section */}
      <div className="text-white py-8" style={{ backgroundColor: 'var(--Primary-2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="text-sm mb-4" style={{ color: '#a8c5e8' }}>
                <span className="hover:underline cursor-pointer">Development</span>
                <span className="mx-2">›</span>
                <span className="hover:underline cursor-pointer">{course.category.name}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6" style={{ color: '#d4e3f3' }}>{course.category.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-bold">{course.rating}</span>
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
                  <span className="underline ml-1" style={{ color: '#a8c5e8' }}>
                    ({course.studentsCount} ratings)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{course.studentsCount.toLocaleString()} students</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 mt-6">
                <span style={{ color: '#d4e3f3' }}>Created by</span>
                <img
                  src={course.instructor.img}
                  alt={course.instructor.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hover:underline cursor-pointer" style={{ color: '#a8c5e8' }}>
                  {course.instructor.name}
                </span>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mt-6 text-sm" style={{ color: '#d4e3f3' }}>
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
                  <div className="text-3xl font-bold mb-4" style={{ color: 'var(--Primary-2)' }}>
                    ${course.price}
                  </div>
                  <button 
                    className="w-full text-white font-bold py-3 rounded mb-3 transition-colors hover:opacity-90"
                    style={{ backgroundColor: 'var(--Primary-1)' }}
                  >
                    Add to cart
                  </button>
                  <button 
                    className="w-full font-bold py-3 rounded border-2 transition-colors hover:bg-gray-50"
                    style={{ 
                      color: 'var(--Primary-2)',
                      borderColor: 'var(--Primary-2)'
                    }}
                  >
                    Buy now
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    30-Day Money-Back Guarantee
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-bold mb-3" style={{ color: 'var(--Primary-2)' }}>
                      This course includes:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" style={{ color: 'var(--Primary-1)' }} />
                        <span>{course.totalHours} hours on-demand video</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-4 h-4" style={{ color: 'var(--Primary-1)' }} />
                        <span>45 articles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Download className="w-4 h-4" style={{ color: 'var(--Primary-1)' }} />
                        <span>20 downloadable resources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4" style={{ color: 'var(--Primary-1)' }} />
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
                      ? "border-b-2"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={activeTab === "overview" ? { 
                    borderColor: 'var(--Primary-1)',
                    color: 'var(--Primary-2)'
                  } : {}}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === "curriculum"
                      ? "border-b-2"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={activeTab === "curriculum" ? { 
                    borderColor: 'var(--Primary-1)',
                    color: 'var(--Primary-2)'
                  } : {}}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab("instructor")}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === "instructor"
                      ? "border-b-2"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={activeTab === "instructor" ? { 
                    borderColor: 'var(--Primary-1)',
                    color: 'var(--Primary-2)'
                  } : {}}
                >
                  Instructor
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* What you'll learn */}
                <div className="bg-white rounded-lg p-6 border-2" style={{ borderColor: 'var(--Secondary-1)' }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--Primary-2)' }}>
                    What you'll learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--Primary-2)' }}>
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-gray-400">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--Primary-2)' }}>
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Master Laravel 12 from scratch with this comprehensive course. Learn everything from basic routing to advanced
                    concepts like middleware, form requests, and controllers. Build real-world applications and deploy them to production.
                    This course is perfect for developers who want to master modern PHP development with Laravel.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--Primary-2)' }}>
                  Course content
                </h2>
                <div className="space-y-2">
                  {course.courseContent.map((section, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden" style={{ borderColor: 'var(--Secondary-1)' }}>
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full flex items-center justify-between p-4 transition-colors"
                        style={{ 
                          backgroundColor: expandedSections.includes(index) ? 'var(--Secondary-1)' : '#f9fafb'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--Secondary-1)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = expandedSections.includes(index) ? 'var(--Secondary-1)' : '#f9fafb'}
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              expandedSections.includes(index) ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: 'var(--Primary-1)' }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="font-semibold" style={{ color: 'var(--Primary-2)' }}>
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
                              className="flex items-center justify-between p-4 border-t hover:bg-gray-50"
                              style={{ borderColor: 'var(--Secondary-1)' }}
                            >
                              <div className="flex items-center gap-3">
                                <PlayCircle className="w-4 h-4" style={{ color: 'var(--Primary-1)' }} />
                                <span className="text-gray-700">{lesson.title}</span>
                                {lesson.preview && (
                                  <span className="text-xs font-semibold" style={{ color: 'var(--Primary-1)' }}>
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-gray-600">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "instructor" && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--Primary-2)' }}>
                  Instructor
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img
                    src={course.instructor.img}
                    alt={course.instructor.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--Primary-2)' }}>
                      {course.instructor.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                    <div className="flex gap-4 mb-4">
                      <a
                        href={course.instructor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ color: 'var(--Primary-1)' }}
                      >
                        LinkedIn
                      </a>
                      <a
                        href={course.instructor.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ color: 'var(--Primary-1)' }}
                      >
                        Twitter
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: 'var(--Primary-2)' }}>
                        Expertise:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.instructor.expertises.map((exp, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ 
                              backgroundColor: 'var(--Secondary-1)',
                              color: 'var(--Primary-2)'
                            }}
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

          {/* Right Sidebar Placeholder (Mobile shows floating button instead) */}
          <div className="lg:hidden"></div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <div className="text-2xl font-bold" style={{ color: 'var(--Primary-2)' }}>
              ${course.price}
            </div>
          </div>
          <button 
            className="text-white font-bold py-3 px-8 rounded transition-colors hover:opacity-90"
            style={{ backgroundColor: 'var(--Primary-1)' }}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}