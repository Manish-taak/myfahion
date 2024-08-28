"use client";
// import BreadCrumbs from "@/components/ui/breadCrumbs";
import Link from "next/link";
import React, { Fragment, useState } from "react";
// import breadcurmbs from "@/json/breadcrumbs.json";
import LeadfilterSidesec from "./LeadFilterSideSec";
import DevSec from "./DevSec";
import Button from "@/components/ui/Button";
import Accordion from "@/components/Accordion";
import Headingsection from "@/components/HeadingSection";
import Icons from "@/icons/Index";
import leaddata from "@/json/leaddata.json"
import sortdata from "@/json/sort.json"
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

/**
 * LeadSec Component
 * This component renders the main section for the Lead Manager page.
 * It includes the filtering and sorting functionalities along with displaying lead data.
 * @component
 * @returns {JSX.Element} The rendered LeadSec component.
 */
const LeadSec = () => {
  // State to track the active button for mobile view
  const [activeButton, setActiveButton] = useState();

  // Handle click on filter/sort buttons
  const handleClick = (buttonNumber: any) => {
    setActiveButton(buttonNumber);
  };

  // State to manage the visibility of the filter side section in mobile view
  const [filtersideleadmanager, setfiltersideleadmanager] = useState(false);

  // State to manage the selected sort option
  const [value, setvalue] = useState("sortby");

  // State to manage the visibility of the sort by section
  const [sortby, setsortby] = useState(false);

  return (
    <>
      <section className="mt-[150px] md:mt-[159px]">
        {/* Mobile Sort By Section */}
        <div
          className={`w-full tab:hidden p-[20px] ${sortby === true ? "right-0" : "right-[-100%]"
            } transition-all duration-[0.8s] ease-[cubic-bezier(.175,0.885,0.32,1.275)] h-[100vh] bg-white fixed z-[99] top-0`}
        >
          {/* Sort By Header */}
          <div className="flex justify-between p-6">
            <Icons type="mainlogo" />
            <div onClick={() => setsortby(false)}>
              <Icons className="p-3 w-[23px] h-[24px]" type="closesidebar" />
            </div>
          </div>
          {/* Sort By List */}
          <ul className="p-[24px] flex flex-col gap-[20px]">
            {sortdata.map((item, index) => (
              <Fragment key={index}>
                <li
                  onClick={() => setvalue(item)}
                  className="text_16_2 text-blue_gray_700 py-[3px] list-none sidehovereffect truncate cursor-pointer"
                >
                  {item}
                </li>
              </Fragment>
            ))}
          </ul>
        </div>

        {/* Desktop Breadcrumbs and Title */}
        <div className="hidden md:block py-[30px] bg-extra_bg">
          <NextBreadcrumb className="p-[0px_!important]" bgcolor="bg-extra_bg" />
          <div className="mt-[30px] md:mt-[60px]">
            <h1 className="pb-[10px] text_48_24 text-blue_gray_800 text-center">Lead Manager</h1>
            <h2 className="text-blue_gray_500 text-center">20 Jobs Available</h2>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container">
          <div className="flex gap-[30px] py-[40px] md:py-[80px]">
            {/* Filter Sidebar */}
            <div
              className={`${filtersideleadmanager === true ? "left-[0px]" : "left-[-200%]"
                } max-h-[calc(100vh_-_123px)] fixed md:static top-[134px] overflow-scroll md:overflow-visible`}
            >
              <LeadfilterSidesec className="md:w-[250px] lg:w-[375px]" />
            </div>
            {/* Lead Data Section */}
            <div className="grid grid-cols-1 gap-5 md:gap-[30px]">
              {leaddata?.leadmanagerdata?.map((item, index) => (
                <Fragment key={Date.now() + index}>
                  <DevSec data={item} />
                </Fragment>
              ))}
              {/* Load More Button */}
              <div className="flex justify-center mt-[10px]">
                <Button className="md:max-w-[240px] w-full py-[10px] px-4 md:py-4 md:px-6 text_20_16" varient="primary">
                  Load more
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-hf_extra py-[40px] md:py-[80px]">
          <div className="container">
            <Headingsection
              smtext="FashionCart"
              lgtext="Frequently Asked Questions"
              smtextclass="text-center"
              lgtextclass="text-center"
              headingmainclass="justify-center mb-[30px] md:mb-[60px]"
            />
            <Accordion />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="items-center md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px] fixed z-[100] bottom-0 w-[95%] left-[50%] right-0 transform translate-x-[-50%] py-[6px]">
          {/* Filter By Button */}
          <div
            onClick={() => {
              handleClick(1);
              setfiltersideleadmanager(!filtersideleadmanager);
            }}
            className={`btn ${activeButton === 1 ? "active" : ""} btn flex gap-[10px] justify-center py-[10px] items-center w-[149px]`}
          >
            <Link href="#" className={`text_10 ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>
              Filter By
            </Link>
            <Icons type="leadfilter" className={`${activeButton === 1 ? "fill-[#F57E5D]" : "fill-[#FFFFFF]"}`} />
          </div>
          <span className="border-[#FFFFFF] opacity-10 h-[18px] border-[1px]"></span>
          {/* Sort By Button */}
          <div
            onClick={() => {
              handleClick(2);
              setsortby(!sortby);
            }}
            className={`btn ${activeButton === 2 ? "active" : ""} btn flex gap-[10px] justify-center py-[10px] items-center w-[149px]`}
          >
            <Link href="#" className={`text_10 ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"}`}>
              Sort By
            </Link>
            <Icons type="leadicon" className={`${activeButton === 2 ? "fill-[#F57E5D]" : "fill-[#FFFFFF]"}`} />
          </div>
        </div>
      </section>

    </>
  );
};

export default LeadSec;
