import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ordercard } from "@/interFaces/type";

/**
 * OrderCard component displays details of an order or product in a structured card format.
 * 
 * @param {ordercard} props - Props object for configuring the OrderCard component.
 * @param {boolean} props.helpproduct - Boolean indicating whether help product link is visible.
 * @param {boolean} props.Returnproduct - Boolean indicating whether return product action is available.
 * @param {string} props.tittle - Title or name of the product/order.
 * @param {string} props.size - Size information related to the product/order.
 * @param {string} props.color - Color information related to the product/order.
 * @param {string} props.colorvarient - Color variant information related to the product/order.
 * @param {string} props.price - Price information related to the product/order.
 * @param {string} props.currentposition - Current status or position of the order/product.
 * @param {string} props.description - Description or additional details about the order/product.
 * @param {boolean} props.orderid - Boolean indicating whether order ID should be displayed.
 * @param {string} props.orderdetail - Detailed information related to the order.
 * @param {boolean} props.refundid - Boolean indicating whether refund ID should be displayed.
 * @param {string} props.refunddetail - Detailed information related to the refund.
 * @param {string} props.imgpath - Path to the image associated with the order/product.
 * @param {boolean} props.Rateproduct - Boolean indicating whether option to rate the product is visible.
 * @param {Function} props.openwritepopup - Function to handle opening a write popup for rating.
 * @param {Function} props.openreturpopup - Function to handle opening a return popup for returning the product.
 * @param {string} props.routeto - Route path for linking to more details or action related to the order/product.
 * @returns {JSX.Element} - OrderCard component UI.
 */
const OrderCard = ({
  helpproduct,
  Returnproduct,
  tittle,
  size,
  color,
  colorvarient,
  price,
  currentposition,
  description,
  orderid,
  orderdetail,
  refundid,
  refunddetail,
  imgpath,
  Rateproduct,
  openwritepopup,
  openreturpopup,
  routeto
}: ordercard) => {
  return (
    <>
      <div className="p-3 md:p-4 xl:p-5 w-full bg-white flex gap-2 md:gap-x-[30px] rounded-[10px] border-[1px] border-blue_gray_50 relative">
        {/* Link covering the entire card area, pointing to the specified route */}
        <Link href={`${routeto}`} className="absolute top-0 bottom-0 right-0 left-0 z-[1]"></Link>

        {/* Image container */}
        <div className="bg-extra_bg py-[8px] flex justify-center w-full max-w-[21.12vw] sm:max-w-[160px] h-[24.7vw] tab:h-[180px] rounded-[8px]">
          <Image
            src={`/images/${imgpath}`}
            className="max-[991px]:object-contain bg-extra_bg"
            alt="image"
            width={168}
            height={168}
          />
        </div>

        {/* Details section */}
        <div className="flex flex-col justify-center w-full overflow-hidden">
          {/* Title */}
          <h2 className="text_20_14 flex justify-between items-center flex-wrap">
            {tittle}
            {/* Conditionally show order ID */}
            <p className={`hidden tab:block text_14_1 text-blue_gray_400 ${orderid !== true ? "hidden" : "block"}`}>
              Order id :- {orderdetail}
            </p>
            {/* Conditionally show refund ID */}
            <p className={`hidden tab:block text_14_1 text-blue_gray_400 ${refundid == true ? "block" : "hidden"}`}>
              Return id :- {refunddetail}
            </p>
          </h2>

          {/* Additional details */}
          <div className="flex mt-2 md:mt-5 border-b-[1px] pb-2 border-blue_gray_50 mb-2 md:mb-5 md:pb-5 items-baseline max-[991px]:justify-between">
            {/* Color and Size */}
            <div className="hidden lg:block">
              <h4 className="text_14_1 text-blue_gray_400 border-r-[1px] border-blue_gray_50 pr-2 mr-2 flex items-center gap-x-1">
                <span>Color :</span>
                {color}
              </h4>
            </div>
            <div className="hidden lg:block">
              <h4 className="text_14_1 text-blue_gray_400 flex items-center gap-x-1">
                <span>Size :</span>
                {size}
              </h4>
            </div>
            {/* Price */}
            <h4 className="text_16_2_10 text-blue_gray_600 lg:ml-2 xl:ml-5 flex items-center gap-x-1">
              <span>Price :-</span>
              {price}
            </h4>
            {/* Option to rate the product */}
            <p onClick={openwritepopup} className={`tab:hidden cursor-pointer block text-light_secondary_main text_14_1_10 relative z-[2] ${Rateproduct === true ? "block" : "hidden"}`}>
              Rate This Product
            </p>
          </div>

          {/* Actions section */}
          <div className="flex justify-between flex-col min-[1330px]:flex-row items-start min-[1330px]:items-center">
            {/* Position and Description */}
            <div>
              <h4 className="text_14_1_12 text-blue_gray_600 flex items-center gap-x-2 whitespace-nowrap">
                <p style={{ background: `${colorvarient}` }} className="w-[10px] h-[10px] rounded-xl"></p>
                {currentposition}
              </h4>
              <p className="text_14_1 text-blue_gray_300 mt-[2px] hidden md:block">{description}</p>
            </div>
            {/* Action buttons */}
            <div className="flex items-center gap-x-5">
              {/* Option to rate the product (visible on larger screens) */}
              <p onClick={openwritepopup} className={`hidden tab:block cursor-pointer text-light_secondary_main text_14_1_10 relative z-[2] ${Rateproduct === true ? "block" : "hidden"}`}>
                Rate This Product
              </p>
              {/* Option to return the product */}
              <p onClick={openreturpopup} className={`cursor-pointer text-light_secondary_main text_14_1_10 relative z-[2] ${Returnproduct === true ? "block" : "hidden"}`}>
                Return Product
              </p>
              {/* Option to seek help related to the product */}
              <div>
                <Link href={"/profile/help-center"}>
                  <p className={`text-light_secondary_main text_14_1_10 relative z-[2] ${helpproduct === true ? "block" : "hidden"}`}>
                    Need Help
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
