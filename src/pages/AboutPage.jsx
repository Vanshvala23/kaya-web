import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Toast from "react-hot-toast";
export default function AboutPage() {
    return (
        <>
        <Toast position="top-right" reverseOrder={false}/>
    <AboutUs />
        <Footer/>
        </>
    );
}