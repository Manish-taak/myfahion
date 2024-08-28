

import Headingsection from "@/components/HeadingSection";
import Swipercardsectioncommon from "@/components/Swiper";
import React from "react";
import Productdata from "@/json/products.json";
import Products from "@/json/products.json";
import Button from "@/components/ui/Button";
import FeaturedCard from "@/components/ui/FeaturedCard";

/**
 * ProductFeatureCard component displays featured and recently visited products,
 * using different layouts for desktop and mobile views.
 * 
 * @returns {JSX.Element} The product feature card component
 */
const ProductFeatureCard = () => {
  return (
    <>
      <div className="md:block hidden py-[40px] md:py-[80px] ">
        {/* Swiper section for desktop view */}
        <Swipercardsectioncommon
          cardData={Productdata}
          smtext="Featured"
          lgtext="Recently Visited Products"
          topbtn={true}
          headingmainclass="justify-between items-center pb-[30] md:pb-[60px]"
          card="FeaturedCard"
        />
      </div>
      <div className="md:hidden py-[40px]">
        {/* Heading section for mobile view */}
        <Headingsection
          smtext="Featured"
          lgtext="Recently Visited Products"
          headingmainclass="justify-center pb-[30px]"
          testclass="text-center"
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-[13px]">
          {Products.map((item: any, index: number) => {
            return (
              <div key={Date.now() + index}>
                {/* Featured product card for mobile view */}
                <FeaturedCard card="vertical" data={item} star={false} />
              </div>
            );
          })}
        </div>
        {/* View More Products button */}
        <Button
          varient="primary"
          className="w-full mt-[30px] py-[10px] px-4 text_16_3"
        >
          View More Products
        </Button>
      </div>
    </>
  );
};

export default ProductFeatureCard;
