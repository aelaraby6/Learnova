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
import InstructorProfile from "./Pages/Teachers/InstructorProfile";
import ContactPage from "./Pages/Contact/Contact";
import CourseDetailPage from "./Pages/Course/Course";
import Admin from "./Pages/Admin/Admin";
import Cart from "./Pages/cart/Cart";
import { CartProvider } from "./context/CartContext";
import ProtectedAdminRoute from "./utils/ProtectedAdminRoute";
import Error403 from "./Pages/Errors/Error403";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Main */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/instructor/:instructorId"
            element={<InstructorProfile />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />

          {/* Protected admin route */}
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <Admin />
              </ProtectedAdminRoute>
            }
          />

          {/* Errors */}
          <Route path="/403" element={<Error403 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
