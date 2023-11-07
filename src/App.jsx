import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products_Show from "./pages/Products_Show";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
        <Router>
          <div className="pages">
            <Routes>
              <Route
                path="*"
                element={<Home />}
              />
              <Route
                path="/manfinity"
                element={<Products_Show item="manfinity"/>}
              />
              <Route
                path="/cargoPants"
                element={<Products_Show item="cargoPants"/>}
              />
              <Route
                path="/dress"
                element={<Products_Show item="dress"/>}
              />
            </Routes>
          </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App
