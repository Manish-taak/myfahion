
/**
 * @fileoverview Career Page Component
 * 
 * This component displays a career page with a banner, popular jobs section, 
 * brand tags, and a FAQ section. It uses various UI components and maps through 
 * JSON data to dynamically generate the job listings.
 */

import BannerSection from "@/components/BannerSection";
import React, { Fragment } from "react";
import Brandtag from "../home/BrandTag";
import Headingsection from "@/components/HeadingSection";
import Icons from "@/icons/Index";
import Accordion from "@/components/Accordion";
import careerdata from "@/json/careerdata.json";

const Page = () => {
  return (
    <>
      {/* Banner section for career page */}
      <BannerSection
        smallheading="We Are Hiring"
        maintextfirst="Start"
        spantext="Your Career"
        maintextlast={"WithFashionCart"}
        career={true}
        ptext={
          "We Try Our Best Product For Shipping, Along With Tracking Info. We Inform Order Within 24hours In Your Email Address."
        }
        btndata="Find Best Job"
        image="careerimage.png"
        sectionclass="bg-[#f57e5d0a] pt-[27px] md:pt-[49px]  md:mt-[148px] mt-[141px] lg:mt-[159px] "
        imageclass="max-w-[788px] w-full h-full object-contain "
        gap="gap-[52px]"
        linkto="/job-detail"
      />

      {/* Brand tags section */}
      <Brandtag />

      {/* Popular jobs section */}
      <div className=" bg-hf_extra   ">
        <div className="container py-10 md:py-[60px] xl:py-[80px]">
          <div className="flex justify-center  md:justify-start ">
            <Headingsection
              smtextclass=" text-center md:text-start"
              lgtextclass=" text-center md:text-start"
              smtext="Career"
              lgtext="Our Popular Jobs"
            />
          </div>
          <div className=" grid gap-[13px] md:gap-5 lg:gap-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[30px] md:mt-[60px]">
            {careerdata?.map((item, index) => {
              return (
                <Fragment key={Date.now() + index}>
                  <div className=" flex gap-4 md:gap-5 flex-col justify-center items-center md:items-start  md:p-[30px] py-[20px] px-[10px] bg-white rounded-[10px] ">
                    <Icons type={`${item?.image}`} />
                    <div className="flex flex-col items-center md:items-start">
                      <h2 className="text_24_16 text-blue_gray_700 text-center  ">
                        {item?.JobsName}
                      </h2>
                      <span className="text_16_1_14 text-blue_gray_400">
                        {item?.job}
                      </span>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className=" container py-10 md:py-[60px] lg:py-[80px]">
        <Headingsection
          smtext="FashionCart"
          lgtext="Frequently Asked Questions"
          smtextclass="text-center"
          lgtextclass="text-center"
          headingmainclass="justify-center mb-[30px] md:mb-[60px]"
        />
        {/* Accordion */}
        <Accordion />
      </div>
    </>
  );
};

export default Page;
