import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CoursesSlider from "../../components/home/Courses";
import Welcome from "../../components/home/Welcome";
import MissionSection from "../../components/MissionSection";
import Courses from "../Courses/Courses";

export default function Home() {
  return (
    <>
    <Header/>

    <Welcome/>
    <CoursesSlider/>

    <Footer/>
    </>
  );
}