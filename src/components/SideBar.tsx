import React from "react";
import { sidebar } from "@/interFaces/type";
import Icons from "@/icons/Index";
import Link from "next/link";

/**
 * SideBar component for displaying a sidebar menu with various links.
 * @param {sidebar} param0 - Object containing sidebar state and setter function.
 * @param {boolean} param0.sidebar - State indicating whether sidebar is open or closed.
 * @param {Function} param0.setsidebar - Function to set the state of the sidebar.
 * @returns {JSX.Element} SideBar component JSX.
 */
const SideBar = ({ sidebar, setsidebar }: sidebar) => {
  /**
   * Function to close the sidebar after a delay.
   */
  const colsesidebar = () =>
    setTimeout(() => {
      setsidebar(false);
    }, 2000);

  return (
    <>
      {/* Sidebar section */}
      <section
        className={`absolute h-[100vh] ${
          sidebar === true ? "right-0" : "right-[-100%]"
        } bg-white w-full transition-all duration-[0.8s] ease-[cubic-bezier(.175,0.885,0.32,1.275)]`}
      >
        {/* Header with logo and close button */}
        <div className="flex justify-between p-6">
          <Icons type="mainlogo" /> {/* Main logo */}
          <div
            onClick={() => setsidebar(false)} // Close sidebar onClick
            className="p-1 shadow-[0px_2px_14px_0px_rgba(0,0,0,0.08)] rounded-[50%]"
          >
            <Icons type="popupclose" /> {/* Close icon */}
          </div>
        </div>
        {/* Sidebar content */}
        <div className="py-[30px] px-[12px] overflow-auto max-h-[calc(100vh_-_123px)]">
          {/* List of sidebar links */}
          <ul className="flex flex-col gap-4">
            {/* Account link */}
            <Link href={"/profile/basic-Information"}>
              <li
                onClick={() => {
                  colsesidebar();
                }}
                className="group flex gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color"
              >
                <Icons
                  type="accountlogo"
                  className="fill-blue_gray_500 group-hover:fill-light_primary"
                /> {/* Account icon */}
                Account
              </li>
            </Link>
            {/* My orders link */}
            <Link href={"/profile/orders"}>
              <li
                onClick={() => {
                  colsesidebar();
                }}
                className="group flex gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color"
              >
                <Icons
                  type="order"
                  className="fill-blue_gray_500 group-hover:fill-light_primary"
                /> {/* Order icon */}
                My orders
              </li>
            </Link>
            {/* Wishlist link */}
            <Link href={"/wishlist"}>
              <li
                onClick={() => {
                  colsesidebar();
                }}
                className="group flex items-center gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color"
              >
                <Icons
                  type="cardlikeimage"
                  className="fill-blue_gray_500 group-hover:fill-light_primary"
                /> {/* Wishlist icon */}
                Wishlist
              </li>
            </Link>
            {/* My Cart link */}
            <Link href={"/cart"}>
              <li
                onClick={() => {
                  colsesidebar();
                }}
                className="group flex gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color"
              >
                <Icons
                  type="cartlogo"
                  className="fill-blue_gray_500 group-hover:fill-light_primary"
                /> {/* Cart icon */}
                My Cart
              </li>
            </Link>
            {/* Top deals link */}
            <Link href={"/deals-on-sale"}>
              <li
                onClick={() => {
                  colsesidebar();
                }}
                className="group flex items-center gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color"
              >
                <Icons
                  type="topdeals"
                  className="fill-blue_gray_500 group-hover:fill-light_primary"
                /> {/* Top deals icon */}
                top deals
              </li>
            </Link>
            {/* Hot offers (no link) */}
            <li className="group items-center flex gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color">
              <Icons
                type="hotoffer"
                className="fill-blue_gray_500 group-hover:fill-light_primary"
              /> {/* Hot offer icon */}
              hot offers
            </li>
            {/* Pages (no link) */}
            <li className="group flex items-center gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color">
              <Icons
                type="pages"
                className="fill-blue_gray_500 group-hover:fill-light_primary"
              /> {/* Pages icon */}
              pages
            </li>
            {/* Help center link */}
            <Link href={"/profile/help-center"}>
              <li
                onClick={() => {
                  colsesidebar();
                }}
                className="group flex gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color"
              >
                <Icons
                  type="helpcenter"
                  className="fill-blue_gray_500 group-hover:fill-light_primary"
                /> {/* Help center icon */}
                Help center
              </li>
            </Link>
            {/* Return policy (no link) */}
            <li className="group flex gap-2 p-2 hover:text-light_primary text-blue_gray_500 hover:bg-hover_bg_color">
              <Icons
                type="returnpolicy"
                className="fill-blue_gray_500 group-hover:fill-light_primary"
              /> {/* Return policy icon */}
              return policy
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
