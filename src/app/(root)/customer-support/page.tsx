"use client";
import Accordion from "@/components/Accordion";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import Button from "@/components/ui/Button";
import Policytittle from "@/components/ui/PolicyTittle";
import Icons from "@/icons/Index";
import React, { useState } from "react";

/**
 * Functional component representing the Customer Support page.
 * @returns JSX.Element
 */
const Page = () => {
  // state to manage active button
  const [activeButton, setActiveButton] = useState(0);

  // List of customer support tabs
  const customertabs = [
    "My Orders",
    "Products Help",
    "Payment Options",
    "Wallet Status",
    "Order Status",
    "Return Center",
    "Gift Cards",
    "Order Management",
    "Pricing",
    "Product Pricing",
    "Refund Help",
  ];

  return (
    <>
      <section className="mt-[159px]">
        {/* Header section */}
        <div className="py-5 md:py-[30px] bg-extra_bg">
          {/* Breadcrumbs and Policy Title */}
          <BreadCrumbs
            // data={BreadCrumbsdata}
            className="p-[0px_!important] hidden md:block"
            bgcolor="bg-extra_bg"
          />
          <Policytittle title="Customer Support" className="md:mt-[60px]" />
        </div>
        {/* Main content container */}
        <div className="container py-5 md:py-[30px] xl:pb-[80px]">
          {/* Search and title section */}
          <div className="hidden md:block">
            <div className="justify-between mb-[60px] flex">
              {/* Page title */}
              <h3 className="text-blue_gray_800 text_34_24 hidden lg:block">
                Customer Support
              </h3>
              {/* Search input and button */}
              <div className="flex lg:max-w-[510px] gap-x-5 w-full">
                <div className="py-3 px-[14px] border-[1px] border-blue_gray_50 rounded-md flex gap-x-[6px] w-full flex-row-reverse lg:flex-row items-center">
                  <input
                    className="placeholder:text-blue_gray_400 placeholder:text_16_2 w-full"
                    type="text"
                    placeholder="Type Here What You Want to Know?"
                  />
                  <Icons type="searchicond9" className="max-w-5 w-full" />
                </div>
                <Button varient="primary">Search</Button>
              </div>
            </div>
          </div>
          {/* Main content grid */}
          <div className="flex gap-x-[30px] md:mt-[60px] flex-col xl:flex-row">
            {/* Sidebar with customer support tabs */}
            <div className="flex flex-row gap-y-[10px] gap-x-[13px] p-[10px] xl:max-w-[240px] w-full xl:flex-col overflow-y-auto">
              {customertabs?.map((item, index) => (
                <h4
                  key={index}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                  className={`w-fit whitespace-nowrap cursor-pointer ${
                    activeButton === index
                      ? "text-[#F57E5D] xl:border-r-[1px] border-light_primary border-r-0  border-b-[1px] xl:border-b-0 pb-[10px]"
                      : "text-blue_gray_400"
                  } w-full py-[11px] px-2 text_16_3`}
                >
                  {item}
                </h4>
              ))}
            </div>
            {/* Content area based on active tab */}
            <div className="w-full mt-5 md:mt-0">
              {/* Render accordion based on active tab */}
              {activeButton === 0 && <Accordion />}
              {/* Placeholder for other tabs */}
              {activeButton > 0 && <>{activeButton}</>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
