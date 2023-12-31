// React Imports
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context Imports
import { MobileContext } from "./context/MobileContext";

// Page Imports
import Home from "./pages/Home";
import Products from "./pages/Products";
import Products_Show from "./pages/Products_Show";
import NotFound from "./components/NotFound";

// Component Imports
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 480);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <MobileContext.Provider value={isMobile}>
        <Header />
        <Router>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/products"
                element={<Products />}
              />
              <Route
                path="/products/:id"
                element={<Products_Show />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </div>
        </Router>
        {
          !isMobile &&
          <Footer />
        }
      </MobileContext.Provider>
    </div>
  );
}

export default App
