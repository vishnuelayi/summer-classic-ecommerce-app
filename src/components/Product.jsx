import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";

const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");

  const handleHoverEnter = () => {
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };

  const handleExit = () => {
    setHoverEffect(" opacity-0");
  };
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#64CCC5] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  return (
    <div
      className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleExit}
    >
      <img src={item.src} alt="product_image" />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffect
        }
      >
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
