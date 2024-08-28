"use client";

import React, { Fragment, useState } from "react";
import Customer from "./[helpcenterid]/page";
import Icons from "@/icons/Index";
import Image from "next/image";
import { ordercardprops, profileinterface } from "@/interFaces/type";
import helpcenter from "@/json/helpcenter.json"

/**
 * Page Component
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.classname - Additional classes for styling
 * @param {Function} props.closebtn - Function to handle closing the page
 * @param {number} props.profilesidebar - Sidebar configuration
 */
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  // State to manage selected customer ID or null
  const [customer, setcustomer] = useState<number | null | any>();

  /**
   * Function to close the customer view
   */
  const closebtncustomer = () => {
    setcustomer(null);
  };

  // State to manage active button ID
  const [activeButton, setActiveButton] = useState<number>();

  /**
   * Function to handle button click and set active button
   * 
   * @param {number} buttonNumber - ID of the button clicked
   */
  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };


  return (
    <>
      <div className={` ${classname}  tab:flex w-full  gap-[14px] `}>
        <div
          className={` ${profilesidebar === 8 ? "fixed right-0 left-0 top-0 " : "static"
            } bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] min-[991px]:hidden py-[20px] px-[16px] flex gap-[14px] items-center justify-between`}
        >
          <h2
            onClick={closebtn}
            className={`text_20  text-blue_gray_600 flex items-center gap-x-[14px]`}
          >
            <Icons type="leftarrowback" />
            My Orders
          </h2>
          <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" />
        </div>
        <div className="flex flex-col xl:max-w-[510px] w-full py-5 px-4 bg-extra_bg tab:bg-white rounded-[14px] max-[991px]:h-[100vh] max-[991px]:overflow-scroll max-[991px]:pt-[90px]  h-full">
          <div className="hidden xl:block  ">
            {/* Map through helpcenter items */}
            {helpcenter?.map((item, index) => {
              return (
                <Fragment key={Date.now() + index}>
                  <div
                    onClick={() => {
                      handleClick(item?.id);
                    }}
                    className={`rounded-[6px] ${activeButton === item?.id
                      ? "bg-extra_bg"
                      : "border-b-[1px] border-extra_4"
                      } max-w-[470px]  w-full p-[14px] flex gap-[16px]  `}
                  >
                    <div
                      className={`rounded-[6px] flex justify-center w-full max-w-[80px] ${activeButton === item?.id ? "bg-white" : "bg-extra_bg"
                        } h-[80px]`}
                    >
                      <Image
                        width={70}
                        height={70}
                        src={`/images/${item?.image}`}
                        className="object-contain"
                        alt="image"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex w-full justify-between pb-[14px] items-center flex-wrap ">
                        <h2 className="text-light_primary text_20_12 ">
                          {item?.title}
                        </h2>
                        <span className=" text-[10px] leading-[14px] font-normal text-blue_gray_400  tab:text_12">
                          {item?.date}
                        </span>
                      </div>
                      <h3 className="text_16_2_10 text-blue_gray_400 ">
                        Order id:- {item?.orderid}
                      </h3>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col bg-white gap-[10px] xl:hidden p-[10px] ">
            {/* Map through helpcenter items */}
            {helpcenter?.map((item: ordercardprops, index: number) => {
              return (
                <Fragment key={Date.now() + index}>
                  <div
                    onClick={() => {
                      setcustomer(item?.id);
                      handleClick(item?.id);
                    }}
                  >
                    <div
                      className={`rounded-[6px]  ${activeButton === item?.id
                        ? "bg-extra_bg"
                        : "border-b-[1px] border-extra_4"
                        }  xl:max-w-[470px] w-full p-[10px] md:p-[14px] flex gap-[15px]  `}
                    >
                      <div className=" rounded-[6px] w-full max-w-[80px] h-[80px] bg-extra_bg  flex justify-center ">
                        <Image
                          width={70}
                          height={70}
                          src={`/images/${item?.image}`}
                          className="object-contain"
                          alt="image"
                        />
                      </div>
                      {/* Details */}
                      <div className="w-full ">
                        <div className="flex w-full justify-between pb-[14px] items-center flex-wrap ">
                          {/* Title and date */}
                          <h2 className="text-light_primary text_20_12 ">
                            {item?.title}
                          </h2>
                          <span className=" text-[10px] leading-[14px] font-normal text-blue_gray_400  tab:text_12">
                            {item?.date}
                          </span>
                        </div>
                        <h3 className="text_16_2_10 text-blue_gray_400 ">
                          Order id:- {item?.orderid}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
        {/* Customer view */}
        {
          <Customer
            closebtncustomer={closebtncustomer}
            className={`${customer > 0 ? "right-[0]" : "right-[-100%]"
              } fixed duration-500 bg-white top-0 z-[52] xl:z-[45] xl:static `}
          />
        }
      </div>
    </>
  );
};

export default Page;


