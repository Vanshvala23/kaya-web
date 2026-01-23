import Courses from "../components/Courses";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
export default function CoursePage() {
  return(
    <>
        <Toaster position="top-right" reverseOrder={false}/>
      <Courses />
      <Footer/>
      </>
  );
}