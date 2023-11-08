import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products_Show from "./pages/Products_Show";
import NotFound from "./pages/NotFound";

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
                path="/"
                element={<Home />}
              />
              <Route
                path="/:id"
                element={<Products_Show />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App
