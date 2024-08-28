import { softwaredev } from "@/interFaces/type"; // Importing softwaredev interface from "@/interFaces/type"
import React from "react";
import { leaddata } from "@/interFaces/type"; // Importing leaddata interface from "@/interFaces/type"

/**
 * Functional component for displaying job details.
 * @param {Object} props - Props object containing data.
 * @param {leaddata} props.data - Data object conforming to leaddata interface.
 * @returns {JSX.Element} - Rendered component.
 */
const DevSec = ({ data }: leaddata) => {
  return (
    <>
      {/* Main container */}
      <div className="border-[1px] border-[#ECEFF1] rounded-[6px] md:rounded-[10px] md:p-[30px] py-[16px] px-[12px] overflow-hidden">
        <div>
          {/* Header section */}
          <div className="flex justify-between lg:flex-row flex-col-reverse gap-[10px] text-start lg:text-center">
            <h2 className="text-blue_gray_800 text_24_20">
              {data.leadmanager} {/* Displaying lead manager */}
            </h2>
            <span className="text-blue_gray_400 text-14_1_12">
              Posted on :- {data.postdate} {/* Displaying post date */}
            </span>
          </div>
          {/* Description section */}
          <p className="text-blue_gray_500 md:pb-[20px] pb-[14px] md:mb-[20px] mb-[14px] border-b-[1px] mt-[14px] text-nowrap overflow-hidden overflow-ellipsis lg:text-wrap">
            {data.text} {/* Displaying job description */}
          </p>
        </div>
        {/* Details section */}
        <div className="flex gap-[10px]">
          <p className="text-blue_gray_600 text-16_2_14">
            Location - {data.location} {/* Displaying job location */}
          </p>
          <span className="border-[1px]"></span>
          <p className="text-blue_gray_600 text-16_2_14">
            Job Type - {data.JobType} {/* Displaying job type */}
          </p>
          <span className="border-[1px]"></span>
          <p className="text-blue_gray_600 text-16_2_14">
            Experience - {data.Experience} {/* Displaying required experience */}
          </p>
        </div>
      </div>
    </>
  );
};

export default DevSec;
