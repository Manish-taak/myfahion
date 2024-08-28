"use client";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import React, { Fragment, useState } from "react";
import Productsdata from "@/json/products.json";
import DealsCard from "@/components/ui/DealsCard";

/**
 * OrderSummary component renders the summary of the user's order.
 * @returns {JSX.Element} JSX element containing the order summary UI.
 */
const OrderSummary = () => {
  // State variable to manage the visibility of the order summary section
  const [ordersummary, setOrdersummary] = useState(false);

  /**
   * Toggle the visibility of the order summary section.
   */
  const toggleOrderSummary = () => {
    setOrdersummary(!ordersummary);
  };

  return (
    <>
      <div className="flex flex-col py-5 px-[10px] tab:p-[30px] bg-white rounded-[10px]">
        <div className={`flex cursor-pointer flex-col xl:flex-row gap-5 xl:items-center ${ordersummary ? "tab:border-b-[1px] border-blue_gray_50 tab:pb-[30px] tab:mb-[30px]" : ""}`}>
          <div onClick={toggleOrderSummary} className="max-w-[554px] w-full">
            {/* Checkbox to toggle order summary visibility */}
            <Checkbox checked={ordersummary} Setchecked={setOrdersummary} value="Order Summary" />
          </div>
          <div className="hidden tab:flex gap-1">
            <h2 className="text_16_2 text-blue_gray_400 tab:whitespace-nowrap">Order information will be sent to</h2>
            <h2 className="text-[16px] leading-[22px] font-medium text-blue_gray_600">dummyemail@gmail.com</h2>
          </div>
          <button className="tab:block hidden py-[10px] text-start tab:text-center px-[16px] uppercase bg-transparent text-light_primary border-[1px] border-none transition-all duration-[0.5s] hover:bg-light_primary hover:bg-opacity-[0.1] rounded-md">
            {/* Button to change email */}
            Change
          </button>
        </div>
        <div className={`${ordersummary ? "flex flex-col max-[991px]:gap-[10px]" : "hidden"}`}>
          {/* Render list of products in the order summary */}
          {Productsdata?.slice(0, 2).map((item, index) => (
            <Fragment key={Date.now() + index}>
              <DealsCard card="horizontal" data={item} />
            </Fragment>
          ))}
          <div className="justify-center md:justify-end flex pt-5 md:pt-[30px] w-full">
            {/* Button to continue with the order */}
            <Button className="w-full md:max-w-[180px] md:w-full py-[14px] px-[18px] text_18" varient="primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
