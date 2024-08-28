import Icons from "@/icons/Index";
import React from "react";
import Image from "next/image";
import { carddetails } from "@/interFaces/type";

/**
 * PaymentCard component renders a payment card with bank name, card digits, expiry date, cardholder name,
 * and an option to remove the card.
 * 
 * @param {carddetails} props - Props containing bankname, digit1, digit2, digit3, digit4, expirymonth, expiryyear,
 * holdername, and className.
 * @returns {JSX.Element} - PaymentCard component UI.
 */
const PaymentCard = ({
  bankname,
  digit1,
  digit2,
  digit3,
  digit4,
  expirymonth,
  expiryyear,
  holdername,
  className,
}: carddetails) => {
  return (
    <>
      {/* Container for the payment card */}
      <div
        className={`py-4 px-[10px] md:p-5 xl:max-w-[375px] w-full rounded-[12px] flex flex-col gap-y-6 md:gap-y-[30px] ${className}`}
      >
        {/* Section for bank name and checkbox */}
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            {/* Checkbox for selecting the card */}
            <input type="checkbox" name="" id="" />
            <h4 className="text_24_16 text-blue_gray_400">{bankname}</h4>
          </span>
          {/* Bank logo */}
          <Image src={"/images/visa.png"} width={36} height={21} alt="image" />
        </div>
        {/* Section for card digits and expiry date */}
        <div className="flex items-center justify-between gap-x-[19px]">
          <span className="flex items-center gap-2 md:gap-x-4 justify-between md:max-w-[192px] w-full">
            {[digit1, digit2, digit3, digit4].map((digit, index) => (
              <p key={Date.now() + index} className="text-blue_gray_600 text_16_2">
                {digit}
              </p>
            ))}
          </span>
          <p className="text-blue_gray_600 text-20 flex items-center gap-x-1">
            <span className="text_16_1">Exp</span>
            {expirymonth}/{expiryyear}
          </p>
        </div>
        {/* Section for cardholder name and remove card option */}
        <div className="flex items-center justify-between">
          <h4 className="text_14_1 text-blue_gray_400 gap-x-2 capitalize">{holdername}</h4>
          <h4 className="flex items-center text_14_1 text-blue_gray_400 gap-x-2">
            {/* Icon for removing the card */}
            <Icons className="fill-[#B0BEC5]" type="delete" /> REMOVE CARD
          </h4>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
