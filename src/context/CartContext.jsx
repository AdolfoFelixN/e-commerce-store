import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()  

export const CartProvider = ({children}) => {      

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        let newTotal = cart.length;
        setTotal(newTotal);
      }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        setTotal((prevCart) => prevCart.length + 1);
        console.log('added', item);
      };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }

    const clearCart = () => {
        setCart([])
    }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, total, setTotal}}>
      {children}
    </CartContext.Provider>
  )
}
