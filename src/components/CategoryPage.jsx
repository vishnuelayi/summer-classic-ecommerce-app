import React from "react";
import Announce from "./Announce";
import Navbar from "./Navbar";
import Products from "./Products";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
