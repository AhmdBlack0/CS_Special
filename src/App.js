import { Routes, Route } from "react-router-dom";
import "./css/all.min.css";
import "./css/App.css";
import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<CoursesList />} />
        <Route path="course/:courseId" element={<CourseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
