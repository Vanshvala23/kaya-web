import LocationPage from "../components/LocationPage";
import Footer from "../components/Footer";
import {Toaster} from 'react-hot-toast';
export default function LocationPageWrapper() {
  return(
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <LocationPage/>
    <Footer/>
    </>
  );
}