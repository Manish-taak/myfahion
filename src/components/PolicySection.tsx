import React from "react";
import { policysectiontype } from "@/interFaces/type";

/**
 * PolicySection component displays a section with title and paragraphs of policy content.
 * @param {policysectiontype} data - Object containing data for the policy section.
 * @param {string} data.title - Title of the policy section.
 * @param {string} data.paragraph1 - First paragraph of policy content.
 * @param {string} data.paragraph2 - Second paragraph of policy content.
 * @returns {JSX.Element} PolicySection component JSX.
 */
const PolicySection = ({ data }: policysectiontype) => {
  return (
    <>
      <div className="container">
        <div className="border-b-[1px] pb-[30px] mb-[30px]">
          {/* Title of the policy section */}
          <h4 className="text_24_20 text-blue_gray_700">{data?.title}</h4>
          {/* First paragraph of policy content */}
          <p className="text_16_1_14 text-blue_gray_500 mt-[14px] md:mt-5 text-justify">
            {data?.paragraph1}
          </p>
          {/* Second paragraph of policy content */}
          <p className="text_16_1_14 text-blue_gray_500 mt-[10px] md:mt-[15px] text-justify">
            {data?.paragraph2}
          </p>
        </div>
      </div>
    </>
  );
};

export default PolicySection;
