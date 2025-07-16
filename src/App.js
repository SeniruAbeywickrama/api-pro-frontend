import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Header from '../src/componants/header'

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Documentation from "./pages/Documentation";
import AboutUs from "./pages/Aboutus";
import Pricing from "./pages/Pricing";

function App() {
  return (
      <Router>
          <Header />
          <div className="p-4">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/docs" element={<Documentation />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
          </div>
      </Router>  );
}

export default App;
