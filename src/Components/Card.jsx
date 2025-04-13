import React from "react";
import { useContext } from "react";
import { MyProductContext } from "./Hooks/ContextAPI/Product";

function Card() {
    const { MobileInfo } = useContext(MyProductContext)
  return (
    <>
      <div className="flex justify-center ">
        <div className="h-96 w-3xs bg-black text-xl text-white rounded-2xl">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519"
            alt=""
         className="h-auto w-auto rounded-t-2xl"  />
        <div className="m-5 text-start">
        <h1 className="text-white text-2xl">Product: {MobileInfo.mobileName}</h1>
         <p>Price: <s>{MobileInfo.price}</s> </p>
         <p>Sale Price: {MobileInfo.salePrice} </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;
