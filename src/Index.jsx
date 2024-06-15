import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { CartProvider } from "./context/CartContext"
import './styles/Index.css'
import { Cart } from "./components/Cart";

export const Index = () => {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  )

}