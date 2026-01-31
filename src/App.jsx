import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import Testimonials from "./pages/Testimonials";
import CarrerPage from "./pages/CarrerPage";
import ContactUsPage from "./pages/ContactUsPage";
import LocationPageWrapper from "./pages/LocationPage";
import BlogPageWrapper from "./pages/BlogPage"
import FranchisePageWrapper from "./pages/FranchisePage";
import AestheticCourse from "./pages/AestheticCourse";
import BeautyCourse from "./pages/BeautyCourse";
import BvocCourse from "./pages/BvocCourse";
import HairCourse from "./pages/HairCourse";
import CourseOnEMI from "./pages/CourseOnEMI";
import ComboCosmetology from "./pages/ComboCosmetology";
import Certificate from "./pages/Certificate";
import KoreanMakeup from "./pages/KoreanMakeup";
import BridalMakeup from "./pages/BridalMakeup";
import MakeupCourse from "./pages/MakeupCourse";
import MasterEducation from "./pages/MasterEducation";
import Mehndi from "./pages/Mehndi";
import NailCourse from "./pages/NailCourse";
import Nutrition from "./pages/Nutrition";
import SalonManagement from "./pages/SalonManagement";
import SpaTherapy from "./pages/SpaTherapy";
import GalleryPage from "./components/GalleryPage";
import ServicesPageWrapper from "./pages/ServicesPage";
import Home from './pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/courses" element={<CoursePage/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/career" element={<CarrerPage/>}/>
        <Route path="/location" element={<LocationPageWrapper/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="/blog" element={<BlogPageWrapper/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/services" element={<ServicesPageWrapper/>}/>
        <Route path="/franchise" element={<FranchisePageWrapper/>}/>
        <Route path="/courses/aesthetic" element={<AestheticCourse/>}/>
        <Route path="/courses/beauty" element={<BeautyCourse/>}/>
        <Route path="/courses/bvoc" element={<BvocCourse/>}/>
        <Route path="/courses/hair" element={<HairCourse/>}/>
        <Route path="/courses/courses-on-emi" element={<CourseOnEMI/>}/>
        <Route path="/courses/combo-cosmetology" element={<ComboCosmetology/>}/>
        <Route path="/courses/international" element={<Certificate/>}/>
        <Route path="/courses/korean-makeup" element={<KoreanMakeup/>}/>
        <Route path="/courses/bridal-makeup" element={<BridalMakeup/>}/>
        <Route path="/courses/makeup" element={<MakeupCourse/>}/>
        <Route path="/courses/master-educator" element={<MasterEducation/>}/>
        <Route path="/courses/mehndi" element={<Mehndi/>}/>
        <Route path="/courses/nail" element={<NailCourse/>}/>
        <Route path="/courses/nutrition" element
={<Nutrition/>}/>
        <Route path="/courses/salon-management" element={<SalonManagement/>}/>
        <Route path="/courses/spa" element={<SpaTherapy/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;