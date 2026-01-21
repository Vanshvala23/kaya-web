import HeroSlider from "../components/HeroSlider";
import NewsTicker from "../components/NewsSlider";
import OurCourses from "../components/OurCourses";
import WhoWeAre from "../components/WhoWeAre";
import Achievements from "../components/Achievements";
import Placements from "../components/Placements";
import FindCenter from "../components/FindCenter";
import BrandPlacements from "../components/BrandsPlacement";
import GetStartedCTA from "../components/GetStartedCTA";
export default function Home() {
  return(
    <>
  <HeroSlider />
    <NewsTicker />
    <OurCourses />
    <WhoWeAre />
    <Achievements />
    <Placements />
    <FindCenter />
    <BrandPlacements />
    <GetStartedCTA />
    </>
  );
}
