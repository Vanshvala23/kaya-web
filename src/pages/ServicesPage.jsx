import ServicesPage from "../components/Services";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
export default function ServicesPageWrapper() {
    return(
        <>
        <Toaster position="top-right" reverseOrder={false}/>
        <ServicesPage />
        <Footer />
        </>
    )
}