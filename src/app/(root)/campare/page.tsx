

/**
 * @fileoverview Compare Products Page Component
 * 
 * This component displays a comparison table for products, including their images,
 * details, and a popup for confirmation when removing a product. It uses various 
 * UI components and hooks to manage the popup state and handle outside clicks.
 */

"use client";
import React, { Fragment, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Icons from "@/icons/Index";
import comparecard from "@/json/comparecard.json";
import Image from "next/image";
import Areyousure from "@/components/popup/AreYouSure";
import Overlay from "@/components/ui/Overlay";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

const Page = () => {
  // state to manage delete popup
  const [deletepopup, setdeletepopup] = useState(false); 
  // state to mange overlay 
  const [showOverlay, setShowOverlay] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * Open the delete confirmation popup and show the overlay.
   */
  const opendeletepopup = () => {
    setdeletepopup(true);
    setShowOverlay(true);
  };

  /**
   * Close the delete confirmation popup and hide the overlay.
   */
  const closepopup = () => {
    setdeletepopup(false);
    setShowOverlay(false);
  };

  useOutsideClick(popupRef, closepopup);

  return (
    <>
      {showOverlay && <Overlay isOpen={true} />}
      {deletepopup && (
        <Areyousure
          heading="Are You Sure"
          tittle="are you sure you want to remove this product "
          buttontext="Yes , remove"
          closepopup={closepopup}
          cancelnewlist={closepopup}
          ref={popupRef}
        />
      )}
      <section className="mt-[148px] md:mt-[159px] ">
        {/* Breadcrumb for navigation */}
        <NextBreadcrumb />
        <div className="container">
          {/* Header Section */}
          <div className="py-[30px] md:block hidden ">
            <div className="flex gap-[12px] justify-between">
              <h2 className="text_34 text-blue_gray_800">Compare Products</h2>
              <div className="flex items-center gap-[63px]">
                <div className="switch">
                  {/* Checkbox for showing only differences */}
                  <input id="checkbox1" className="look" type="checkbox" />
                  <label htmlFor="checkbox1"></label>
                </div>
                <p className="text_16 text-blue_gray_500">Show Only Differences</p>
              </div>
            </div>
          </div>
          {/* Comparison Cards Section */}
          <div className="border-t-[1px] md:border-x-[1px] rounded-t-[10px] w-full pb-[20px] py-[20px]">
            <div className="grid grid-cols-2 md:grid-cols-3 m-auto gap-[13px] pt-[20px] md:p-0 max-w-[1185px] md:gap-[30px]">
              {comparecard?.map((item, index) => (
                <Fragment key={Date.now() + index}>
                  <div className="md:p-[20px] max-w-[375px]">
                    <div className="relative flex flex-col">
                      {/* Image Section */}
                      <div className="flex justify-center items-center">
                        <Image
                          width={213}
                          height={250}
                          className="w-full h-full xl:object-none"
                          src={`/images/${item?.image}`}
                          alt="image"
                        />
                        {/* Close Button */}
                        <div
                          onClick={opendeletepopup}
                          className="cursor-pointer shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] bg-white rounded-[50px] absolute hidden md:block top-[12px] right-[12px]"
                        >
                          <Icons
                            className="w-[32px] h-[32px] flex justify-center p-1 fill-light_primary opacity-30 hover:opacity-100 transition-all"
                            type="closecard"
                          />
                        </div>
                      </div>
                      {/* Product Info Section */}
                      <div className="flex flex-col gap-[10px] md:gap-[20px]">
                        <h3 className="text_20_16 text-blue_gray_700 pt-[20px] overflow-ellipsis whitespace-nowrap overflow-hidden">
                          {item.heading}
                        </h3>
                        <div className="md:hidden flex gap-[4px] items-center justify-center">
                          <Icons type="singleStar" />
                          <span className="text_12_1 text-blue_gray_400">4.5 (200)</span>
                        </div>
                        <div className="flex flex-wrap gap-[8px] items-center pb-[10px] justify-center md:justify-start">
                          <span className="text_24_14 text-blue_gray_700 md:text-blue_gray_800">
                            {item.price}
                          </span>
                          <span className="text-blue_gray_200 text_14_1_10">{item.discount}</span>
                          <span className="text-blue_gray_400 text-[12px] md:text-[16px] leading-[1.92px] font-normals">
                            {item.offer}
                          </span>
                        </div>
                        {/* Buy Now Button */}
                        <Button
                          varient="primary"
                          className="py-[10px] px-4 md:py-4 md:px-6 text_20_16"
                        >
                          BUY NOW
                        </Button>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
              {/* Add Product Card */}
              <div className="md:p-5">
                <div className="flex flex-col justify-end h-full">
                  <div className="h-[300px] md:h-full border border-light_text_secondary_shades_12p rounded-[10px] border-dashed bg-extra_bg"></div>
                  <button className="hover:bg-blue_gray_100 md:hover:bg-hf_extra flex text-blue_gray_400 md:text-light_secondary_main justify-center md:border-[1px] py-[16px] bg-blue_gray_50 md:bg-white rounded-[4px] border-light_secondary_main mt-[30px] md:mt-[40px]">
                    <Icons className="md:block hidden" type="plusgreen" />
                    ADD PRODUCT
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Comparison Table Section */}
          <div className="px-4 md:border-[1px] pt-[20px]">
            <table className="w-full">
              <tbody>
                {/* Rating Row */}
                <tr className="flex gap-[13px] md:gap-[30px] w-full">
                  <th className="py-[20px] max-w-[220px] w-full text-start text_16_1 text-blue_gray_800 lg:block hidden">
                    Rating -
                  </th>
                  <td className="w-full max-w-[375px] py-[10px] md:py-5 px-[6px] text-[12px] leading-3 font-medium md:text_16_1 text-blue_gray_400 md:text_16_1 text-center md:text-start flex items-center md:justify-start justify-center">
                    <Icons type="singleStar" /> 4.5 (200 Reviews)
                  </td>
                  <td className="w-full max-w-[375px] py-[10px] md:py-5 px-[6px] text-[12px] leading-3 font-medium md:text_16_1 text-blue_gray_400 md:text_16_1 flex items-center justify-center md:justify-start">
                    <Icons type="singleStar" /> 4.5 (200 Reviews)
                  </td>
                </tr>
                {/* Size Row */}
                <tr className="flex gap-[13px] md:gap-[30px] w-full">
                  <th className="md:py-[20px] max-w-[220px] w-full text-start text_16_1 text-blue_gray_800 lg:block hidden">
                    Size -
                  </th>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    L (Chest 32” - Shoulder 14”)
                  </td>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    L (Chest 32” - Shoulder 14”)
                  </td>
                </tr>
                {/* Delivery Time Row */}
                <tr className="flex gap-[13px] md:gap-[30px] w-full">
                  <th className="md:py-[20px] max-w-[220px] w-full text-start text_16_1 text-blue_gray_800 lg:block hidden">
                    Delivery Time -
                  </th>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    Free Delivery By 13 Sep, Tuesday.
                  </td>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    Free Delivery By 13 Sep, Tuesday.
                  </td>
                </tr>
                {/* Material Row */}
                <tr className="flex gap-[13px] md:gap-[30px] w-full">
                  <th className="md:py-[20px] max-w-[220px] w-full text-start text_16_1 text-blue_gray_800 lg:block hidden">
                    Material -
                  </th>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    100% Cotton
                  </td>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    100% Cotton
                  </td>
                </tr>
                {/* Replacement Row */}
                <tr className="flex gap-[13px] md:gap-[30px] w-full">
                  <th className="md:py-[20px] max-w-[220px] w-full text-start text_16_1 text-blue_gray_800 lg:block hidden">
                    Replacement -
                  </th>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    10 Days Replacemnt
                  </td>
                  <td className="w-full max-w-[375px] md:py-5 py-[10px] px-[6px] text-blue_gray_400 text-[12px] leading-3 font-medium md:text_16_1 text-center md:text-start">
                    10 Days Replacemnt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Video Section */}
          <div className="py-5 md:py-[80px]">
            <video
              className="h-[246px] md:h-auto w-full"
              poster="/images/poster.png"
              controls
            >
              <source
                src="/video/Mexico _ Hunar Sidhu _ Kali Kali Kha lene Aa _ Gauri Virdi _ Punjabi Songs 2023.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

    </>
  );
};

export default Page;
