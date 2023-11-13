import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className=" p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className="btn bg-white text-[#64CCC5] border-[#64CCC5] hover:bg-white border-2">
            Countinue Shopping
          </button>

          <div className="flex underline text-lg hover:cursor-pointer">
            <p>Items in your Cart: 3</p>
            <p className=" ml-5">Whishlist Item: 0</p>
          </div>
          <button className="btn ">Checkout</button>
        </div>

        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/
WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?
v=1642719824"
                  alt="product_image"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className=" mr-2">ID:</b> 1457856
                  </p>

                  <p>
                    <b className=" mr-2">Product:</b> Dazzing Sky T-shirt
                  </p>

                  <p className="flex">
                    <b className=" mr-2">Color:</b>
                    <div className="bg-sky-500 w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-1 hover:border-[#8a4af3]"></div>
                  </p>

                  <p>
                    <b className=" mr-2">Size:</b> L
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl ml-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className=" mt-7 mb-7" />

            {/* 2nd Product */}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
                  alt="product_image"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className=" mr-2">ID:</b> 1457856
                  </p>

                  <p>
                    <b className=" mr-2">Product:</b> Dazzing White T-shirt
                  </p>

                  <p className="flex">
                    <b className=" mr-2">Color:</b>
                    <div className="bg-white-500 w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-1 hover:border-[#8a4af3]"></div>
                  </p>

                  <p>
                    <b className=" mr-2">Size:</b> L
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl ml-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className=" mt-7 mb-7" />
          </div>

          <div className=" p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#64CCC5] rounded-md shadow-lg flex-col items-center flex">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>

            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>

            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>$-40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Cart;
