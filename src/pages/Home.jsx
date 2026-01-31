import HeroSlider from "../components/HeroSlider";
import NewsTicker from "../components/NewsSlider";
import OurCourses from "../components/OurCourses";
import OurServices from "../components/OurServices";
import WhoWeAre from "../components/WhoWeAre";
import Achievements from "../components/Achievements";
import Placements from "../components/Placements";
import FindCenter from "../components/FindCenter";
import BrandPlacements from "../components/BrandsPlacement";
import GetStartedCTA from "../components/GetStartedCTA";
import Footer from "../components/Footer";
export default function Home() {
  return(
    <>
  <HeroSlider />
    <NewsTicker />
    <OurCourses />
    <OurServices />
    <WhoWeAre />
    <Achievements />
    <Placements />
    <FindCenter />
    <BrandPlacements />
    <GetStartedCTA />
    <Footer />
    </>
  );
}
