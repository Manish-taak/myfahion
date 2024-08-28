// CouponCard.tsx
import { couponcardprops } from "@/interFaces/type";
import React from "react";

/**
 * CouponsCard component.
 * 
 * Renders a card displaying coupon details.
 * 
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.discount - The discount percentage.
 * @param {string} props.extraDiscount - Extra discount information.
 * @param {string} props.maxDiscount - Maximum discount information.
 * @param {string} props.expiryDate - Expiry date of the coupon.
 * @returns {JSX.Element} The rendered CouponsCard component.
 */
const CouponsCard: React.FC<couponcardprops> = ({
    discount,
    extraDiscount,
    maxDiscount,
    expiryDate,
}) => {
    return (
        <div className="p-[10px] md:p-5 flex gap-x-2 md:gap-x-5 border-[1px] border-blue_gray_50 rounded-lg">
            <h4 className="text-light_secondary_main text_24_20">
                {discount} <br />
                <span className="text-light_secondary_main text_20_14">
                    Off
                </span>
            </h4>
            <div className="flex flex-col gap-y-2 md:gap-y-[14px]">
                <p className="text-blue_gray_400 text_20_12">
                    Get extra {extraDiscount} off upto {maxDiscount} on 1 item(s) (price inclusive of
                    cashback/coupon)
                </p>
                <p className="text-blue_gray_600 text_16_1_12">
                    Expire on :- {expiryDate}
                </p>
            </div>
        </div>
    );
};

export default CouponsCard;
