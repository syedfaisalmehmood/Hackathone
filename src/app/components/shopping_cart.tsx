import Image from "next/image";
import React from "react";

const Shopping_Cart = () => {
  return (
    <div className="h-[749px] w-[1440px] m-auto flex justify-center text-darkprimary ">
      <div className="h-[637px] w-[1064px] mt-[64px] relative ">
        <h1 className="h-[50px] w-[328px] text-[36px]">Your shopping cart</h1>
        <div className="h-[539px] w-[1064px] mt-[48px] ">
          <hr className="w-[1064px] h-[2px] mt-[30px]   absolute border border-black/15"></hr>
          {/* Cart Items Heading */}
          <ul className=" flex  items-center ">
            <li>Product</li>
            <li className="ml-[595px]">Quantity</li>
            <li className="ml-[300px]">Total</li>
          </ul>
          {/* Cart Items Details - 1*/}
          <div className="h-[134px] w-[1064px] mt-[32px] ">
            <div className="h-[134px] w-[309px] flex justify-between absolute items-center  ">
              <div className="h-[134px] w-[109px]  ">
                <Image
                  src={"/cart_page/product_image.png"}
                  alt="Product Image"
                  width={109}
                  height={134}
                  className=""
                ></Image>
              </div>
              <div className="h-[110px] w-[179px]  ">
                <h2 className="h-[28px] w-[150px] text-[20px]">
                  Graystone vase
                </h2>
                <p className="h-[42px] w-[179px] mt-[8px] text-[14px] tracking-tighter">
                  A timeless ceramic vase with a tri color grey glaze.
                </p>
                <p className="h-[42px] w-[179px] mt-[8px] text-[14px]">£85</p>
              </div>
            </div>

            <div className="h-[46px] w-[122px] absolute flex justify-between text-darkprimary mt-[20px] ml-[655px] ">
              <ul className="flex">
                <li className="mt-[12px] ml-[16px]">-</li>
                <li className="mt-[12px] ml-[33px]">1</li>
                <li className="mt-[12px] ml-[33px]">+</li>
              </ul>
            </div>
            <div className="h-[27px] w-[33px] absolute flex justify-between text-darkprimary mt-[20px] ml-[1024px] ">
              £85
            </div>
          </div>

          {/* Cart Items Details - 2*/}
          <div className="h-[134px] w-[1064px] mt-[20px] ">
            <div className="h-[134px] w-[309px] flex justify-between absolute items-center  ">
              <div className="h-[134px] w-[109px]  ">
                <Image
                  src={"/cart_page/product_image-1.png"}
                  alt="Product Image-1"
                  width={109}
                  height={134}
                  className=""
                ></Image>
              </div>
              <div className="h-[110px] w-[179px]  ">
                <h2 className="h-[28px] w-[150px] text-[20px]">
                  Graystone vase
                </h2>
                <p className="h-[42px] w-[179px] mt-[8px] text-[14px] tracking-tighter">
                  A timeless ceramic vase with a tri color grey glaze.
                </p>
                <p className="h-[42px] w-[179px] mt-[8px] text-[14px]">£85</p>
              </div>
            </div>

            <div className="h-[46px] w-[122px] absolute flex justify-between text-darkprimary mt-[20px] ml-[655px] ">
              <ul className="flex">
                <li className="mt-[12px] ml-[16px]">-</li>
                <li className="mt-[12px] ml-[33px]">1</li>
                <li className="mt-[12px] ml-[33px]">+</li>
              </ul>
            </div>
            <div className="h-[27px] w-[33px] absolute flex justify-between text-darkprimary mt-[20px] ml-[1024px] ">
              £85
            </div>
          </div>

          <hr className="w-[1064px] h-[2px] mt-[32px]   absolute border border-black/15"></hr>

          <div className="h-[67px] w-[282px] mt-[60px] ml-[782px] ">
            <div className="h-[34px] w-[150px] absolute  ml-[132px]">
              <h5 className="text-[20px] mt-[3px] absolute">Subtotal</h5>
              <h5 className="text-[20px] mt-[3px] ml-[104px] absolute">£210</h5>
            </div>
            <p className="text-[14px] mt-[46px] absolute tracking-tighter">
              Taxes and shipping are calculated at checkout
            </p>
          </div>
          <button className="h-[56px] w-[172px] text-[16px] ml-[892px] mt-[15px] text-white flex justify-center items-center bg-darkprimary">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopping_Cart;
