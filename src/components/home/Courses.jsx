"use client";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "../course";

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

export default function CoursesSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-20 px-4 relative mt-[200px]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-[#e1edfb] to-[#064ea4]/10 text-[#064ea4] px-6 py-2 rounded-full text-sm font-semibold">
            Popular Courses
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#064ea4] to-[#0f437f] bg-clip-text text-transparent mb-4">
          Browse Our Popular Courses
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Discover world-class education from industry experts and take your
          skills to the next level
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={setSwiperInstance}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
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
          className="pb-16 pt-2"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} className="h-auto pb-1">
              <div className="h-full">
                <CourseCard {...course} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-white shadow-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full cursor-pointer z-10 hover:bg-gradient-to-r hover:from-[#064ea4] hover:to-[#0f437f] group transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#064ea4] group-hover:text-white transition-colors duration-300" />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-white shadow-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full cursor-pointer z-10 hover:bg-gradient-to-r hover:from-[#064ea4] hover:to-[#0f437f] group transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#064ea4] group-hover:text-white transition-colors duration-300" />
        </button>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-[#064ea4] to-[#0f437f] text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">
          View All Courses
        </button>
      </div>
    </div>
  );
}
