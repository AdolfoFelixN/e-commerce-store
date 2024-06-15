import { Products } from "./Products";
import data from "../data/data.json";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Main = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <main>
      <div className="options">              
        <ul className="flex justify-center list-none mt-5 gap-10">        
          <li className="text-xl font-oswald font-medium text-black cursor-pointer border-b-4 border-transparent hover:border-black transition duration-200">Todo</li>
          <li className="text-xl font-oswald font-medium text-black cursor-pointer border-b-4 border-transparent hover:border-black transition duration-200">Mujer</li>
          <li className="text-xl font-oswald font-medium text-black cursor-pointer border-b-4 border-transparent hover:border-black transition duration-200">Hombre</li>
          <li className="text-xl font-oswald font-medium text-black cursor-pointer border-b-4 border-transparent hover:border-black transition duration-200">Zapatos</li>
          <li className="text-xl font-oswald font-medium text-black cursor-pointer border-b-4 border-transparent hover:border-black transition duration-200">Deporte</li>
          <li className="text-xl font-oswald font-medium text-black cursor-pointer border-b-4 border-transparent hover:border-black transition duration-200">Accesorios</li>
        </ul>
      </div>        

      <div className="flex flex-wrap justify-center mt-5 gap-5">
        {data.map((product) => (
          <Products
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
};
