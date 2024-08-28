


import Icons from '@/icons/Index';
import Image from 'next/image';
import React from 'react';

/**
 * Component for displaying review sections.
 * @returns {JSX.Element} ReviewSection component JSX.
 */
const ReviewSection = () => {
  return (
    <>
      {/* Review Section 1 */}
      <div className="py-[10px] border-b-[1px] pb-[10px]">
        <div className="flex items-center justify-between">
          {/* Reviewer Name and Verification */}
          <h4 className="text-blue_gray_800 text_20_16_medium">
            Mike Posner
            <span className="ml-2 text_16_1_12 text-blue_gray_200">
              (Verified Buyer)
            </span>
          </h4>
          {/* Review Date */}
          <h6 className="text_14_1_12 text-blue_gray_200">8 Sep, 2022</h6>
        </div>
        {/* Star Rating */}
        <div className="flex items-center gap-x-5 mt-2">
          <div className="flex gap-x-[6px]">
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
          </div>
          <h5 className="text_14_1 text-blue_gray_500">4.5 Star</h5>
        </div>
        {/* Review Content */}
        <div className="mt-5">
          <h4 className="text_20_16 text-blue_gray_600">
            Comfortable And Good Design
          </h4>
          <p className="text_14_1_12_normal text-blue_gray_400 my-[10px]">
            Photographs are a way of preserving a moment in our lives for
            the rest of our lives. Many of us have at least been tempted
            at the flashy array of photo printers which seemingly leap off
            the shelves at even the least tech-savvy.
          </p>
          {/* Review Images */}
          <div className="flex gap-x-[14px]">
            <Image width={70} height={70} src="/images/review1.png" alt="review1" />
            <Image width={70} height={70} src="/images/review2.png" alt="review2" />
          </div>
        </div>
      </div>

      {/* Review Section 2 */}
      <div className="py-[10px] pb-[10px]">
        <div className="flex items-center justify-between">
          {/* Reviewer Name and Verification */}
          <h4 className="text-blue_gray_800 text_20_16_medium">
            Mike Posner
            <span className="ml-2 text_16_1_12 text-blue_gray_200">
              (Verified Buyer)
            </span>
          </h4>
          {/* Review Date */}
          <h6 className="text_14_1_12 text-blue_gray_200">8 Sep, 2022</h6>
        </div>
        {/* Star Rating */}
        <div className="flex items-center gap-x-5 mt-2">
          <div className="flex gap-x-[6px]">
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
            <Icons type="star" className="max-w-[18px]" />
          </div>
          <h5 className="text_14_1 text-blue_gray_500">4.5 Star</h5>
        </div>
        {/* Review Content */}
        <div className="mt-5">
          <h4 className="text_20_16 text-blue_gray_600">
            Comfortable And Good Design
          </h4>
          <p className="text_14_1_12_normal text-blue_gray_400 my-[10px]">
            Photographs are a way of preserving a moment in our lives for
            the rest of our lives. Many of us have at least been tempted
            at the flashy array of photo printers which seemingly leap off
            the shelves at even the least tech-savvy.
          </p>
          {/* Review Images */}
          <div className="flex gap-x-[14px]">
            <Image width={70} height={70} src="/images/review1.png" alt="review1" />
            <Image width={70} height={70} src="/images/review2.png" alt="review2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
