"use client";
import Icons from "@/icons/Index";
import { cn } from "@/utils/cn";
import { sidebarAccordion, rotate } from "@/utils/funcation";
import React from "react";
import { faqdata } from "@/interFaces/type";

/**
 * Faq component.
 * 
 * Renders a FAQ item with a question and its corresponding answer.
 * 
 * @component
 * @param {faqdata} props - The props object containing question, answer, questionclass, answerclass, icontype, and iconclass.
 * @returns {JSX.Element} The rendered Faq component.
 */
const Faq = ({
  question,
  answer,
  questionclass,
  answerclass,
  icontype,
  iconclass,
}: faqdata) => {
  return (
    <>
      <div className="py-[10px] px-2 md:p-5 bg-hf_extra md:bg-white rounded-md cursor-pointer">
        {/* Question Header */}
        <h2
          className={cn`flex justify-between items-center text-blue_gray_600 text-[13px] min-[375px]:text_20_14 ${questionclass}`}
          onClick={(e) => {
            rotate(e, 180); // Rotate icon on click
            sidebarAccordion(e); // Expand/collapse answer
          }}
        >
          {question}
          {/* Icon for toggling visibility */}
          <Icons
            className={`transition-all duration-500 select-none w-7 ${iconclass}`}
            type={`${icontype}`}
          />
        </h2>
        {/* Answer Text */}
        <p className={cn`h-0 overflow-hidden duration-500 text-blue_gray_300 text-sm xl:text-lg  ${answerclass} `}>
          {answer}
        </p>
      </div>
    </>
  );
};

export default Faq;
