import visa from '../assets/images/visa.png';
import paypal from '../assets/images/paypal.png';
import americanExpress from '../assets/images/american-express.png';

export const Footer = () => {
  return (    
    <div className="flex justify-between bg-black text-white text-center py-16 px-24 mt-5 text-xl font-oswald">
      <div className="flex gap-56 ">
        <div>
          <ul className="flex flex-col gap-8 justify-center items-start">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition duration-200">SOBRE NOSOTROS</li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition duration-200">REPORTAR PROBLEMA</li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition duration-200">GARANTIAS</li>            
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-8 justify-center items-start">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition duration-200">GUÍA DE TALLAS</li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition duration-200">ENVÍOS</li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition duration-200">DEVOLUCIONES</li>            
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        <h3 className='text-2xl'>METODOS DE PAGO</h3>
        <ul className="flex gap-8 justify-center items-center cursor-default">            
            <img
              src={visa}
              alt="Carrito de compras"
              className='w-16 h-full'
            />
            <img
              src={paypal}
              alt="Carrito de compras"
              className='w-16 h-full'
            />
            <li className='text-[#FB8B00]'>BITCOIN</li>
            <img
              src={americanExpress}
              alt="Carrito de compras"
              className='w-16 h-full'
            />
          </ul>
      </div>
    </div>
  )
}
