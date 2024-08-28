import React, { Fragment, useState } from "react";
import Swiper from "./Swiper";
import Productsdata from "@/json/products.json";
import FeaturedCard from "./ui/FeaturedCard";
import Headingsection from "./HeadingSection";
import Button from "./ui/Button";
import Link from "next/link";

const FeaturedSection = () => {
  return (
    <>
      <div className="container">
        <div className="md:block hidden py-[40px] md:py-[80px] ">
          <Swiper
            cardData={Productsdata}
            smtext="Featured"
            lgtext="Featured Products"
            topbtn={true}
            headingmainclass="justify-between items-center pb-[30px] md:pb-[60px] "
            card="FeaturedCard"
          />
        </div>
        <div className=" md:hidden bg-hf_extra py-[40px]">
          <Headingsection
            smtext="Featured"
            lgtext="Featured Products"
            headingmainclass="justify-center  pb-[30px]"
            testclass="text-center"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2  gap-[13px]">
            {Productsdata.map((item: any, index: number) => {
              return (
                <Fragment key={Date.now() + index}>
                  <FeaturedCard card="vertical" data={item} star={false} />
                </Fragment>
              );
            })}
          </div>
          <Button
            varient="primary"
            className="py-[10px] px-4 text_16_3 mt-[30px] w-full "
          >
            View More Products
          </Button>
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;
