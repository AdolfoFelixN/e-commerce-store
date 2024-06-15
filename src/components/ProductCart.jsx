export const ProductCart = ({ title, image = "", price }) => {        

  return (    
      <div className="w-[40%] h-[170px] bg-black shadow-[0_0_60px_rgba(0,0,0,0.1)] flex font-nunito">
        <div className="w-48 flex justify-center items-center h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full bg-cadetblue object-cover"
          />
        </div>

        <div className="w-full flex flex-col justify-center px-2">
          <h3 className="text-xl mx-2 mb-1 font-bold text-white">{title}</h3>
          <div className="w-full mx-2 flex justify-between text-xl text-yellow-400 py-2 items-center">
            <p>
              <b>$MXN {price}</b>
            </p>
          </div>
        </div>
      </div>    
  );
};
