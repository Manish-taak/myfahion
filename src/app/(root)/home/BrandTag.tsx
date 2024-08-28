"use client";
import React, { Fragment } from "react";
import "swiper/css"; // Import Swiper styles
import Headingsection from "@/components/HeadingSection";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import brandtagdata from "@/json/brand.json"; // Import data for brand tags
import { Autoplay } from 'swiper/modules'; // Import Swiper Autoplay module
import Image from "next/image";

/**
 * BrandTag component displays a section with brand images in a grid and a swiper for larger screens.
 *
 * @returns {JSX.Element} JSX for rendering the BrandTag component.
 */
const BrandTag = () => {

  return (
    <>
      <section className="py-[40px] md:py-[80px]">
        <div className="container">
          <Headingsection
            headingmainclass="justify-center text-center"
            smtext="Our Partners"
            lgtext="Fashion Partners"
          />

          {/* Grid view for small screens */}
          <div className="grid grid-cols-4 gap-[13px] place-items-center mt-[30px] lg:hidden">
            {brandtagdata.map((item, index) => {
              return (
                <Fragment key={Date.now() + index}>
                  {/* Image component for brand logo */}
                  <Image
                    className="max-w-[76px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[190px] items-center"
                    src={`/images/${item.image}`}
                    alt="brand"
                    width={190}
                    height={110}
                  />
                </Fragment>
              );
            })}
          </div>

          {/* Swiper for large screens */}
          <div className="hidden lg:block mt-[30px] lg:mt-[60px]">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={140}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 1000,
              }}
              breakpoints={{
                1000: {
                  slidesPerView: 4,
                },
                1100: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 4,
                },
                1500: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {brandtagdata.map((item, index) => {
                return (
                  <SwiperSlide className="max-w-[190px]" key={Date.now() + index}>
                    {/* Image component inside SwiperSlide */}
                    <Image
                      className="max-w-[190px] w-full"
                      src={`/images/${item.image}`}
                      alt="images"
                      width={190}
                      height={110}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandTag;
