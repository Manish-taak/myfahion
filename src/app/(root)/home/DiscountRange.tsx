"use client";
import React from "react";
import Swipercardsectioncommon from "@/components/Swiper";
import similarproductscard from "@/json/similarproductscard.json";

/**
 * DiscountRange component renders a section with a swiper card displaying similar products.
 * @returns {JSX.Element} JSX element of the DiscountRange component.
 */

const DiscountRange = () => {
  return (
    <>
      <div className="container py-10 md:py-[60px] lg:py-20">
        {/* Swiper section for displaying similar products */}
        <Swipercardsectioncommon
          pagination={true} // Enable pagination
          autoplay={true} // Enable autoplay
          SimilarProduct={similarproductscard} // Data for similar products
          card="similarproductscard" // Card type for styling
        />
      </div>
    </>
  );
};

export default DiscountRange;
