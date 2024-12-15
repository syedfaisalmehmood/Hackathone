import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const NavBar_3 = () => {
  return (
    <div className="h-[121px] w-[1440px] m-auto flex relative font-sans  ">
      <div className="h-[41px] w-[1440px] flex  items-center absolute text-white bg-darkprimary">
        <LiaShippingFastSolid className="  ml-[516px] " />
        <p className="ml-[8px] text-[14px] ">
          Free delivery on all orders over £50 with code easter checkout
        </p>
        <div>
          <RxCross2 className="ml-[475px] h-[24px] w-[24px] " />
        </div>

        {/* Avion Company Image */}
        <div className="h-[134px] absolute w-[1440px] mt-[175px] m-auto flex ">
          <div className="h-[30px] w-[65px] mt-[21px] ml-[28px] ">
            <Link href={"/"}>
              <Image
                src={"/navbar/Avion.png"}
                alt="Avion Image"
                height={30}
                width={65}
                className="cursor-pointer"
              ></Image>
            </Link>
          </div>
          {/* Navbar div */}
          <div className="h-[22px] absolute w-[803px] ml-[318px] mt-[80px] text-navtext ">
            <ul className="flex justify-between cursor-pointer ">
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/allproducts"}>All products</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Plant pots</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Ceramics</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Tables</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/allproducts/chair_page"}>Chairs</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Crockery</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Tableware</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Cultery</Link>
              </li>
            </ul>
          </div>
          {/* Sub menus */}
          <div className="h-[22px] text-[16px] absolute flex w-[215px] mt-[24px] ml-[1047px] text-navtext justify-between items-center ">
            <ul className="flex justify-between gap-8 cursor-pointer">
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/about"}>About us</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Contact</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
                <Link href={"/"}>Blog</Link>
              </li>
            </ul>
          </div>

          <div className="h-[16px] absolute flex w-[80px] mt-[24px] ml-[1310px] justify-between items-center ">
            {/* Icons div */}
            <div className="h-[16px] w-[80px] flex mt-[6px] justify-between text-darkprimary ">
              <CiSearch className="hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer z-10" />
              <Link href={"/cart"}>
                <IoCartOutline className="hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer" />
              </Link>
              <FaRegCircleUser className="hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar_3;
