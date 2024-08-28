"use client";
import Icons from "@/icons/Index";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { tabadata } from "@/interFaces/type";

/**
 * BottomTabs component.
 * 
 * Renders a bottom navigation bar with tabs.
 * 
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.spacing - Spacing classes for the tabs.
 * @param {Array<Object>} props.bootomtabsdata - Array of tab data objects.
 * @param {string} props.flexdiraction - Flex direction for the tabs container.
 * @returns {React.Element} The rendered BottomTabs component.
 */
const BottomTabs = ({ spacing, bootomtabsdata, flexdiraction }: tabadata) => {
  const [activeButton, setActiveButton] = useState(2);

  /**
   * Handles click event on tab buttons.
   * 
   * @param {number} buttonNumber - The index of the clicked tab button.
   */
  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className="items-center tab:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px] fixed z-40 bottom-0 w-[95%] left-[50%] right-0 transform translate-x-[-50%] py-[6px]">
        {bootomtabsdata.map((item, index) => {
          return (
            <Fragment key={Date.now() + index}>
              <div className={`flex flex-col ${spacing} justify-center items-center`}>
                <div
                  onClick={() => handleClick(index)}
                  className={`btn ${activeButton === index ? "active" : ""} pb-[1px] btn ${flexdiraction} justify-center items-center`}
                >
                  {/**
                   * Icon component for the tab button.
                   * @type {JSX.Element}
                   */}
                  <Icons
                    type={item.image}
                    fill={activeButton === index ? "#F57E5D" : "#FFFFFF"}
                  />
                  {/**
                   * Link component for the tab button.
                   * @type {JSX.Element}
                   */}
                  <Link href="#" className={`text_10 ${activeButton === index ? "text-[#F57E5D]" : "text-[#FFFFFF]"} `}>
                    {item.name}
                  </Link>
                </div>
                {/**
                 * Indicator line for the active tab.
                 * @type {HTMLSpanElement}
                 */}
                <span className={`${activeButton === index ? "border-[1px] border-light_primary w-[10px] h-[1px]" : "border-blue_gray_900 border-[1px] w-[10px] h-[1px]"} `}></span>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default BottomTabs;
