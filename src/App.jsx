import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./components/Courses";
import Testimonials from "./pages/Testimonials";
import CarrerPage from "./pages/CarrerPage";
import ContactUsPage from "./pages/ContactUsPage";
import LocationPageWrapper from "./pages/LocationPage";
import BlogPageWrapper from "./pages/BlogPage"
import FranchisePage from "./pages/FranchisePage";
import Home from './pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/career" element={<CarrerPage/>}/>
        <Route path="/location" element={<LocationPageWrapper/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="/blog" element={<BlogPageWrapper/>}/>
        <Route path="/franchise" element={<FranchisePage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;