import { useState } from "react";
import { Search, SlidersHorizontal, Grid3x3, List, BookOpen, TrendingUp } from "lucide-react";
import CourseCard from "../course";

// Sample Course Data
const coursesData = [
  {
    id: 1,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    duration: "7hr 24m",
    price: "$99.00 USD",
    title: "Graphic Design 101",
    description:
      "Lorem ipsum dolor sit amet, consectetur doloril adipiscing elit. Felis donec massa aliquam id.",
    instructorName: "Kathie Corl",
    instructorImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    duration: "5hr 48m",
    price: "$99.00 USD",
    title: "Web Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur doloril adipiscing elit. Felis donec massa aliquam id.",
    instructorName: "Mike Warren",
    instructorImage: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    duration: "6hr 15m",
    price: "$79.00 USD",
    title: "Digital Marketing Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur doloril adipiscing elit. Felis donec massa aliquam id.",
    instructorName: "Sarah Johnson",
    instructorImage: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    duration: "8hr 30m",
    price: "$120.00 USD",
    title: "UI/UX Design Complete",
    description:
      "Lorem ipsum dolor sit amet, consectetur doloril adipiscing elit. Felis donec massa aliquam id.",
    instructorName: "Emma Davis",
    instructorImage: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 5,
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
    duration: "10hr 20m",
    price: "$149.00 USD",
    title: "Full Stack Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur doloril adipiscing elit. Felis donec massa aliquam id.",
    instructorName: "John Smith",
    instructorImage: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 6,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop",
    duration: "4hr 45m",
    price: "$89.00 USD",
    title: "Social Media Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur doloril adipiscing elit. Felis donec massa aliquam id.",
    instructorName: "Lisa Anderson",
    instructorImage: "https://i.pravatar.cc/150?img=20",
  },
];


export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = ['All', 'Development', 'Design', 'Marketing'];

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <>
      <style>{`
        .catalog-header-bg {
          background: linear-gradient(135deg, var(--Primary-1) 0%, var(--Primary-2) 100%);
        }
        .category-btn {
          background-color: white;
          color: var(--Primary-2);
        }
        .category-btn:hover {
          background-color: var(--Secondary-1);
        }
        .category-btn-active {
          background: linear-gradient(135deg, var(--Primary-1) 0%, var(--Primary-2) 100%);
          color: white;
        }
        .search-input:focus {
          border-color: var(--Primary-1);
          outline: none;
          box-shadow: 0 0 0 3px var(--Secondary-1);
        }
        .stats-card {
          background: var(--Secondary-3);
          border-left: 4px solid var(--Primary-1);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Header Section with Gradient Background */}
        <div className="catalog-header-bg text-white py-16 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Our Course Library
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Discover the perfect course to advance your skills and achieve your goals
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-12">

          {/* Filters and View Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 ${
                    selectedCategory === category
                      ? 'category-btn-active'
                      : 'category-btn'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white rounded-full p-1.5 shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-[var(--Primary-1)] to-[var(--Primary-2)] text-white' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-[var(--Primary-1)] to-[var(--Primary-2)] text-white' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold" style={{ color: 'var(--Primary-1)' }}>{filteredCourses.length}</span> {filteredCourses.length === 1 ? 'course' : 'courses'}
            </p>
          </div>

          {/* Course Grid */}
          <div className={`grid gap-8 mb-12 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredCourses.map((course) => (
              <div key={course.id} className="h-full">
                <CourseCard
                  image={course.image}
                  duration={course.duration}
                  price={course.price}
                  title={course.title}
                  description={course.description}
                  instructorName={course.instructorName}
                  instructorImage={course.instructorImage}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--Secondary-1)' }}>
                <Search className="w-12 h-12" style={{ color: 'var(--Primary-1)' }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500 text-lg mb-6">
                No courses available in {selectedCategory}
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ background: 'linear-gradient(135deg, var(--Primary-1) 0%, var(--Primary-2) 100%)' }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}