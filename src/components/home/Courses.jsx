"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "../../components/Course";

export default function CoursesSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const courses = [
    {
      image: "/assets/images/signup-img.jpg",
      duration: "5hr 48m",
      price: "$99.00 USD",
      title: "Web Design & Development",
      description: "Learn how to build modern websites from scratch.",
      instructorName: "Mike Warren",
      instructorImage: "/assets/images/teacher-1.jpg",
    },
    {
      image: "/assets/images/signup-img.jpg",
      duration: "7hr 15m",
      price: "$149.00 USD",
      title: "React & Tailwind Masterclass",
      description: "Become a pro in React and Tailwind CSS.",
      instructorName: "Sarah Johnson",
      instructorImage: "/assets/images/teacher-2.jpg",
    },
    {
      image: "/assets/images/signup-img.jpg",
      duration: "3hr 20m",
      price: "$59.00 USD",
      title: "JavaScript Essentials",
      description: "Master the basics of modern JavaScript.",
      instructorName: "David Lee",
      instructorImage: "/assets/images/teacher-3.jpg",
    },
    {
      image: "/assets/images/signup-img.jpg",
      duration: "10hr 5m",
      price: "$199.00 USD",
      title: "Full-Stack Development Bootcamp",
      description: "Go from beginner to full-stack web developer.",
      instructorName: "Emily Carter",
      instructorImage: "/assets/images/teacher-4.jpg",
    },
    {
      image: "/assets/images/signup-img.jpg",
      duration: "4hr 40m",
      price: "$79.00 USD",
      title: "UI/UX Design Fundamentals",
      description: "Understand user-centered design and prototyping.",
      instructorName: "James Brown",
      instructorImage: "/assets/images/teacher-5.jpg",
    },
    {
      image: "/assets/images/signup-img.jpg",
      duration: "6hr 25m",
      price: "$129.00 USD",
      title: "Advanced Node.js & Express",
      description: "Build scalable backend applications with Node.js.",
      instructorName: "Sophia Miller",
      instructorImage: "/assets/images/teacher-6.jpg",
    },
    {
      image: "/assets/images/signup-img.jpg",
      duration: "8hr 50m",
      price: "$179.00 USD",
      title: "Data Structures & Algorithms",
      description: "Ace coding interviews with DSA mastery.",
      instructorName: "Robert Wilson",
      instructorImage: "/assets/images/teacher-6.jpg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto my-20 px-4 relative mt-32">
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "var(--Primary-1, #6366f1)" }}
      >
        Browse our popular courses
      </h2>

      <div className="relative px-14">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          onSwiper={setSwiperInstance}
          className="pb-8"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Navigation Buttons */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 group"
          aria-label="Previous slide"
        >
          <div
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center border-2 group-hover:scale-110"
            style={{ borderColor: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#064ea4")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "transparent")
            }
          >
            <ChevronLeft
              className="w-6 h-6"
              strokeWidth={2.5}
              color="#064ea4"
            />
          </div>
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 group"
          aria-label="Next slide"
        >
          <div
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center border-2 group-hover:scale-110"
            style={{ borderColor: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#064ea4")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "transparent")
            }
          >
            <ChevronRight
              className="w-6 h-6"
              strokeWidth={2.5}
              color="#064ea4"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
