"use client";

import Icons from "@/icons/Index";
import Link from "next/link";
import React, { useState } from "react";

/**
 * CheckoutHeader component handles the header navigation steps in the checkout process.
 * @returns {JSX.Element} JSX element containing the checkout header UI.
 */
const ChechoutHeader = () => {
  const [steper, setsteper] = useState<number>(1);

  return (
    <div className="py-[20px] tab:pt-[30px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)]">
      <div className="container">
        <div className="flex  justify-start md:justify-between items-start md:items-center gap-[30px] md:gap-[50px] md:flex-row flex-col  ">
          <Link href={"/"}>
            <div className="cursor-pointer" >
              <Icons type="mainlogo" />
            </div>
          </Link>
          <div className="flex flex-col max-w-[837px] w-full">
            <div className="grid gap-6 row-gap-10">
              <div className="flex max-w-full md:max-w-[837px] h-fit w-full gap-[6px] ">
                {/* Step 1: Login */}
                <div
                  onClick={() => setsteper(1)}
                  className="flex flex-col w-full gap-[4px]"
                >
                  <div className="flex  items-center mr-4 gap-[6px] flex-row justify-between  ">
                    <div
                      className={`p-[2px] ${steper === 1
                        ? "bg-light_secondary_main"
                        : "border-[1px] border-blue_gray_300 "
                        } flex justify-center items-center rounded-[50%] w-[24px] h-[24px]`}
                    >
                      <Icons
                        type="profileicon"
                        className={`${steper === 1 ? "fill-[#fff]" : "fill-[#78909C]"
                          }`}
                      />
                    </div>
                    <div
                      className={`w-[2px]  ${steper === 1
                        ? "bg-light_secondary_main"
                        : " bg-blue_gray_200"
                        }   h-[2px] w-full max-w-[100%]`}
                    ></div>
                  </div>
                  <p
                    className={` ${steper === 1 ? "text-blue_gray_700" : "text-blue_gray_200"
                      } tab:text-[14px] tab:leading-[24px]  text-[10px] leading-[14px] font-medium   `}
                  >
                    Login
                  </p>
                </div>
                {/* Step 2: Address */}
                <div
                  onClick={() => setsteper(2)}
                  className="flex flex-col w-full gap-[4px]  "
                >
                  <div className="flex items-center md:mr-4 gap-[6px] flex-row  justify-center  ">
                    <div
                      className={` ${steper === 2
                        ? "bg-light_secondary_main"
                        : "border-[1px] border-blue_gray_300 "
                        } p-[2px] flex justify-center items-center rounded-[50%] w-[24px] h-[24px]`}
                    >
                      <Icons
                        type="ovallocation"
                        className={`${steper === 2 ? "fill-[#fff]" : "fill-[#78909C]"
                          }`}
                      />
                    </div>
                    <div
                      className={`w-[2px]  ${steper === 2
                        ? "bg-light_secondary_main"
                        : " bg-blue_gray_200"
                        }    h-[2px] w-full max-w-[100%]`}
                    ></div>
                  </div>
                  <p
                    className={` ${steper === 2 ? "text-blue_gray_700" : "text-blue_gray_200"
                      } tab:text-[14px] tab:leading-[24px]  text-[10px] leading-[14px] font-medium   `}
                  >
                    Address
                  </p>
                </div>
                {/* Step 3: Payment */}
                <div
                  onClick={() => setsteper(3)}
                  className="flex flex-col w-full gap-[4px]"
                >
                  <div className="flex items-center md:mr-4 gap-[6px] flex-row  justify-center">
                    <div
                      className={`p-[2px] ${steper === 3
                        ? "bg-light_secondary_main"
                        : "border-[1px] border-blue_gray_300 "
                        } flex justify-center items-center rounded-[50%] w-[24px] h-[24px]`}
                    >
                      <Icons
                        type="atmcard"
                        className={`${steper === 3 ? "fill-[#fff]" : "fill-[#78909C]"
                          }`}
                      />
                    </div>
                    <div
                      className={`w-[2px] ${steper === 3
                        ? "bg-light_secondary_main"
                        : " bg-blue_gray_200"
                        }     h-[2px] w-full max-w-[100%]`}
                    ></div>
                  </div>
                  <p
                    className={` ${steper === 3 ? "text-blue_gray_700" : "text-blue_gray_200"
                      } tab:text-[14px] tab:leading-[24px]  text-[10px] leading-[14px] font-medium   `}
                  >
                    Payment
                  </p>
                </div>
                {/* Step 4: Order Success */}
                <div
                  onClick={() => setsteper(4)}
                  className="flex flex-col  w-full  max-w-fit text-center justify-center  "
                >
                  <div className="flex items-center md:mr-4 gap-[6px] flex-row  justify-center  ">
                    <div
                      className={` ${steper === 4
                        ? "bg-light_secondary_main"
                        : "border-[1px] border-blue_gray_300 "
                        } p-[2px] flex justify-center items-center rounded-[50%] w-[24px] h-[24px]`}
                    >
                      <Icons
                        type="stepicon"
                        className={`${steper === 4 ? "fill-[#fff]" : "fill-[#78909C]"
                          }`}
                      />
                    </div>
                  </div>
                  <div className="max-[991px]:pt-1 max-w-[991px]:pb-8">
                    <p
                      className={` ${steper === 4
                        ? "text-blue_gray_700"
                        : "text-blue_gray_200"
                        } tab:text-[14px] tab:leading-[24px]  text-[10px] leading-[14px] font-medium   `}
                    >
                      Order Successfull
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChechoutHeader;
