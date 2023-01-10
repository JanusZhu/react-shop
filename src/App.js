import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
