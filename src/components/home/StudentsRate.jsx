"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/global.css";
import StudentCard from "../StudentCard";

const StudentsRate = () => {
  const studentsRateList = [
    {
      image: "/assets/images/student-1.jpg",
      title:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
      career: "Web Design & Development",
      studentName: "Mike Warren",
    },
    {
      image: "/assets/images/student-2.jpg",
      title:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
      career: "Junior Designer at Company",
      studentName: "Katherine Cutts",
    },
    {
      image: "/assets/images/student-3.jpg",
      title:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
      career: "UX Designer at Agency",
      studentName: "Sophie Moore",
    },
  ];

  const achievements = [
    {
      number: "100,000+",
      title: "Students worldwide",
    },
    {
      number: "200,000+",
      title: "Total course views",
    },
    {
      number: "5,000+",
      title: "Five-star course reviews",
    },
    {
      number: "10,000+",
      title: "Students community",
    },
  ];

  return (
    <>
      <section className="w-full px-16 mx-auto my-[80px] relative">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "var(--Primary-1)" }}
        >
          What our students say about us
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            className="pb-16"
          >
            {studentsRateList.map((student, index) => (
              <SwiperSlide key={index} className="pb-6 pt-6">
                <StudentCard {...student} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <button
            className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--Primary-1)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-1)] focus:ring-opacity-50 hover:bg-white hover:text-[var(--Primary-1)] hover:scale-110 hover:shadow-2xl hover:border hover:border-[var(--Primary-1)]"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--Primary-1)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-1)] focus:ring-opacity-50 hover:bg-white hover:text-[var(--Primary-1)] hover:scale-110 hover:shadow-2xl hover:border hover:border-[var(--Primary-1)]"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonials Achievement Wrapper */}
        <div className="testimonials-achievement-wrapper mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <h3
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--Primary-1)" }}
                >
                  {achievement.number}
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[var(--Primary-1)] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-1)] focus:ring-opacity-50">
            BROWSE COURSES
          </button>
        </div>
      </section>
    </>
  );
};

export default StudentsRate;