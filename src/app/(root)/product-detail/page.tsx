"use client";
import React from "react";
import Productview from "./components/ProductView";
import Aboutproduct from "./components/AboutProduct";
import Productdescription from "./components/ProductDescription";
import Addonsection from "./components/AddonSection";
import Ratingsection from "./components/RatingSection";
import Reviewsection from "./components/ReviewSection";
import Faq from "./components/Faq";
import Similarcard from "./components/SimilarCard";
import Productfeaturecard from "./components/ProductFeatureCard";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";
import Swipercardsectioncommon from '@/components/Swiper'
import Productdata from "@/json/products.json";
const Page = () => {
  return (
    <>
      <main className="container mt-[159px]">
        <div className="">
          <NextBreadcrumb className=" hidden md:block" />
          <div className="flex flex-col min-[1250px]:flex-row gap-x-[30px]">
            <div className=" xl:max-w-[645px]">
              <Productview />
            </div>
            <div>
              {/* Aboutproduct section  */}
              <Aboutproduct />

              {/* Productdescription section  */}
              <Productdescription />

              {/* Addonsection section  */}
              <Addonsection />

              {/* Ratingsection section  */}
              <Ratingsection />

              {/* Reviewsection section  */}
              <Reviewsection />

              {/* Faq section  */}
              <Faq />
            </div>
          </div>
          <section className=" py-10 md:py-[60px] lg:py-20">
            {/* Similarcard section */}
            <Similarcard />
          </section>
          <div className="max-[768px]:bg-hf_extra py-10 md:py-[60px] lg:py-[80px]">
            {/*  */}
            <Swipercardsectioncommon
              cardData={Productdata}
              card="Dealcards"
              pagination={true}
              smtext="Together"
              lgtext="Buy Together"
              topbtn={true}
              headingmainclass=" justify-center md:justify-between  text-center md:text-start md:items-center pb-[30px] md:pb-[60px] "
            />
          </div>

          {/* Productfeaturecard swiper */}
          <Productfeaturecard />
        </div>
      </main>
    </>
  );
};
export default Page;
