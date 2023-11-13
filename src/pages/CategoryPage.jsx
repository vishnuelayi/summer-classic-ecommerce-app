import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className=" flex-col flex p-5">
        <h1 className=" text-[30px]">Men's Cloth</h1>
        <div className=" flex items-center justify-between mt-3">
            <div className="flex">
                <p>Filter by</p>
                <select className=" ml-3 border-silver border-2">
                    <option selected disabled>Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>

                <select className=" ml-3 border-silver border-2">
                    <option selected disabled>Color</option>
                    <option>Yellow</option>
                    <option>Red</option>
                    <option>Black</option>
                </select>
            </div>
            <div className=" flex">
              <p>Sort By</p>
              <select  className=" ml-3 border-silver border-2">
                <option>Newest (first)</option>
                <option>Oldest (first)</option>
                <option>Price (Asc)</option>
                <option>Price (Des)</option>
              </select>
            </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
