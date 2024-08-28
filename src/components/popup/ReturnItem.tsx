import Icons from "@/icons/Index";
import React, { forwardRef, useState } from "react";
import Button from "../ui/Button";
import { closepopup } from "@/interFaces/type";
import InputSelect from "../InputSelect";

/**
 * ReturnItem component to handle returning an item with reason selection and optional description.
 * 
 * @component
 * @param {Function} closepopup Function to close the popup
 * @param {React.RefObject<HTMLDivElement>} ref Reference to the component's DOM element
 * @returns {JSX.Element} ReturnItem component JSX
 */
const ReturnItem = forwardRef<HTMLDivElement, { closepopup: () => void }>(({ closepopup }, ref) => {
  const [selectedReason, setSelectedReason] = useState<string>('');

  return (
    <>
      {/* Outer container for the ReturnItem component */}
      <div ref={ref} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full">
        <div className="bg-white rounded-[10px] ">
          {/* Header section */}
          <div className="flex justify-between gap-[10px] py-5 px-4 md:p-[30px] border-b-[1px] border-blue_gray_100">
            <h2 className="text-24 text-blue_gray_800">Return Item</h2>
            {/* Close icon */}
            <div onClick={closepopup} className="cursor-pointer">
              <Icons type="popupclose" />
            </div>
          </div>
          {/* Main content section */}
          <div className="flex flex-col gap-[30px] p-[30px]">
            {/* Select reason dropdown */}
            <InputSelect
              label="Choose Reason"
              placeholder="Select Option"
              value={selectedReason}
              onChange={(value) => setSelectedReason(value)}
              options={[
                { id: 1, name: 'Defective item' },
                { id: 2, name: 'Wrong item received' },
                { id: 3, name: 'Changed my mind' },
                { id: 4, name: 'Item not as described' },
                { id: 5, name: 'Other reason' },
              ]}
            />
            {/* Optional description textarea */}
            <div className="flex flex-col gap-2">
              <span className="text-16 text-blue_gray_600">
                Description (Optional)
              </span>
              <textarea
                placeholder="Description"
                className="resize-none rounded-[6px] md:w-[450px] py-[14px] px-4 outline-none border-[1px] border-blue_gray_100"
                name="description"
                id="description"
              ></textarea>
            </div>
            {/* Continue button */}
            <Button className="w-full" varient="primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default ReturnItem;
