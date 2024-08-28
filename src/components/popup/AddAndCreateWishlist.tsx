import Icons from "@/icons/Index";
import React, { forwardRef } from "react";
import Button from "../ui/Button";
import { closepopup } from "@/interFaces/type";
import useCheckbox from "@/lib/hooks/useCheckbox";

/**
 * AddAndCreateWishlist component for managing adding items to wishlist.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {Function} props.Createnew - Function to create a new wishlist
 * @param {Function} props.newlist - Function to add item to wishlist
 * @param {Function} props.cancelpopup - Function to cancel and close the popup
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} AddAndCreateWishlist component JSX
 */
const AddAndCreateWishlist = forwardRef<HTMLDivElement, closepopup>(
  ({ closepopup, Createnew, newlist, cancelpopup }, ref) => {

    // Destructuring state and function from useCheckbox hook
    const { checkedIndex, handleCheck } = useCheckbox();

    return (
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full"
      >
        {/* Main container */}
        <div className="p-5 tab:p-[30px] bg-white rounded-[8px] max-w-[510px] w-full">
          {/* Header section */}
          <div className="flex flex-col gap-[10px] justify-between mb-[20px] items-start">
            {/* Title and Create New button */}
            <div className="flex gap-[10px] items-center justify-between w-full border-b border-blue_gray_50 pb-[20px] mb-[20px]">
              <h3 className="text_24 text-blue_gray_800">Add To Wishlist</h3>
              <h3
                onClick={Createnew}
                className={`whitespace-nowrap py-[10px] px-4 hover:bg-light_primary hover:bg-opacity-[0.1] rounded-[6px] uppercase tab:flex items-center gap-2 text-light_primary text_16_2_10 cursor-pointer hidden md:flex`}
              >
                {/* Create New button with icon */}
                <Icons type="plus" className="fill-light_primary" /> Create New
              </h3>
            </div>
            {/* Checkboxes section */}
            <div className="flex flex-col gap-3">
              {/* Mapping checkboxes */}
              {["For Birthday", "For My Family", "For Me", "Others"]?.map((item, index) => (
                <div key={Date.now() + index}>
                  <div className="flex text_16_2 text-blue_gray_300 items-center">
                    <div onClick={() => handleCheck(index)}>
                      <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                        {/* Checkbox container */}
                        <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
                          <label className="cursor-pointer">{item}</label>
                          <div className="relative flex">
                            {/* Actual checkbox */}
                            <input
                              type="checkbox"
                              checked={index === checkedIndex}
                              readOnly
                              className="hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                            />
                            {/* Checked icon */}
                            {index === checkedIndex && (
                              <Icons
                                type="checkedicon"
                                className="absolute top-[13px] right-[13px] h-3.5 w-3.5"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Action buttons section */}
          <div className="flex gap-[30px] md:flex-row flex-col w-full">
            {/* Cancel button */}
            <div className="w-full" onClick={cancelpopup}>
              <Button className="md:max-w-[210px] w-full rounded-[8px]" varient="thirdly">
                cancel
              </Button>
            </div>
            {/* Add to wishlist button */}
            <div className="w-full" onClick={newlist}>
              <Button varient="primary" className="md:max-w-[210px] w-full">
                Add to wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default AddAndCreateWishlist;
