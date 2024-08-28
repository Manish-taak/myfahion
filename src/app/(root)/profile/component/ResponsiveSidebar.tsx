"use client";

import React, { Fragment, useState } from "react";
import Icons from "@/icons/Index";
import profiledata from "@/json/profileside.json";
import Account from "../basic-Information/page";
import Orders from "../orders/page";
import Savedaddress from "../address/page";
import PaymentPage from "../payment-options/page";
import HelpCenter from "../help-center/page";
import Coupons from "../coupons/page";
import Review from "../review-rating/page";
import Wishlistpage from "../wishlist/page";

/**
 * ResponsiveSidebar Component
 * Renders a responsive sidebar navigation for the user profile section.
 */
const ResponsiveSidebar: React.FC = () => {
  const [profilesidebar, setProfileSidebar] = useState<number | null>(null);

  // Function to handle clicking on sidebar items
  const handleClick = (id: number) => {
    setProfileSidebar(id);
  };

  // Function to close the sidebar
  function closebtn<ElementType>() {
    setProfileSidebar(0);
  }

  return (
    <div className="w-full bg-white rounded-[14px]">
      {/* Profile Overview header */}
      <div className="p-5 text_24_20 text-blue_gray_600 md:text-blue_gray_800 border-b-[1px] border-blue_gray_100">
        Profile Overview
      </div>

      {/* Sidebar navigation items */}
      <div className="py-5 px-4">
        <ul className="flex flex-col gap-[4px]">
          {profiledata?.map((item) => (
            <Fragment key={item.id}>
              {/* Sidebar item */}
              <div onClick={() => handleClick(item.id)}>
                <li className="group py-4 px-[10px] text_16_1 hover:bg-light_primary_shades_4p text-blue_gray_600 hover:text-light_primary rounded-[6px] flex gap-[14px]">
                  <Icons
                    className={`${profilesidebar === item.id ? "fill-light_primary" : "fill-blue_gray_500"} group-hover:fill-light_primary`}
                    type={item.image}
                  />
                  {item.name} {/* Sidebar item name */}
                </li>
              </div>
            </Fragment>
          ))}
        </ul>
      </div>

      {/* Logout section */}
      <div className="py-5 px-[10px] border-t-[1px] border-blue_gray_100">
        <div className="py-4 px-[10px] flex gap-[14px]">
          <Icons type="LogOut" /> {/* Logout icon */}
          <span className="text_16_1 text-blue_gray_600">LogOut</span> {/* Logout text */}
        </div>
      </div>

      {/* Render different profile pages based on sidebar selection */}
      <Account profilesidebar={profilesidebar} closebtn={closebtn} />
      <Savedaddress profilesidebar={profilesidebar} closebtn={closebtn} />
      <Orders profilesidebar={profilesidebar} closebtn={closebtn} classname={`${profilesidebar === 4 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`} />
      <PaymentPage profilesidebar={profilesidebar} closebtn={closebtn} classname={`${profilesidebar === 3 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`} />
      <HelpCenter profilesidebar={profilesidebar} closebtn={closebtn} classname={`${profilesidebar === 8 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`} />
      <Wishlistpage profilesidebar={profilesidebar} closebtn={closebtn} classname={`${profilesidebar === 5 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`} />
      <Review profilesidebar={profilesidebar} closebtn={closebtn} classname={`${profilesidebar === 6 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`} />
      <Coupons profilesidebar={profilesidebar} closebtn={closebtn} classname={`${profilesidebar === 7 ? "right-[0]" : "right-[-100%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`} />
    </div>
  );
};

export default ResponsiveSidebar;
