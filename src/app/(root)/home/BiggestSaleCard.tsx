"use client";
import React from "react";
import Swipercardsectioncommon from "@/components/Swiper";
import { useRouter } from "next/navigation";
import biggestsalecard from "@/json/biggestsalecard.json";

/**
 * BiggestSaleCard component displays a section with a swiper displaying cards from biggestsalecard.json.
 *
 * @returns {JSX.Element} JSX for rendering the BiggestSaleCard component.
 */
const BiggestSaleCard = () => {
  const router = useRouter();

  return (
    <>
      <div className="container">
        <div className="py-10 md:py-[60px] xl:py-[80px]">
          <div>
            {/* Swiper Component for Biggest Sale Cards */}
            <Swipercardsectioncommon
              SaleCard={biggestsalecard} // Data for the swiper cards
              pagination={true} // Enable pagination
              card={"biggestsalecard"} // Type of swiper cards
              autoplay={true} // Enable autoplay
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiggestSaleCard;
