"use client"

import React, { Fragment, useRef, useState } from "react";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import Overlay from "@/components/ui/Overlay";
import Button from "@/components/ui/Button";
import Icons from "@/icons/Index";
import Image from "next/image";
import ChooseColor from "@/json/ChooseColorproductsdetails.json";
import Offers from "@/components/popup/Offers";
import Sizechart from "@/components/popup/SizeChart";

/**
 * AboutProduct component renders detailed information and options about a product.
 *
 * @returns {JSX.Element} The rendered AboutProduct component.
 */
const AboutProduct = () => {
  // state to manage product quantity
  const [quantity, setquantity] = useState(1);
  // state to manage size
  const [size, setSize] = useState(false);
  // state to manage overlay
  const [overlay, setOverlay] = useState(false);
  //  state to manager offer popup
  const [offer, setOffer] = useState(false);
  // state to manage active 
  const [active, setactive] = useState(false);
  // state to manage border 
  const [border, setborder] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);
  // sizechart popup
  const sizechartopen = () => {
    setSize(true);
    setOverlay(true);
  };
// offer popup
  const offerpopup = () => {
    setOffer(true);
    setOverlay(true);
  };
// closepopup
  const closepopup = () => {
    setSize(false);
    setOverlay(false);
    setOffer(false);
  };
  // closepopup on outsideclick
  useOutsideClick(popupRef, closepopup);

  return (
    <>
      {overlay && <Overlay isOpen={true} />}
      {size && <Sizechart closepopup={closepopup} ref={popupRef} />}
      {offer && <Offers closepopup={closepopup} ref={popupRef} />}

      {/* Product Details Section */}
      <div className="flex flex-col-reverse min-[1250px]:flex-col gap-y-[6px] md:gap-y-[10px] mt-5 p-2 md:p-0">
        <div className="flex justify-between items-baseline">
          <h2 className="text_34_16 text-blue_gray_700">
            Mens Printed Half Sleeves T-Shirt Limited...
          </h2>
          <div className="hidden lg:flex relative flex-col items-center group">
            {/* Share Button */}
            <button
              onClick={() => setactive(!active)}
              className="flex gap-x-[6px] py-2 px-4 rounded-[50px] border-[1px] text-blue_gray_300 transition-all hover:border-blue_gray_100"
            >
              <Icons type="share" /> Share
            </button>
            <div
              className={` ${active === true ? "visible opacity-100" : "invisible opacity-0"
                } absolute duration-300 rounded-md right-[-15px]  p-2 top-[43px] min-[1672px]:right-[-41px] bg-white shadow-md mt-4 `}
            >
              {/* Social Media Icons */}
              <div className="flex gap-x-2">
                <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                  <Icons className="w-[18px] h-[18px]" type="facebook" />
                </div>
                <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                  <Icons className="w-[18px] h-[18px]" type="insta" />
                </div>
                <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                  <Icons className="w-[18px] h-[18px]" type="twiter" />
                </div>
                <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                  <Icons className="w-[18px] h-[18px]" type="pinterest" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex gap-x-1">
          <div className="flex items-center">
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="star" />
          </div>
          <h5 className="md:text-blue_gray_400 text_20_12 text-blue_gray_600">
            15 Ratings & 8 Reviews
          </h5>
        </div>
      </div>

      {/* Product Information Section */}
      <div className="flex flex-col mt-[6px] gap-y-[6px] md:gap-y-[34px]">
        {/* Price and Stock Section */}
        <div className="flex gap-x-[10px] md:mt-[30px] items-center p-2 md:p-0">
          <h1 className="text_48_20 text-blue_gray_900">$ 20.00</h1>
          <p className="text_20_12 text-blue_gray_200 ">
            <del>$32.00</del>
          </p>
          <p className="text_20_14 text-blue_gray_500">(15% Off)</p>
          <p className="text-light_success_main border-2 text-[13px] leading-[18px] border-light_success_main rounded-[18px] py-1 px-3">
            in Stock
          </p>
        </div>

        {/* Color Selection Section */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-x-[10px] p-2 md:p-0">
          <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
            Choose Color:
          </h5>
          <div className="flex items-center max-[1024px]:gap-x-[5.4px] min-[1300px]:gap-x-[10px] mt-[10px] md:mt-0">
            {ChooseColor.map((item, index) => {
              return (
                <Fragment key={Date.now() + index}>
                  <div className="cursor-pointer group">
                    <div
                      onClick={() => setborder(index)}
                      className={`rounded-[4px] md:mx-[10px] p-[6px] max-w-[60px] bg-blue_gray_50 border-[1px] transition-all group-hover:border-light_primary  ${border === index
                        ? "border-[1px] border-light_primary"
                        : null
                        }`}
                    >
                      <Image
                        width={54}
                        height={47}
                        className={`max-h-[54px] w-full`}
                        src={`/images/${item.image}`}
                        alt="color"
                      />
                    </div>
                    <p className={`mt-1 text-center text_14_1 hidden lg:block text-blue_gray_200 relative no-underline group-hover:text-blue_gray_800 before:content-[''] before:absolute before:block before:w-full before:h-[1px] before:bg-black before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 group-hover:before:scale-x-50 ${border === index
                      ? " relative no-underline before:content-[''] before:absolute before:block before:w-full before:h-[1px] before:bg-black before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-50 before:left-0 before:bottom-0 text-blue_gray_800"
                      : null
                      }`}>
                      {item.productsname}
                    </p>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Size Selection Section */}
        <div className="flex items-center justify-between lg:justify-normal p-2 md:p-0">
          <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start ">
            Choose Size:
          </h5>
          <div className="hidden 2xl:block">
            <div className=" flex gap-x-5">
              <h6 className=" cursor-pointer text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                S
              </h6>
              <h6 className=" cursor-pointer text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                M
              </h6>
              <h6 className=" cursor-pointer text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                L
              </h6>
              <h6 className=" cursor-pointer text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                XL
              </h6>
              <h6 className=" cursor-pointer text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                XXL
              </h6>
              <h6 className=" cursor-pointer text_16_3 text-blue_gray_400 py-[14px] px-5 ">
                XXXL
              </h6>
            </div>
          </div>
          <div className="hover:bg-light_primary hover:bg-opacity-[0.1] rounded-md">
            <div
              onClick={sizechartopen}
              className="uppercase py-[10px] px-4 flex gap-2 items-center cursor-pointer text-light_primary text_16_2_12"
            >
              Size Chart
              <Icons type="darkrightarrow" className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Add to Cart and Buy Now Buttons (Mobile View) */}
        <div className="flex md:hidden gap-[13px] py-[10px] bg-white">
          <Button
            navroute="/cart"
            varient="thirdly"
            className="w-full rounded-lg py-[10px] px-4 md:py-4 md:px-6 text_20_16"
          >
            Add to cart
          </Button>
          <Button
            navroute="/checkout"
            varient="primary"
            className="w-full rounded-lg py-[10px] px-4 md:py-4 md:px-6 text_20_16"
          >
            Buy Now
          </Button>
        </div>

        {/* Quantity Selection Section */}
        <div className="flex flex-col md:flex-row p-2 md:p-0">
          <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
            Quantity:
          </h5>
          <div className="flex max-w-[106px] items-center gap-x-[6px] py-1 px-[6px] border-[1px] border-blue_gray_50 rounded-[30px] mt-[10px] lg:mt-0">
            <div
              className="border-[1px] transition-all duration-300 border-transparent hover:border-light_primary p-1 h-[30px] rounded-full flex items-center max-w-[30px] justify-center w-full cursor-pointer group"
              onClick={() => {
                if (quantity <= 1) {
                  return;
                } else {
                  setquantity(quantity - 1);
                }
              }}
            >
              {/* svg icon type minus */}
              <Icons
                type="minus"
                className="rounded-[120px] fill-blue_gray_100 group-hover:fill-light_primary"
              />
            </div>
            <p className="text-blue_gray_400 w-[30px] text-center">
              {quantity}
            </p>
            <div
              className="border-[1px] transition-all duration-300 border-transparent hover:border-light_primary p-1 rounded-full cursor-pointer group"
              onClick={() => {
                if (quantity !== 3) {
                  setquantity(quantity + 1);
                } else {
                  return;
                }
              }}
            >
              {/* svg icon type */}
              <Icons
                type="plus"
                className="rounded-[120px] fill-blue_gray_100 group-hover:fill-light_primary"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-2 md:p-0">
          {/* Heading for Offers section */}
          <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
            Offers:
          </h5>

          <div className="flex flex-col gap-y-[6px] mt-[10px] md:mt-0">
            {/* Offer 1 */}
            <p className="flex flex-col lg:flex-row text-blue_gray_500 gap-x-[6px] border-b-[1px] mb-[6px] pb-[6px] lg:border-none lg:mb-0 lg:pb-0">
              <span className=" text-blue_gray_700 text_14_1_12 flex items-center">
                {/* Offer icon */}
                <Icons type="Offertag" className="mr-[6px]" />
                Special Offer
              </span>
              Claim Extra 10% Off Above Rs. 599 (Only on First Purchase)
            </p>

            {/* Offer 2 */}
            <p className="flex  flex-col lg:flex-row text-blue_gray_500 gap-x-[6px] border-b-[1px] mb-[6px] pb-[6px] lg:border-none lg:mb-0 lg:pb-0">
              <span className=" text-blue_gray_700 text_14_1_12 flex items-center">
                {/* Offer icon */}
                <Icons type="Offertag" className="mr-[6px]" />
                Special Offer
              </span>
              Get Extra 10% off on Full Swipe purchases through ICICI Bank Cards.
            </p>

            {/* Offer 3 */}
            <p className="flex  flex-col lg:flex-row text-blue_gray_500 gap-x-[6px] border-b-[1px] mb-[6px] pb-[6px] lg:border-none lg:mb-0 lg:pb-0">
              <span className=" text-blue_gray_700 text_14_1_12 flex items-center">
                {/* Offer icon */}
                <Icons type="Offertag" className="mr-[6px]" />
                Special Offer
              </span>
              Get Extra 15% off on HDFC Bank.
            </p>

            {/* See more offers link */}
            <p
              onClick={offerpopup}
              className="text_14_2 text-[#B0BEC5] cursor-pointer mt-1"
            >
              +See More Offers
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row">
          {/* Heading for Check Eligibility section */}
          <h5 className="text_16_2_14 text-blue_gray_600 max-w-[135px] w-full text-start">
            Check Eligibility:
          </h5>

          <div className="flex flex-col 2xl:flex-row">
            <div className="lg:mr-[30px]">
              <div className="flex border-[1px] rounded-md border-blue_gray_100 py-[14px] px-4 items-center justify-between max-w-[550px]">
                {/* Pincode input field */}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="000000"
                  className="outline-none text-[#607D8B] placeholder:text-[#607D8B] placeholder:text_16_1"
                />
                {/* Check button */}
                <p className="text-light_primary text_14_1_12 cursor-pointer">
                  Check
                </p>
              </div>
              <p className="text_14_1_12 text-blue_gray_300 mt-[10px]">
                Enter Pincode For Check Availability
              </p>
            </div>

            <div className="flex gap-x-[6px] md:gap-x-[10px] border-t-[1px] lg:border-none mt-3 pt-3 lg:pt-0 lg:my-0">
              {/* Assurance Icons and Text */}

              {/* 100% Original Products */}
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                <Icons type="Surity" />
                <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                  100% Original Products
                </h5>
              </div>

              {/* 14 Days Easy Return Policy */}
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                <Icons type="Return" />
                <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                  14 Days Easy Return Policy
                </h5>
              </div>

              {/* Cash On Delivery Available */}
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-x-2 bg-light_primary_shades_4p xl:bg-white">
                <Icons type="Delhivery" />
                <h5 className="text_14_1_10 text-blue_gray_500 text-center xl:text-start">
                  Cash On Delivery Available
                </h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutProduct;
