import "./App.css";
import Header from "./components/Header.jsx"
import AboutEducation from "./components/home/AboutEducation.jsx";
import Categories from "./components/home/Categories.jsx";
import CoursesSlider from "./components/home/Courses.jsx";
import Welcome from "./components/home/Welcome";

function App() {
  return <>
  <Header/>
  <Welcome/>
  <CoursesSlider/>
  <AboutEducation/>
  <Categories/>
  </>;
}

export default App;