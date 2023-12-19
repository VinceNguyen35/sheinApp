import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Products_Show from "./pages/Products_Show";
import NotFound from "./components/NotFound";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App
