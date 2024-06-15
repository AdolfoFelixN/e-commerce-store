import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductCart } from "./ProductCart";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>      
      <ul className="flex flex-col items-center gap-1 mt-5">
        {cart.length === 0 ? (
          <li className="text-xl font-bold">Your cart is empty</li>
        ) : (
          cart.map((item, index) => (                          
          <ProductCart
            key={index}
            image={item.image}
            title={item.title}            
            price={item.price}
          />
          ))
        )}
        {/* This is just a test item to check if the list is being rendered */}        
      </ul>
    </div>
  );
};
