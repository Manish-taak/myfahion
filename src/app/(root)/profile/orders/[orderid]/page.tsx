
"use client";

import ReturnItem from "@/components/popup/ReturnItem";
import WriteReview from "@/components/popup/WriteReview";
import Overlay from "@/components/ui/Overlay";
import Ordercard from "@/components/ui/OrderCard";
import Icons from "@/icons/Index";
import React, { useRef, useState } from "react";

import { orderdetails } from "@/interFaces/type";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 * Component to display order details including customer information, order summary, and status.
 * @param {orderdetails} props - Props object containing order details, className, and closebtn function.
 * @returns {JSX.Element} OrderDetails component.
 */
const OrderDetails = ({ orderdatils, className, closebtn }: orderdetails) => {
  //states to manage popups 
  const [showOverlay, setShowOverlay] = useState(false);
  const [returnpopup, setreturnpopup] = useState(false);
  const [writepopup, setwritepopup] = useState(false);
  const popupRef = useRef(null);

  /**
   * Closes all popups and overlay.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setreturnpopup(false);
    setwritepopup(false);
  };

  /**
   * Opens the write review popup and shows overlay.
   */
  const openwritepopup = () => {
    setwritepopup(true);
    setShowOverlay(true);
  };

  /**
   * Opens the return item popup and shows overlay.
   */
  const openreturpopup = () => {
    setreturnpopup(true);
    setShowOverlay(true);
  };

  // Handle outside click to close popups
  useOutsideClick(popupRef, closePopup);

  return (
    <>
      {/* HTML Structure Comment: Main container for order details */}
      <div className={` ${className} flex flex-col rounded-[14px] tab:gap-[30px] w-full max-[991px]:overflow-scroll max-[991px]:h-[100vh] `}>
        {/* Write Review Popup */}
        {writepopup && (
          <WriteReview
            closepopup={closePopup}
            heading="Write Review"
            buttontext="Submit Review"
            ref={popupRef}
          />
        )}
        {/* Return Item Popup */}
        {returnpopup && <ReturnItem closepopup={closePopup} ref={popupRef} />}
        {/* Overlay */}
        {showOverlay && <Overlay isOpen={true} />}
        {/* Top Header Section */}
        <div className={` ${orderdatils > 0 ? "fixed right-0 left-0 top-0" : "static"} bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] min-[991px]:hidden py-[20px] px-[16px] flex gap-[14px] items-center justify-between`}>
          <h2 onClick={closebtn} className="text_20 text-blue_gray_600 flex items-center gap-x-[14px]">
            <Icons type="leftarrowback" />
            My Orders
          </h2>
          <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" />
        </div>
        {/* Order Details Content */}
        <div className="max-[991px]:pt-[90px] max-[991px]:pb-5  max-[991px]:px-4  flex flex-col gap-[30px] max-[991px]:bg-hf_extra ">
          {/* Customer Information and Order Summary */}
          <div className="flex flex-col md:p-[30px] bg-white rounded-[14px] max-[768px]:p-4 ">
            <h2 className="text_24 text-blue_gray_800 ">Order Details</h2>
            <span className="border-[1px] border-blue_gray_50 my-5 md:my-[30px]"></span>
            <div className="flex gap-[20px] md:gap-[30px] flex-col md:flex-row  ">
              {/* Customer Details */}
              <div className="flex  flex-col w-full ">
                {/* Customer Name and Work Button */}
                <div className="flex justify-between gap-[10px] w-full pb-4  md:pb-[20px] ">
                  <span className="text_20_16 text-blue_gray_700 ">
                    Raj Kumar
                  </span>
                  <button className="bg-[#02a77d14] text-light_secondary_main py-[4px] px-4 rounded-[13px]">
                    Work
                  </button>
                </div>
                {/* Customer Mobile Number */}
                <div className="pb-[10px]">
                  <p className="text_16_2_10 text-blue_gray_300 md:text-blue_gray_600 pb-1 ">
                    Mobile :-
                  </p>
                  <p className="text_16_1_12 text-blue_gray_400 ">
                    +91 12345 67890
                  </p>
                </div>
                {/* Customer Address */}
                <div>
                  <p className="text_16_2_10 text-blue_gray_300 md:text-blue_gray_600 pb-1 ">
                    Address :-
                  </p>
                  <p className="text_16_1_12 text-blue_gray_400 ">
                    3rd Floor, Sarv Elanza Building, Hanumangarh Rd, Abohar,
                    Punjab 152116
                  </p>
                </div>
              </div>
              {/* Order Summary */}
              <div className=" p-[10px] md:px-5 md:py-0  w-full md:max-w-[345px]  max-[768px]:bg-hf_extra rounded-[4px]  ">
                <h2 className="text_20_16 text-blue_gray_700 pb-4 ">
                  Order Summary
                </h2>
                {/* Summary Details */}
                <div className="flex flex-col  gap-[10px] md:gap-[14px] border-b-[1px] border-blue_gray_100 pb-[10px] md:pb-[14px] ">
                  {/* Product Price */}
                  <div className="flex justify-between ">
                    <h3 className="text_16_2_14 text-blue_gray_400 ">
                      Product Price (2 items)
                    </h3>
                    <span className="text_16_2_14 text-blue_gray_600 ">
                      $40.00
                    </span>
                  </div>
                  {/* Discount */}
                  <div className="flex justify-between ">
                    <h3 className="text_16_2_14 text-blue_gray_400 ">
                      Discount
                    </h3>
                    <span className="text_16_2_14 text-light_primary ">
                      - $20.00
                    </span>
                  </div>
                  {/* Delivery Charges */}
                  <div className="flex justify-between ">
                    <h3 className="text_16_2_14 text-blue_gray_400 ">
                      Delivery Charges
                    </h3>
                    <span className="text_16_2_14 text-blue_gray_600 ">
                      Free
                    </span>
                  </div>
                </div>
                {/* Total Amount */}
                <div className="flex justify-between pt-2">
                  <h3 className="text_20_16 text-blue_gray_600"> Total</h3>
                  <h3 className="text_20_16 text-blue_gray_600"> $22.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Order Status Section */}
          <div className="p-4 md:p-[30px] flex flex-col rounded-[14px] bg-white ">
            {/* Order Status Header */}
            <div className="flex  md:flex-row flex-col  gap-3 md:gap-4  justify-start md:justify-between  items-start md:items-center ">
              <h2 className="text_24_20 text-blue_gray_800">
                Order Returned on 15 Aug, 2022
              </h2>
              <button className=" hidden tab:flex gap-[6px] py-[10px] px-4 items-center hover:bg-hf_image rounded-md">
                <Icons type="downloadinvoice" />
                <p className="uppercase text_16_3 text-blue_gray_400  whitespace-nowrap ">
                  download invoices
                </p>
              </button>
              <span className=" tab:hidden text_14_1 text-blue_gray_400">
                Order Id :- 406-3038990-1200318
              </span>
            </div>
            <span className="border-[1px] border-blue_gray_50  my-5 md:my-[30px]"></span>
            {/* Order Card */}
            <Ordercard
              tittle={"Men Regular Fit Printed Casual Shirt."}
              size={"Large"}
              color={"Navy Blue"}
              colorvarient={"#0288D1"}
              price={"$65.00"}
              currentposition={"Delivered On (28 Aug, Saturday)"}
              description={"Your item has been successfully delivered"}
              orderdetail={"406-3038990-1200318"}
              imgpath={"orderimage2.png"}
              refunddetail={"refunded details"}
              Rateproduct={true}
              Returnproduct={true}
              helpproduct={true}
              orderid={true}
              refundid={false}
              openwritepopup={openwritepopup}
              openreturpopup={openreturpopup}
            />
            <span className=" tab:hidden border-[1px] border-blue_gray_50  my-[20px]"></span>
            {/* Order Progress Section */}
            <div className="md:p-[30px] flex flex-col">
              <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className="grid gap-6 row-gap-10">
                  <div className="tab:flex">
                    {/* Order Confirmed section */}
                    <div className="flex tab:flex-col w-full">
                      <div className="flex flex-col items-center mr-4 gap-[2px] tab:flex-row">
                        {/* Checkmark icon */}
                        <div className="p-[2px] bg-light_secondary_main flex justify-center items-center rounded-[50%] w-[24px] h-[24px]">
                          <Icons type="checkedicon" />
                        </div>
                        {/* Vertical line */}
                        <div className="w-[2px] h-full bg-light_secondary_main tab:h-[2px] tab:w-full tab:max-w-[100%]"></div>
                      </div>
                      <div className="max-[991px]:pt-1 max-[991px]:pb-8">
                        <p className="text_14_1 text-blue_gray_600">
                          Order Confirmed
                        </p>
                        <p className="text-gray-700 tab:hidden">
                          All recipes are written using certain conventions,
                          which define the characteristics of common
                          ingredients. The rules vary from place to place.
                        </p>
                      </div>
                    </div>
                    {/* Shipped section */}
                    <div className="flex tab:flex-col w-full">
                      <div className="flex flex-col items-center mr-4 gap-[2px] tab:flex-row">
                        {/* Checkmark icon */}
                        <div className="p-[2px] bg-light_secondary_main flex justify-center items-center rounded-[50%] w-[24px] h-[24px]">
                          <Icons type="checkedicon" />
                        </div>
                        {/* Vertical line */}
                        <div className="w-[2px] h-full bg-light_secondary_main tab:h-[2px] tab:w-full tab:max-w-[100%]"></div>
                      </div>
                      <div className="max-[991px]:pt-1 max-[991px]:pb-8">
                        <p className="text_14_1 text-blue_gray_600">
                          Shipped
                        </p>
                        <p className="text-gray-700 tab:hidden">
                          All recipes are written using certain conventions,
                          which define the characteristics of common
                          ingredients. The rules vary from place to place.
                        </p>
                      </div>
                    </div>
                    {/* Out For Delivery section */}
                    <div className="flex tab:flex-col w-full">
                      <div className="flex flex-col items-center mr-4 gap-[2px] tab:flex-row">
                        {/* Checkmark icon */}
                        <div className="p-[2px] bg-light_secondary_main flex justify-center items-center rounded-[50%] w-[24px] h-[24px]">
                          <Icons type="checkedicon" />
                        </div>
                        {/* Vertical line */}
                        <div className="w-[2px] h-full bg-light_secondary_main tab:h-[2px] tab:w-full tab:max-w-[100%]"></div>
                      </div>
                      <div className="max-[991px]:pt-1 max-[991px]:pb-8">
                        <p className="text_14_1 text-blue_gray_600">
                          Out For Delivery
                        </p>
                        <p className="text-gray-700 tab:hidden">
                          All recipes are written using certain conventions,
                          which define the characteristics of common
                          ingredients. The rules vary from place to place.
                        </p>
                      </div>
                    </div>
                    {/* Delivered section */}
                    <div className="flex tab:flex-col w-[61px]">
                      <div className="flex flex-col items-center mr-4 gap-[2px] tab:flex-row">
                        {/* Checkmark icon */}
                        <div className="p-[2px] bg-light_secondary_main flex justify-center items-center rounded-[50%] w-[24px] h-[24px]">
                          <Icons type="checkedicon" />
                        </div>
                      </div>
                      <div className="max-[991px]:pt-1 max-w-[991px]:pb-8">
                        <p className="text_14_1 text-blue_gray_600">
                          Delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Divider line */}
              <span className="border-[1px] border-blue_gray_50 my-[20px] tab:block hidden"></span>
              {/* Additional info (hidden on smaller screens) */}
              <div className="tab:flex hidden gap-[30px] justify-between">
                <div>
                  <h3 className="text_14_1_10 text-blue_gray_400">
                    Item has been dispatched from the seller warehouse
                  </h3>
                  <h3 className="text_14_1_10 text-blue_gray_400">
                    18 Aug, 2022
                  </h3>
                </div>
                <div>
                  <h3 className="text_14_1_10 text-blue_gray_400">
                    Order Delivered
                  </h3>
                  <h3 className="text_14_1_10 text-blue_gray_400">
                    22 Aug, 2022
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
