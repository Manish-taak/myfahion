import Icons from "@/icons/Index";
import React, { forwardRef } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { areyousureprops } from "@/interFaces/type";

/**s
 * WriteReview Component - Displays a popup for writing a review.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {string} props.buttontext - Text to display on the submit button
 * @param {string} props.heading - Heading text for the review popup
 * @param {React.Ref} ref - Forwarded ref to the component
 * @returns {JSX.Element} The WriteReview component
 */
const WriteReview = forwardRef<HTMLDivElement, areyousureprops>(({ closepopup, buttontext, heading }, ref) => {
  return (
    <>
      <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full">
        {/* Popup Container */}
        <div className="bg-white rounded-[10px] ">
          {/* Popup Header */}
          <div className="flex justify-between gap-[10px] py-5 px-4 md:p-[30px] border-b-[1px] border-blue_gray_100 ">
            <h2 className="text_24 text-blue_gray_800">{heading}</h2>
            <div onClick={closepopup} className="cursor-pointer">
              <Icons type="popupclose" />
            </div>
          </div>
          {/* Popup Body */}
          <div className="flex flex-col gap-[30px] p-[30px] ">
            {/* Rating Section */}
            <div className="flex flex-col gap-3">
              <span className="text_20 text-blue_gray_500 ">Rating</span>
              <div className="flex gap-5">
                <Icons className="w-[30px] h-[30px]" type="singleStar" />
                <Icons className="w-[30px] h-[30px]" type="singleStar" />
                <Icons className="w-[30px] h-[30px]" type="singleStar" />
                <Icons className="w-[30px] h-[30px]" type="singleStar" />
                <Icons className="w-[30px] h-[30px]" type="singleStarbg-trance" />
              </div>
            </div>
            {/* Review Title Input */}
            <Input
              placeholder="Review Title"
              className="w-full"
              inputparent="border-[1px] border-blue_gray_100 rounded-[6px]"
              label=" Title (optional)">
            </Input>
            {/* Review Textarea */}
            <div className="flex flex-col gap-2  ">
              <span className="text_16_1 text-blue_gray_600 ">
                Write Review
              </span>
              <textarea
                placeholder="Description"
                className=" resize-none rounded-[6px] md:w-[450px] py-[14px] px-4 outline-none border-[1px] border-blue_gray_100 "
                name=""
                id=""
              ></textarea>
            </div>
            {/* Submit Button */}
            <Button className=" w-full" varient="primary">
              {buttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default WriteReview;
