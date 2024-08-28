"use client";

import Button from "@/components/ui/Button";
import Icons from "@/icons/Index";
import Products from "@/json/products.json";
import { cn } from "@/utils/cn";
import React, { Fragment, useRef, useState } from "react";
import DealsCard from "@/components/ui/DealsCard";
import { profileinterface } from "@/interFaces/type";
import Areyousure from "@/components/popup/AreYouSure";
import Overlay from "@/components/ui/Overlay";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Sortbydropdown from "@/components/ui/SortByDropdown";
import sortdata from "@/json/sort.json";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 * Page component that handles the profile interface including wishlist, popups, and sorting functionality.
 *
 * @param {profileinterface} props - Component properties.
 * @param {string} props.classname - CSS class names for styling the main container.
 * @param {function} props.closebtn - Function to close the current view or sidebar.
 * @param {number} props.profilesidebar - Represents the current state of the profile sidebar.
 * @returns {JSX.Element} The rendered profile page component.
 */
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  // State hooks for managing the visibility of various popups and the overlay
  const [value, setvalue] = useState("sortby");
  const [deletepopup, setdeletepopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [newList, setNewList] = useState(false);
  const [viewlist, setviewlist] = useState(false);
  const [Createnewlist, setCreatenewlist] = useState(false);
  const [addtowishlist, setAddtowishlist] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Function to open the delete confirmation popup
  const opendeletepopup = () => {
    setShowOverlay(true);
    setdeletepopup(true);
  };

  // Function to initiate the creation of a new wishlist
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
    setShowOverlay(true);
  };

  // Function to manage the creation of a new list
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };

  // Function to view the wishlist
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };

  // Function to close all popups and overlay
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
    setdeletepopup(false);
  };

  // Function to cancel the creation of a new list and hide the overlay
  const cancelCreatenewList = () => {
    setNewList(false);
    setShowOverlay(false);
  };

  // Function to cancel the creation of a new wishlist and hide the overlay
  const cancelCreatenew = () => {
    setCreatenewlist(false);
    setShowOverlay(false);
  };

  // Function to cancel the new list creation and show the wishlist creation popup
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  // Function to cancel the view wishlist action and revert to showing the new list
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  // Hook to detect clicks outside the popup to close it
  useOutsideClick(popupRef, closePopup);

  return (
    <>
      {/* Popup code start */}
      {newList && (
        <Addandcreatewishlist
          newlist={newlist}
          Createnew={Createnew}
          cancelpopup={cancelCreatenewList}
          ref={popupRef}
        />
      )}
      {Createnewlist && (
        <Createnewwishlist
          viewwishlist={viewwishlist}
          closepopup={closePopup}
          cancelcreatenew={cancelCreatenew}
          ref={popupRef}
        />
      )}
      {addtowishlist && (
        <Areyousure
          heading="Item Has Been Added To Wishlist"
          tittle="Your item has been successfully added to your wishlist. Thank you!"
          buttontext="View Wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelviewwishlist}
          ref={popupRef}
        />
      )}
      {viewlist && (
        <Areyousure
          heading="Item Has Been Added To Wishlist"
          tittle="Your item has been successfully added to your wishlist. Thank you!"
          buttontext="View Wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelnewlist}
          ref={popupRef}
        />
      )}
      {showOverlay && <Overlay isOpen={true} />}
      {deletepopup && (
        <Areyousure
          heading="Are You Sure"
          closepopup={closePopup}
          cancelnewlist={closePopup}
          tittle="Are you sure you want to remove this product from your wishlist?"
          buttontext="Yes, Remove"
          ref={popupRef}
        />
      )}
      {/* Popup code end */}

      {/* Main content section */}
      <section className={cn`w-full overflow-scroll h-screen lg:overflow-visible lg:h-full ${classname}`}>
        <div>
          {/* Mobile top navigation for wishlist */}
          <div
            className={`${profilesidebar === 5 ? "fixed right-0 left-0 top-0 " : "static"
              } bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] min-[991px]:hidden py-[20px] px-[16px] flex gap-[14px] items-center justify-between`}
          >
            <h2
              onClick={closebtn}
              className="text_20 text-blue_gray_600 flex items-center gap-x-[14px]"
            >
              {/*  svg icon type leftarrowback  */}
              <Icons type="leftarrowback" />
              My Wishlist
            </h2>
            {/* svg icon type  heart  */}
            <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" />
          </div>

          {/* Wishlist header with sorting and search */}
          <div className="flex justify-between p-[30px] rounded-[10px] pb-[30px] gap-[30px] mb-[30px] bg-white min-[0px]:hidden xl:flex">
            <div className="flex items-center max-w-[220px] w-full">
              <h3
                onClick={Createnew}
                className="whitespace-nowrap py-[10px] px-4 hover:bg-light_primary hover:bg-opacity-[0.1] rounded-[6px] uppercase tab:flex items-center gap-2 text-light_primary text_16_2_10 cursor-pointer hidden md:block"
              >
                {/* svg icon type primaryplus  */}
                <Icons className="fill-light_primary" type="primaryplus" />
                Create new List
              </h3>
            </div>
            <span className="flex items-center max-w-[645px] rounded-[6px] gap-[6px] w-full border-[1px] border-blue_gray_50 bg-white justify-between py-3 px-[14px]">
              <input
                type="text"
                placeholder="Search Brands..."
                className="overflow-hidden text_16_2 text-blue_gray_400 w-full outline-none"
              />
              {/* svg icon type search  */}
              <Icons type="search" />
            </span>
            <div className="flex items-center justify-between gap-[30px]">
              {/* Sortby dropdown   */}
              <Sortbydropdown heading={value} className="relative">
                <ul className="flex flex-col gap-[12px]">
                  {sortdata.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <li
                          onClick={() => setvalue(item)}
                          className="text_16_2 text-blue_gray_700 py-[3px] list-none sidehovereffect truncate cursor-pointer"
                        >
                          {item}
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </Sortbydropdown>
            </div>
          </div>
        </div>

        {/* Wishlist items and deals */}
        <div className="max-[990px]:pt-[90px] max-[990px]:px-4 max-[990px]:bg-extra_bg">
          <div className="flex flex-col gap-y-5 py-5 px-2 min-[375px]:px-4 tab:p-[30px] bg-white rounded-[10px] xl:mt-[30px]">
            <div className="border-b-[1px] border-blue_gray_50 pb-5 tab:hidden">
              <h2 className="text_24 text-blue_gray_800">My Ratings & Reviews</h2>
            </div>
            {Products?.map((item, index) => (
              <Fragment key={index}>
                <DealsCard
                  card="profilcard"
                  data={item}
                  openpopup={opendeletepopup}
                />
              </Fragment>
            ))}
          </div>
        </div>

        {/* Load more button for desktop view */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center pt-[30px]">
            <Button varient="primary">Load more</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
