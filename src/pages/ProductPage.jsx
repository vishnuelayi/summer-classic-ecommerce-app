import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-3">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/
KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">Creamy Hoody Original</h1>
          <p className="pr-[4rem] text-justify mt-4 mobile:pr-0">
            Wrap yourself in comfort with our Classic Cream Hoodie. Crafted from
            ultra-soft, premium cotton blend fabric, this hoodie is the epitome
            of laid-back luxury. Whether you’re strolling through the park or
            sipping coffee at your favorite café, the creamy hue adds a touch of
            sophistication to your casual ensemble.
          </p>

          <p className=" mt-7 text-3xl">
            Price: <b>$50</b>
          </p>

          <div className="flex mt-7 text-2xl">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
          </div>

          <div className=" mt-7 text-2xl">
            Size
            <select className=" ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div className="mt-5">
            <Counter />
          </div>

          <button className="btn mt-7">Add to cart</button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductPage;
