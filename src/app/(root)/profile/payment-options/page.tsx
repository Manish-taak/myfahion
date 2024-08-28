
"use client";

import Icons from "@/icons/Index";
import React, { useState } from "react";
import { profileinterface } from "@/interFaces/type";
import Upiaddress from "./component/UpiAddress";
import Cardsoption from "./component/CardsOption";

/**
 * Functional component for managing payment options including UPI addresses and card options.
 * 
 * @param {profileinterface} props - Component properties.
 * @param {string} props.classname - CSS classes for styling the main container.
 * @param {function} props.closebtn - Function to close the sidebar or current view.
 * @param {number} props.profilesidebar - Indicates the current state of the profile sidebar.
 * @returns {JSX.Element} The payment options management component.
 */
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  // State to manage visibility of UPI address form
  const [show, setshow] = useState(false);
  // State to switch between UPI and card options
  const [upi, setupi] = useState(false);
  // State to manage visibility of card addition form
  const [addcard, setaddcard] = useState(false);

  return (
    <>
      <div className={`${classname} w-full`}>
        <div className={`w-full max-[990px]:overflow-scroll h-screen lg:h-full `}>
          <div
            className={`${profilesidebar === 3 ? "fixed right-0 left-0 top-0 " : "static"
              } bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] tab:hidden py-[20px] px-[16px] flex gap-[14px] items-center`}
          >
            {/* Close button for sidebar */}
            <div onClick={closebtn}>
              <Icons type="leftarrowback" />
            </div>
            {/* Payment Options title */}
            <h2 className="text_20 text-blue_gray_600"> Payment Options</h2>
          </div>
          <div className="max-[990px]:py-5 max-[990px]:px-4 max-[990px]:bg-extra_bg max-[991px]:mt-[70px]">
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 md:p-[30px] rounded-[14px]">
              {/* Title for desktop view */}
              <h2 className="text_24_20 text-blue_gray_800 hidden lg:block">
                Payment Options
              </h2>
              {/* Tabs for switching between UPI and card options */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-evenly lg:justify-normal">
                <h4
                  className={`py-[11px] px-2 text_16_3 text-blue_gray_500 uppercase cursor-pointer max-w-[150px] lg:w-auto w-full flex justify-center ${upi === false
                    && "text-light_primary border-b-2 border-light_primary"}`}
                  onClick={() => setupi(false)}
                >
                  Upi Address
                </h4>
                <h4
                  className={`py-[11px] px-2 text_16_3 text-blue_gray_500 uppercase cursor-pointer max-w-[150px] lg:w-auto w-full flex justify-center ${upi === true
                    && "text-light_primary border-b-2 border-light_primary"}`}
                  onClick={() => setupi(true)}
                >
                  cards
                </h4>
              </div>
            </div>

            {/* UPI payment mode */}
            <div className={`${upi === false ? "block" : "hidden"}`}>
              <Upiaddress
                show={show}
                setshow={setshow}
              />
            </div>

            {/* Card payment mode */}
            <div className={`${upi === true ? "block" : "hidden"}`}>
              <Cardsoption
                addcard={addcard}
                setaddcard={setaddcard}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;