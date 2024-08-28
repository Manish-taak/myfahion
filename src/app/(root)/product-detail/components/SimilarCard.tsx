
import React from 'react';
import "swiper/css";
import Swipercardsectioncommon from '@/components/Swiper';
import OffersOnSimilarProducts from "@/json/OffersOnSimilarProducts.json";

/**
 * Component for displaying similar products with offers.
 * @returns {JSX.Element} SimilarCard component JSX.
 */

const SimilarCard = () => {
  return (
    <>
      {/* Container for SimilarCard component */}
      <div className="max-[768px]:bg-hf_extra">
        {/* Swiper component for displaying similar products */}
        <Swipercardsectioncommon
          OffersOnSimilarProducts={OffersOnSimilarProducts}
          card="OffersOnSimilarProducts"
          smtext="Similar Products"
          pagination={true}
          lgtext="Best Offers On Similar Products"
          topbtn={true}
          lgtextclass="max-[768px]:text-[32px] max-[991px]:text-[41px]"
          headingmainclass="justify-center md:justify-between text-center md:text-start md:items-center pb-[30px] md:pb-[60px]" />
      </div>
    </>
  );
};

export default SimilarCard;
