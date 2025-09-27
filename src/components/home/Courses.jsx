"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "../course";

export default function CoursesSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <div className="w-full max-w-6xl mx-auto my-[80px] relative">
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "var(--Primary-1)" }}
      >
        Browse our popular courses
      </h2>

      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={24}
        slidesPerView={3}
        className="pb-16"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="pb-6 pt-6">
            <CourseCard {...course} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div
        ref={prevRef}
        className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--Primary-1)] shadow-lg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </div>
      <div
        ref={nextRef}
        className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--Primary-1)] shadow-lg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
