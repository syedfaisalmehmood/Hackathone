import Image from "next/image";
import Link from "next/link";
import React from "react";

const All_Products = () => {
  return (
    <div className="md:h-[1680px] md:w-[1440px] w-full relative mx-auto flex sm:flex-wrap ">
      {/* product images div # 01  */}
      <div className="h-[510px] w-[1280px]  absolute  ml-[80px] flex justify-between items-center ">
        <div className="h-[462px] w-[305px]  absoulte bg-white">
          <Link href={""}>
            <Image
              src={"/all_products/photo-1_div1.png"}
              alt="photo-1_div1 Image"
              width={305}
              height={375}
              className=""
            ></Image>
            <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
              <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
                The Dandy chair
              </p>
              <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
                £250
              </p>
            </div>
          </Link>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-2_div1.png"}
            alt="photo-2_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              Rustic Vase Set
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £155
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-3_div1.png"}
            alt="photo-3_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Silky Vase
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £125
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-4_div1.png"}
            alt="photo-4_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Lucy Lamp
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £399
            </p>
          </div>
        </div>
      </div>
      {/* product images div # 02  */}
      <div className="h-[510px] w-[1280px]  absolute mt-[510px] ml-[80px] flex justify-between items-center ">
        <div className="h-[462px] w-[305px]  absoulte bg-white">
          <Image
            src={"/all_products/photo-1_div2.png"}
            alt="photo-1_div2 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Dandy chair
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £250
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-2_div2.png"}
            alt="photo-2_div2 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              Rustic Vase Set
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £155
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-3_div2.png"}
            alt="photo-3_div2 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Silky Vase
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £125
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-4_div2.png"}
            alt="photo-4_div2 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Lucy Lamp
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £399
            </p>
          </div>
        </div>
      </div>
      {/* product images div # 03  */}
      <div className="h-[510px] w-[1280px]  absolute mt-[1020px] ml-[80px] flex justify-between items-center ">
        <div className="h-[462px] w-[305px]  absoulte bg-white">
          <Image
            src={"/all_products/photo-1_div1.png"}
            alt="photo-1_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Dandy chair
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £250
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-2_div1.png"}
            alt="photo-2_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              Rustic Vase Set
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £155
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-3_div1.png"}
            alt="photo-3_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Silky Vase
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £125
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/all_products/photo-4_div1.png"}
            alt="photo-4_div1 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Lucy Lamp
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £399
            </p>
          </div>
        </div>
      </div>

      <button className="h-[56px] w-[170px] mt-[1570px] ml-[635px] flex justify-center text-darkprimary  text-[16px] bg-white shadow-lg border-2 border-darkprimary">
        <span className="mt-[16px]  hover:text-red-800">View collection</span>
      </button>
    </div>
  );
};

export default All_Products;
