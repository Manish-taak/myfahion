import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";
import { headinginfo } from "@/interFaces/type";

/**
 * Functional component for rendering a heading section.
 * @param {headinginfo} props - Props object containing heading information.
 * @param {string} props.headingmainclass - CSS classes for the main heading container.
 * @param {string} props.testclass - CSS classes for the test element.
 * @param {string} props.smtextclass - CSS classes for the small text.
 * @param {string} props.smtext - Small text content.
 * @param {string} props.lgtextclass - CSS classes for the large text.
 * @param {string} props.lgtext - Large text content.
 * @param {ReactNode} props.children - Optional children components.
 * @returns {JSX.Element} HeadingSection component JSX.
 */
const HeadingSection = ({
  headingmainclass,
  testclass,
  smtextclass,
  smtext,
  lgtextclass,
  lgtext,
  children,
}: headinginfo) => {
  return (
    <>
      <div className={cn` flex  items-center ${headingmainclass}`}>
        <div className={cn`${testclass}`}>
          {/* Small text */}
          <h3 className={cn`${smtextclass}  text-light_primary text_24_20  `}>
            {smtext}
          </h3>
          {/* Large text */}
          <h2
            className={cn`${lgtextclass} text_60_32_sec_heading text-blue_gray_800 text-center `}
          >
            {lgtext}
          </h2>
        </div>
        {/* Optional children components */}
        {children}
      </div>
    </>
  );
};

export default HeadingSection;
