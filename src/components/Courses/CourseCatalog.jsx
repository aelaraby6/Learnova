import { useState } from "react";
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

  const categories = ['All', 'Development', 'Design', 'Marketing'];

  const filteredCourses = selectedCategory === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8 md:py-8 mb-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Header with Title and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-0">All Courses</h1>
          
          <div className="flex gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
          {filteredCourses.map((course) => (
            <div key={course.id} className="p-4">
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
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No courses found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}