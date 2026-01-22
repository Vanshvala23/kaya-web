import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AboutPage from "./pages/AboutPage";
import Home from './pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;