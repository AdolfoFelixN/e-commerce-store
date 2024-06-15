export const Products = ({
title,
image = "",
price,
addToCart = () => {},
}) => {
  const wordsTitle =
    typeof title === "string" ? title.split("").slice(0, 22).join("") : "";

  return (
    <div className="w-[18%] h-[430px] bg-black shadow-[0_0_60px_rgba(0,0,0,0.1)] flex flex-col justify-between font-nunito pb-2">
      <div className="flex justify-center items-center h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full bg-cadetblue object-cover"
        />
      </div>

      <div className="flex flex-col justify-start items-start mt-0 ml-2 mt-1">
        <h3 className="text-[22px] mb-1 text-white">{wordsTitle}...</h3>
        <div className="w-full flex justify-between font-bold text-xl text-yellow-400 py-2 items-center">
          <p>
            <b>$MXN {price}</b>
          </p>
          <button
            className="h-[38px] mr-[10px] px-[15px] py-[5px] rounded-[5px] border-none cursor-pointer font-extrabold bg-white text-black text-[16px] hover:bg-[#92cb1a] transition duration-200"
            onClick={() => addToCart({ title, image, price })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
