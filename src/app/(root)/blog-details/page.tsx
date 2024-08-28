"use client";

// Importing necessary components and libraries
import Swipercardsectioncommon from "@/components/Swiper";
import Button from "@/components/ui/Button";
import { useState } from "react";
import postcarddata from "@/json/blogpostcard.json";
import Image from "next/image";

// Define the Page component
const Page = () => {
  // State to manage active button
  const [activeButton, setActiveButton] = useState(0);

  // Function to handle click event on buttons
  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  // Array of tab labels
  const blogdetailtabs = [
    "Introduction",
    "Fashion release",
    "Fashion's",
    "Basic Knowledge",
    "Timeless Design",
  ];

  // Rendering JSX
  return (
    <>
      {/* Main content */}
      <div className="mt-[100px] md:mt-[148px] bg-extra_bg ">
        {/* Banner image */}
        <Image
          width={1920}
          height={580}
          className="m-auto hidden md:block "
          src="/images/blogdetailspageimage.png"
          alt="blog"
        />
        {/* Responsive banner image */}
        <Image
          className="w-full md:hidden "
          src="/images/blogbannerimageres.png"
          width={396}
          height={277}
          alt="blog"
        />
        <div className="container md:max-w-[1320px] m-auto ">
          <div className="flex gap-[60px] py-[20px] md:p-[40px] overflow-hidden md:mt-[-100px] bg-white rounded-[20px] relative z-9 ">
            {/* Tab buttons */}
            <div className="w-[180px] md:block hidden ">
              {blogdetailtabs?.map((item, index) => {
                return (
                  <h4
                    key={index}
                    onClick={() => {
                      handleClick(index);
                    }}
                    className={`  whitespace-nowrap cursor-pointer  ${
                      activeButton === index
                        ? "text-[#F57E5D] border-r-[2px] border-light_primary   pb-[10px] "
                        : "text-blue_gray_400"
                    }  w-[180px]  uppercase  py-[11px] px-2 text_16_3 `}
                  >
                    {item}
                  </h4>
                );
              })}
            </div>
            {/* Main content section */}
            <div>
              {/* Blog content */}
              <section className="border-b-[1px]  mb-[40px] pb-[40px] ">
                <div className="flex flex-col ">
                  {/* Date and category */}
                  <div className="flex justify-between ">
                    <h2 className="text_24_20 text-light_primary">
                      20 September. 2022
                    </h2>
                    <div className="flex gap-[10px]">
                      <Button
                        varient="thirdly"
                        className="rounded-[16px] py-[7px] px-[10px] h-[32px] text-[10px] md:text-[13px] leading-3 font-normal "
                      >
                        {" "}
                        Culture{" "}
                      </Button>
                      <Button
                        varient="thirdly"
                        className="rounded-[16px] py-[7px] px-[10px] h-[32px] text-[10px] md:text-[13px] leading-3 font-normal "
                      >
                        {" "}
                        Fashion{" "}
                      </Button>
                    </div>
                  </div>
                  {/* Blog title */}
                  <h3 className="text_48_24 text-blue_gray_800  py-[20px] md:tracking-[-1.5px] md:py-[30px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </h3>
                  {/* Blog content */}
                  <h4 className="text_24_16 text-blue_gray_700 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                  </h4>
                  {/* Additional content */}
                  <p className="text-blue_gray_500 text_16_2_14  md:pt-[20px] pt-[14px] ">
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec. Maecenas
                    eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec Praesent
                    auctor purus luctus enim egestas, ac scelerisque ante
                    pulvinar. Donec. Maecenas eget condimentum velit, sit amet
                    feugiat lectus.
                  </p>
                </div>
              </section>
              {/* Other sections */}
              <section className="pb-[40px]">
                {/* Section title */}
                <h2 className="pb-[30px] text_24_20 text-blue_gray_700 ">
                  Payment Processor Features
                </h2>
                {/* Content */}
                <p className="text_16_1_14 text-blue_gray_500">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec Praesent
                  auctor purus luctus enim egestas, ac scelerisque ante
                  pulvinar. Donec. Maecenas eget condimentum velit, sit amet
                  feugiat lectus.
                </p>
              </section>
              {/* More sections */}
            </div>
          </div>
        </div>
        {/* Related blog posts section */}
        <section className="py-10 md:py-[60px] xl:py-[80px] ">
          <div className="container">
            <div className=" ">
              <Swipercardsectioncommon
                blogpostcard={postcarddata}
                card="blogcard"
                headingmainclass=" items-center justify-center md:justify-between mb-[30px] md:mb-[60px]"
                smtext="Blog"
                lgtext="Related Blog Posts"
                topbtn={true}
                custombttombtnclass={"block md:hidden pt-[30px]"}
                customtopbtnclass={"md:block hidden "}
                testclass="text-center md:text-start"
                bottombtn={true}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
