"use client";

import Icons from "@/icons/Index";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

import { dropdownprops } from "@/interFaces/type";

/**
 * Dropdown component
 * 
 * This component renders a dropdown menu with customizable properties.
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onclick - The function to handle the click event.
 * @param {string} props.testclass - The CSS class for testing purposes.
 * @param {boolean} props.positionsta - The boolean to control the position state.
 * @param {string} props.heading - The heading text for the dropdown.
 * @param {ReactNode} props.children - The child elements to be rendered inside the dropdown.
 * @param {string} props.image - The image/icon type for the dropdown arrow.
 * @param {string} props.className - The CSS class for the dropdown container.
 * @param {string} props.directionshovercontent - The CSS class for the hover content direction.
 * @param {string} props.arrowimageclass - The CSS class for the arrow image.
 * @returns {React.Element} The rendered dropdown component.
 */
const Dropdown = ({
  onclick,
  testclass,
  positionsta,
  heading,
  children,
  image,
  className,
  directionshovercontent,
  arrowimageclass,
}: dropdownprops) => {
  return (
    <>
      <div
        className={` ${positionsta === true ? "" : "relative"} cursor-pointer`}
      >
        <div className={cn`flex ${className} w-full`}>
          {/** 
           * Heading text for the dropdown
           * 
           * @element
           */}
          <p className={cn`${testclass}`}>{heading}</p>
          {/** 
           * Icon for the dropdown arrow
           * 
           * @element
           */}
          <div className={cn`${arrowimageclass}`}>
            <Icons type={`${image}`} />
          </div>
        </div>
        {onclick === true ? (
          <>{children}</>
        ) : (
          <>
            {/** 
             * Dropdown content to be displayed on hover
             * 
             * @element
             */}
            <div
              className={`group-hover:opacity-100 shadow-2xl group-hover:visible duration-300 ${directionshovercontent} z-[9] absolute opacity-0 invisible`}
            >
              {children}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dropdown;
