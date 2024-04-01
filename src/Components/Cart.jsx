import React from "react";
import { FaStar } from "react-icons/fa";
const Cart = ({ food, slide }) => {
  return (
    <>
      <div className="flex overflow-hidden mt-2">
        {food.map((data, index) => {
          return (
            <>
              <div
                key={index}
                className="flex flex-col bg-white duration-[800ms]"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                <div className="group shrink-0 p-2  h-[180px] w-[250px] relative">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="group-hover:scale-110 duration-100 mx-auto w-full h-full gap-2 rounded-[15px] object-cover"
                  />
                  <div className="image-overlay absolute w-full h-full top-0 rounded-[15px] flex items-end text-white font-bold text-[23px] tracking-tighter pl-2">
                    {data.cuisine} ₹{Math.floor(Math.random() * 100)} off
                  </div>
                </div>
                <div className="text-black text-[15px] mt-2 text-bold">{data.name}</div>
                <div>
                  <FaStar className="text-[green] inline mr-2" />{" "}
                  <span className="text-[16px] font-semibold">
                    {data.rating}{" "}
                  </span>
                  <span className="ml-2 font-semibold">
                    {" "}
                    {data.cookTimeMinutes} - {data.prepTimeMinutes} mins{" "}
                  </span>
                </div>
                <div className="text-[12px]">
                  {data.difficulty} , {data.name}...
                </div>
              </div>
            </>
          );
        })}
      </div>
      <hr className="my-10 border-[1px]" />
    </>
  );
};

export default Cart;
