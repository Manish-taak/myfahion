import React from "react";

/**
 * LeadRole component displays job details with title, date, description, location, job type, and experience.
 * @returns {JSX.Element} LeadRole component JSX.
 */
const LeadRole = () => {
  return (
    <>
      {/* Outer container for the job details */}
      <div className=" border-[1px] border-[#ECEFF1] rounded-[6px] md:rounded-[10px]  md:p-[30px]  py-[16px] px-[12px]">
        <div>
          {/* Job title and posted date section */}
          <div className="flex justify-between lg:flex-row flex-col-reverse gap-[10px] text-start lg:text-center ">
            <h2 className="text-blue_gray_800 text_24_20">
              Software Dev Engineer Job, FashionCart Bussiness (India)
            </h2>
            <span className="text-blue_gray_400 text_14_1_12 ">
              Posted on :- 20 Aug, 2022
            </span>
          </div>
          {/* Job description section */}
          <p className="text-blue_gray_500 md:pb-[20px] pb-[14px]  md:mb-[20px] mb-[14px] border-b-[1px] mt-5">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>
        {/* Additional job details section */}
        <div className="flex  gap-[10px]">
          <p className="text-blue_gray_600 text_16_2_14">
            Location - New Delhi, India
          </p>
          <span className="border-[1px]"></span>
          <p className="text-blue_gray_600 text_16_2_14">
            Job Type - Full Time
          </p>
          <span className="border-[1px]"></span>
          <p className="text-blue_gray_600 text_16_2_14">
            Experience - 0 to 4 Years
          </p>
        </div>
      </div>
    </>
  );
};

export default LeadRole;
