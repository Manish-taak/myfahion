import Headingsection from "@/components/HeadingSection";
import ExploreCard from "@/components/ui/ExploreCard";
import React, { Fragment } from "react";
import exploredata from "@/json/exploredata.json";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

/**
 * ExploreSec component renders a section displaying categories and explore cards.
 * 
 * @returns {JSX.Element} JSX for rendering the ExploreSec component.
 */
const ExploreSec = () => {
  return (
    <>
      {/* Section for ExploreSec component */}
      <section className="mt-[162px]">
        {/* NextBreadcrumb component */}
        <NextBreadcrumb bgcolor="bg-extra_bg">
          <p className="text-blue_gray_400 leading-[24px] text_14_2  ">
            Showing - (40 Items)
          </p>
        </NextBreadcrumb>
        <div className="container">
          <div className="md:pt-[30px] pt-[40px] md:mb-[80px] mb-[40px]">
            {/* Headingsection component */}
            <Headingsection
              headingmainclass="justify-center"
              testclass="text-center"
              smtext="Categories"
              lgtext="Explore By Categories"
            />
            <div className=" mb-[30px] md:mb-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[13px] lg:gap-x-[30px] lg:gap-y-[60px] mt-[30px] md:mt-[60px]">
              {/* Mapping over exploredata to render ExploreCard components */}
              {exploredata.slice(0, 8).map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    {/* ExploreCard component */}
                    <ExploreCard data={item} />
                  </Fragment>
                );
              })}
            </div>
            {/* Background image section */}
            <div
              className={`bg-[url("/images/biggestswipercard.png")] bg-top lg:h-[400px] xl:h-[450px] 2xl:h-[500px] bg-cover bg-no-repeat  py-[9%] xl:py-[128px] flex justify-end rounded-md `}
            >
              <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px]  lg:max-w-[400] xl:max-w-[496px] 2xl:max-w-[610px]  xl:mr-[149px]">
                <h3 className="text_24_12 text-light_primary">
                  Grab Upto 50% Off
                </h3>
                <h2 className="text_60_18 text-blue_gray_800 pt-[10px] md:pt-5 ">
                  Bigest Sale On Mens Wear Fashion
                </h2>
              </div>
            </div>
            <div className=" mb-[30px] md:mb-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[13px] lg:gap-x-[30px] lg:gap-y-[60px] mt-[60px]">
              {/* Mapping over exploredata to render ExploreCard components */}
              {exploredata.slice(8, 18).map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    {/* ExploreCard component */}
                    <ExploreCard data={item} />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreSec;
