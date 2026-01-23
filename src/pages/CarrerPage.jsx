import CareerPage from "../components/CareerPage";
import Footer from "../components/Footer";
import Toaster from "react-hot-toast";

const CarrerPageComponent = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
        <CareerPage />
        <Footer />
    </>
  );
}
export default CarrerPageComponent;