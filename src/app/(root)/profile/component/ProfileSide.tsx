"use client";

import Icons from "@/icons/Index";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import profileside from "@/json/profileside.json";
import Link from "next/link";

// Interface for each item in the profile sidebar
interface ProfileSideItem {
  link: string;
  name: string;
  image: string;
}

/**
 * ProfileSide Component
 * Renders the sidebar navigation for the user profile section.
 */
const ProfileSide = () => {
  const pathname = usePathname(); // Get the current pathname using Next.js hook

  return (
    <>
      {/* Container for the profile sidebar */}
      <div className="w-[375px] bg-white rounded-[14px]">
        {/* Header section */}
        <div className="p-5 text_24_20 text-blue_gray_600 md:text-blue_gray_800 border-b-[1px] border-blue_gray_100">
          Profile Overview
        </div>

        {/* List of navigation items */}
        <div className="py-5 px-4">
          <ul className="flex flex-col gap-[4px]">
            {profileside?.map((item: ProfileSideItem, index: number) => {
              const isActive = pathname.startsWith(`/profile/${item.link}`); // Check if current item is active

              return (
                <Fragment key={index}>
                  {/* Navigation link */}
                  <Link
                    className={`cursor-pointer group py-4 px-[10px] text_16_1 hover:bg-light_primary_shades_4p text-blue_gray_600 hover:text-light_primary rounded-[6px] flex gap-[14px]`}
                    href={`/profile/${item.link}`}
                  >
                    {/* Icon associated with the navigation item */}
                    <Icons
                      className={`fill-blue_gray_500 ${isActive && 'fill-light_primary'} group-hover:fill-light_primary`}
                      type={item.image}
                    />
                    {item.name} {/* Name of the navigation item */}
                  </Link>
                </Fragment>
              );
            })}
          </ul>
        </div>

        {/* Logout section */}
        <div className="py-5 px-[10px] border-t-[1px] border-blue_gray_100">
          <div className="">
            {/* Logout link */}
            <Link href={"/login"} className="py-4 px-[10px] flex gap-[14px] group/item hover:bg-light_primary hover:bg-opacity-5 cursor-pointer">
              <Icons type="LogOut" /> {/* Logout icon */}
              <span className="text_16_1 text-blue_gray_600 group-hover/item:text-light_primary">
                LogOut {/* Logout text */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSide;
