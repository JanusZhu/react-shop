import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { Navbar } from "./components/navbar/navbar";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App min-w-full">
      <ShopContextProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="*"
              element={
                <h1 className="text-4xl font-bold py-8">Page not found</h1>
              }
            ></Route>
          </Routes>
        </HashRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
