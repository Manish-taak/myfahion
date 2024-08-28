"use client";

import Button from "@/components/ui/Button";
import Icons from "@/icons/Index";
import React, { useState } from "react";
import Products from "@/json/products.json";
import { SwiperSlide, Swiper } from "swiper/react";
import FeaturedCard from "@/components/ui/FeaturedCard";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AddonSection = () => {

  /**
   * Component that manages check state and toggles it on click.
   * 
   * @component
   */
  /**
   * State to keep track of the checked item.
   * @type {[number | null, React.Dispatch<React.SetStateAction<number | null>>]}
   */
  const [checkstate, setCheckstate] = useState<number | null>(null);

  /**
   * Toggles the check state. If the clicked item is already checked, uncheck it (set to null).
   * Otherwise, set the check state to the clicked item.
   * 
   * @param {any} item - The item to toggle.
   */
  const clickme = (item: any) => {
    setCheckstate(item === checkstate ? null : item);
  };

  return (
    <>
      <div className="">
        <div className="rounded-[12px] bg-extra_bg p-5 ">
          <h2 className="text_34_20 text-blue_gray_700 pb-6">Add On</h2>
          <div className="flex flex-col gap-[30px]  max-[1024px]:flex-col max-[1249px]:flex-row max-[1250px]:flex-col min-[1515px]:flex-row  ">
            {/* Swiper for small screens with navigation buttons */}
            <div className="lg:hidden block relative w-full">
              <Swiper
                navigation={{
                  nextEl: ".swiper-button-next-addon",
                  prevEl: ".swiper-button-prev-addon",
                }}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                modules={[Navigation, Pagination]}
                className="mySwiper tmb-swiper"
              >
                {Products.slice(0, 4).map((item) => (
                  <SwiperSlide key={item.id}>
                    {/* Featured Card vertical */}
                    <FeaturedCard
                      bg={"bg-extra_bg"}
                      custompaddingboxbottom="p-[10px] md:p-[0px]"
                      hoverEffect={false}
                      data={item}
                      card="vertical"
                      star={true}
                      checkbox={true}
                      checked={checkstate === item.id}
                      clickme={() => clickme(item.id)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Swiper for large screens with navigation buttons */}
            <div className="hidden lg:block w-[42vw]  min-[1510px]:max-w-[500px] min-[1620px]:max-w-[565px] relative">
              <Swiper
                navigation={{
                  nextEl: ".swiper-button-next-lg",
                  prevEl: ".swiper-button-prev-lg",
                }}
                pagination={true}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                modules={[Navigation]}
                className="mySwiper tmb-swiper"
              >
                {Products.slice(1, 5).map((item, index) => (
                  <SwiperSlide key={item.id || Date.now() + index}>
                    {/* Featured Card vertical */}
                    <FeaturedCard
                      bg={"bg-extra_bg"}
                      custompaddingboxbottom="p-[10px] md:p-[0px]"
                      hoverEffect={false}
                      data={item}
                      card="vertical"
                      star={true}
                      checkbox={true}
                      checked={checkstate === item.id}
                      clickme={() => clickme(item.id)}
                      index={index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation buttons for large screens */}
              <div className="swiper-button-next-addon swiper-button-next-lg absolute top-[50%] z-[40] -translate-y-1/2 right-[-15px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] w-fit rounded-[50%] cursor-pointer">
                <Icons
                  type="Rightarrow"
                  className="p-1 bg-white rounded-[120px]"
                />
              </div>
              <div className="swiper-button-prev-addon swiper-button-prev-lg absolute top-[50%] z-[40] -translate-y-1/2 left-[-12px] shadow-[0px4px_83px_28px_rgba(0,0,0,0.04)] w-fit rounded-[50%] cursor-pointer">
                <Icons
                  type="Leftarrow"
                  className="p-1 bg-white rounded-[120px]"
                />
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-2 md:p-[14px] bg-white 2xl:max-w-[280px] w-full">
              <h3 className="text-blue_gray_700 text_20_16 pb-3">
                Price Summary
              </h3>
              <div className="flex flex-col gap-y-5 border-t-[1px] pt-5">
                <div className="flex justify-between">
                  <h6 className="text_14_1 text-blue_gray_400">
                    Product Price
                  </h6>
                  <h6 className="text_14_1 text-blue_gray_600">$20.00</h6>
                </div>
                <div className="flex justify-between">
                  <h6 className="text_14_1 text-blue_gray_400">GST</h6>
                  <h6 className="text_14_1 text-blue_gray_600">$2.00</h6>
                </div>
                <div className="flex justify-between">
                  <h6 className="text_14_1 text-light_primary">Discount</h6>
                  <h6 className="text_14_1 text-light_primary">- $20.00</h6>
                </div>
                <div className="flex justify-between">
                  <h6 className="text_14_1 text-blue_gray_400">
                    Delivery Charges
                  </h6>
                  <h6 className="text_14_1 text-blue_gray_600">Free</h6>
                </div>
                <div className="flex justify-between border-t-[1px] pt-[10px]">
                  <h6 className="text-blue_gray_700 text_16_2">Total</h6>``
                  <h6 className="text-blue_gray_700 text_16_2">$22.00</h6>
                </div>
              </div>
              {/* Button add items in cart */}
              <Button navroute="/cart"
                varient="primary"
                className="uppercase mt-[10px] md:mt-[79px] py-[10px] px-4 md:py-[14px] md:px-[18px] rounded-md text-lg leading-[26px] font-semibold w-full text_18_16"
              >
                add items in cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddonSection;
