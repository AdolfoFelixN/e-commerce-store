import carrito from '../assets/images/carrito-de-compras.png';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Header = () => {

  const {total} = useContext(CartContext);

  const [search, setSearch] = useState("")
  
  return (    

    <nav className='flex justify-between items-center bg-black text-white py-3 px-10'>
      <Link to="/">      
        <h1 className='font-oswald text-3xl font-bold'>Felix Store</h1>
      </Link>      

      <div className="flex justify-center items-center gap-3">      
        <input className='w-[400px] h-[40px] rounded-md py-[5px] px-3 text-xl' type="text" placeholder="Playera, Pantalón, Sueter, Zapatos" onChange={(e) => setSearch(e.target.value)}/>                

        <button className='h-10 rounded-md text-black bg-[#f0c14b] hover:bg-[#92cb1a] hover:opacity-80 transition duration-200 font-bold  py-[5px] px-[10px] cursor-pointer text-[16px]'>Buscar</button>
      </div>
      <Link to="/cart">      

      <div className="flex items-center gap-2 h-8 w-auto object-cover bg-white text-black py-[5px] px-[10px] rounded-md cursor-pointer">

        <img
          src={carrito}
          alt="Carrito de compras"
          className='w-full h-full'
        />

        <span className='text-l font-bold'>{total}</span>
      </div>
      </Link>
    </nav>
  );
};
