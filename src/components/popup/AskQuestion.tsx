import Icons from "@/icons/Index";
import React, { forwardRef } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { closepopup } from "@/interFaces/type";

/**
 * AskQuestion component for asking questions about a product.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} AskQuestion component JSX
 */
const AskQuestion = forwardRef<HTMLDivElement, closepopup>(({ closepopup }, ref) => {
  return (
    <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full">
      <div className="p-5 tab:p-[30px] bg-white rounded-[8px]">
        <div className="flex flex-col gap-5 justify-between mb-[30px] items-start">
          {/* Popup header */}
          <div className="flex flex-row gap-[10px] justify-between w-full">
            <h3 className="text_24 text-blue_gray_800">Ask Question</h3>
            {/* Close icon */}
            <div className="cursor-pointer" onClick={closepopup}>
              <Icons className="w-[23px] h-[24px]" type="popupclose" />
            </div>
          </div>
          {/* Description */}
          <h3 className="text_16_2 text-blue_gray_500">
            You will not be Ask The question and queries about this product and we will try our best to answer them
          </h3>
        </div>

        {/* Input field for question */}
        <Input
          label="Question"
          className="my-[30px]"
          placeholder="Type Here"
          inputclass="w-full border"
        />
        {/* Button to post question */}
        <Button className="w-full" varient="primary">
          Post Question
        </Button>
      </div>
    </div>
  );
});

export default AskQuestion;
