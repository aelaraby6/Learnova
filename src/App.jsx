import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/SignUp/Signup";
import Error404 from "./Pages/Errors/Error404";
import Home from "./Pages/Home/Home";
import ProfilePage from "./Pages/Profile/ProfilePage";
import Courses from "./Pages/Courses/Courses";
import Teachers from "./Pages/Teachers/Teachers";
import ContactPage from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Home />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main app routes */}
        <Route path="/courses" element={<Courses />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
