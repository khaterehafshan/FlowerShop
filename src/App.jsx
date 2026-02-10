import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Footer from "./components/Footer.jsx"; 

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser"));
    } catch {
      localStorage.removeItem("currentUser");
      return null;
    }
  });

  const [authModal, setAuthModal] = useState(!user ? "login" : null);
  const blurBackground = authModal !== null;

  return (
    <div className="app-wrapper">
      <Header
        cart={cart}
        user={user}
        setUser={setUser}
        setAuthModal={setAuthModal}
        search={search}
        setSearch={setSearch}
      />

      <div className={blurBackground ? "blur app-content" : "app-content"}>
        <Routes>
          <Route
            path="/"
            element={<Gallery cart={cart} setCart={setCart} search={search} />}
          />
          <Route
            path="/product/:id"
            element={<ProductPage cart={cart} setCart={setCart} />}
          />

          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>

      <Footer />

      {authModal === "login" && (
        <div className="modal-overlay">
          <Login setUser={setUser} setAuthModal={setAuthModal} />
        </div>
      )}
      {authModal === "signup" && (
        <div className="modal-overlay">
          <Signup setUser={setUser} setAuthModal={setAuthModal} />
        </div>
      )}
    </div>
  );
}

export default App;
