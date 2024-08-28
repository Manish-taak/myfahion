import Image from "next/image";
import React from "react";

/**
 * ExploreCard component.
 * 
 * Displays a card showcasing an image of a product, its category, and discount information.
 * 
 * @component
 * @returns {JSX.Element} The rendered ExploreCard component.
 */
const ExploreCard = () => {
  return (
    <div className="border-[1px] p-[10px] md:p-5 w-full rounded-t-[40px] ">
      <div className=" flex justify-center items-center  w-full pt-[5px] pb-[13px] md:py-[19px]  bg-light_primary_shades_4p rounded-t-[40px] ">
        <Image src={"/images/bluetShirt.png"} className="w-full" width={284} height={362} alt="shirts"/>
      </div>
      <div className=" pt-[10px] md:pt-[16px] text-center ">
        <h2 className="text_24_16 text-blue_gray_700  pb-[2px] md:pb-[4px]">
          T-Shirts
        </h2>
        <h3 className="text_16_1_12 text-light_primary ">Get Upto 40% Off</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
