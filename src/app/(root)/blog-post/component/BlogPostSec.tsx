

"use client";

// Importing necessary components and libraries
import Headingsection from "@/components/HeadingSection";
import BlogPostcard from "@/components/ui/BlogPostcard";
import Button from "@/components/ui/Button";
import React, { Fragment, useState } from "react";
import postcarddata from "@/json/blogpostcard.json";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";

/**
 * Component for rendering the blog post section.
 * @returns {JSX.Element} Blog post section component.
 */
const BlogpostSec = () => {
  // State to manage active button
  const [activeButton, setActiveButton] = useState(0);

  // Array of tab labels
  const blogposttabs = [
    " All",
    "   Fashion",
    "  Community",
    "  Culture",
    "  Partners",
  ];

  // Rendering JSX
  return (
    <>
      {/* Blog post section */}
      <section className="bg-extra_bg mt-[159px] md:mt-[161px] ">
        <div className="container ">
          <div className="md:pt-[80px] pt-[40px] ">
            <div className="grid  grid-cols-1 lg:grid-cols-[34%_62%] gap-[20px] md:gap-[30px] lg:gap-[60px] bg-white  rounded-[10px] md:rounded-[20px] p-[16px] md:p-[40px] ">
              {/* Left section with image */}
              <div className="border-[1px] border-[#F57E5D80] w-fit rounded-t-[40px] md:rounded-t-[120px] overflow-hidden">
                <Image
                  width={510}
                  height={600}
                  className=" w-full lg:max-w-[510px]  p-5  rounded-t-[40px] md:rounded-t-[120px] "
                  src="/images/girlblogpostbanner.png"
                  alt="towgirlimage"
                />
              </div>
              {/* Right section with post details */}
              <div className="flex flex-col justify-center  gap-[14px] md:gap-[30px] ">
                <div className="flex gap-[20px] items-center ">
                  {/* Category and date */}
                  <span className="border-light_primary border-[1px] rounded-[16px] py-[7px] px-[10px] text-light_primary ">
                    Fashion
                  </span>
                  <span className="text_24_14 text-light_primary">
                    20 September , 2020
                  </span>
                </div>
                {/* Title */}
                <h2 className="text_48_24 text-blue_gray_800">
                  A Quick Guide into Incorporating Handlooms to your Workwear...
                </h2>
                {/* Description */}
                <p className=" hidden md:block text-blue_gray_400">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
                {/* Read more button */}
                <div className="hidden md:block ">
                  <Button varient="primary">read more</Button>
                </div>
              </div>
            </div>
            {/* Blog post tabs */}
            <div className=" py-[30px] md:py-[60px]">
              <Headingsection
                testclass={"text-center pb-[20px] xl:p-0 xl:text-start "}
                headingmainclass={"justify-between flex-col   xl:flex-row  "}
                smtext="Blog"
                lgtext="Newly Blog Post"
              >
                {/* Tab buttons */}
                <div className="flex  overflow-scroll  md:overflow-auto  w-full md:w-[668px]  ">
                  {blogposttabs?.map((item, index) => {
                    return (
                      <div key={index}>
                        <div
                          onClick={() => {
                            setActiveButton(index);
                          }}
                        >
                          {/* Tab label */}
                          <li
                            className={` list-none uppercase cursor-pointer ${activeButton === index
                              ? "text-[#F57E5D] border-b-[2px] border-light_primary"
                              : "text-blue_gray_400"
                              } py-[11px] px-[8px]  text-center w-[132px] text_16_3 `}
                          >
                            {item}
                          </li>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Headingsection>
              {/* Blog post cards */}
              <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-[20px] md:gap-[30px] py-[30px] md:py-[60px]  ">
                {postcarddata.map((item, index) => {
                  return (
                    <Fragment key={Date() + index}>
                      {/* Link to blog details */}
                      <Link href={"/blog-details"}>
                        <div>
                          <BlogPostcard data={item} />
                        </div>
                      </Link>
                    </Fragment>
                  );
                })}
              </div>
              {/* Pagination */}
              <Pagination />
              {/* Load more button */}
              <Button
                className="w-full md:hidden py-[10px] px-4 md:py-4 md:px-6 text_20_16"
                varient="primary"
              >
                LOAD MORE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Exporting the BlogpostSec component
export default BlogpostSec;
