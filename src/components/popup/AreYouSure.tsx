import React, { forwardRef } from "react";
import Icons from "@/icons/Index";
import Button from "../ui/Button";
import Link from "next/link";
import { areyousureprops } from "@/interFaces/type";

/**
 * AreYouSure component to confirm actions with a popup dialog.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {string} props.tittle - Title or message to display
 * @param {string} props.buttontext - Text to display on the confirmation button
 * @param {Function} props.cancelnewlist - Function to cancel the action
 * @param {string} props.heading - Heading text for the popup
 * @param {string} props.url - URL to redirect or link on confirmation
 * @param {React.Ref<HTMLDivElement>} ref - Ref to the component's HTMLDivElement
 * @returns {JSX.Element} AreYouSure component JSX
 */
const AreYouSure = forwardRef<HTMLDivElement, areyousureprops>(
  ({ closepopup, tittle, buttontext, cancelnewlist, heading, url }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[343px] md:max-w-[510px] w-full"
      >
        <div className="bg-white p-5 md:p-[30px] rounded-[10px] ">
          {/* Popup header */}
          <div className="pb-[20px]">
            <div className="flex justify-between gap-[10px] pb-[10px] md:pb-5 ">
              {/* Heading */}
              <h2 className="text_24 text-blue_gray_800">{heading}</h2>
              {/* Close icon */}
              <div onClick={closepopup} className="cursor-pointer">
                <Icons type="popupclose" />
              </div>
            </div>
            {/* Message or title */}
            <p className="text_16_2 text-blue_gray_400">{tittle}</p>
          </div>
          {/* Buttons section */}
          <div className="flex gap-[10px]">
            {/* Cancel button */}
            <div onClick={cancelnewlist} className="w-full">
              <Button
                className="rounded-lg md:max-w-[215px] w-full"
                varient="thirdly"
              >
                Cancel
              </Button>
            </div>
            {/* Confirmation button with Link */}
            <div onClick={closepopup} className="w-full">
              <Link href={url ?? location.pathname}>
                <Button varient="primary" className="md:max-w-[215px] w-full">
                  {buttontext}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default AreYouSure;
