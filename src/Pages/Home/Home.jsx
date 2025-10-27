import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutEducation from "../../components/home/AboutEducation";
import Categories from "../../components/home/Categories";
import CoursesSlider from "../../components/home/Courses";
import FeaturedTeacher from "../../components/home/FeaturedTeacher";
import LearnCourse from "../../components/home/LearnCourse";
import ResourcesNews from "../../components/home/ResourcesNews";
import StudentsRate from "../../components/home/StudentsRate";
import Welcome from "../../components/home/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <CoursesSlider />
      <LearnCourse />
      <FeaturedTeacher />
      <AboutEducation />
      <Categories />
      <StudentsRate />
      <ResourcesNews />
      <Footer />
    </>
  );
}
