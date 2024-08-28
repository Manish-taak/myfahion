"use client";
import Headingsection from "@/components/HeadingSection";
import DealsCard from "@/components/ui/DealsCard";
import React, { Fragment, useRef, useState } from "react";
import Productdata from "@/json/products.json";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Overlay from "@/components/ui/Overlay";
import Areyousure from "@/components/popup/AreYouSure";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";
import CountdownTimer from "@/components/ui/CountTimerProducts";

/**
 * Deals section component.
 * 
 * @returns {JSX.Element} JSX for rendering Deals section.
 */
const DealonSec = () => {
  const [newList, setNewList] = useState(false);
  const [viewlist, setviewlist] = useState(false);
  const [Createnewlist, setCreatenewlist] = useState(false);
  const [addtowishlist, setAddtowishlist] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [color, setcolor] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * Sets state to show 'Add and Create Wishlist' popup and overlay.
   */
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
    setcolor(true);
  };

  /**
   * Cancels creation of a new wishlist and hides overlay.
   */
  const cancelCreatenewList = () => {
    setcolor(false);
    setNewList(false);
    setShowOverlay(false);
  };

  /**
   * Sets state to hide 'Add and Create Wishlist' and show 'Create New Wishlist' popup.
   */
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };

  /**
   * Sets state to add product to wishlist and hides related popups.
   */
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };

  /**
   * Sets state to view wishlist and hides related popups.
   */
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };

  /**
   * Closes all popups and overlays.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
  };

  /**
   * Cancels creation of new wishlist and hides related popups.
   */
  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  /**
   * Cancels creation of new wishlist and shows 'Create New Wishlist' popup.
   */
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  /**
   * Cancels viewing wishlist and shows 'Add and Create Wishlist' popup.
   */
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  // Hook to handle clicks outside the popup to close it
  useOutsideClick(popupRef, closePopup);

  return (
    <>
      {/* Renders 'Add and Create Wishlist' popup if newList state is true */}
      {newList && (
        <Addandcreatewishlist
          newlist={newlist}
          Createnew={Createnew}
          cancelpopup={cancelCreatenewList}
          ref={popupRef}
        />
      )}
      {/* Renders 'Create New Wishlist' popup if Createnewlist state is true */}
      {Createnewlist && (
        <Createnewwishlist
          viewwishlist={viewwishlist}
          closepopup={closePopup}
          cancelcreatenew={cancelCreatenew}
          ref={popupRef}
        />
      )}
      {/* Renders confirmation popup when adding to wishlist */}
      {addtowishlist && (
        <Areyousure
          url="/wishlist"
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          heading="Item Has Been Added To Wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelviewwishlist}
          ref={popupRef}
        />
      )}
      {/* Renders confirmation popup when viewing wishlist */}
      {viewlist && (
        <Areyousure
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          heading="Item Has Been Added To Wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelnewlist}
          ref={popupRef}
        />
      )}
      {/* Renders overlay when showOverlay state is true */}
      {showOverlay && <Overlay isOpen={true} />}
      <section className="bg-hf_extra md:bg-white mt-[161px]">
        <NextBreadcrumb bgcolor="bg-extra_bg">
          <p className="text-blue_gray_400 text_14_2 leading-[24px]">
            Showing - (40 Items)
          </p>
        </NextBreadcrumb>
        <div className="py-[40px] md:py-[80px]">
          <div className="container">
            <div className="flex flex-col-reverse justify-center lg:flex-row lg:items-end lg:justify-between gap-5">
              {/* Heading section with sale information */}
              <Headingsection
                smtext="Sale"
                lgtext="Deals On Sale"
                testclass="text-center lg:text-start"
                headingmainclass="justify-center gap-5 lg:gap-0 md:justify-between flex-col lg:flex-row"
              ></Headingsection>
              {/* Countdown timer component */}
              <CountdownTimer endDate="2024-12-31T23:59:59" />
            </div>
            <div className="mt-[30px] md:mt-[60px] grid xl:grid-cols-4 md:grid-cols-3 lg:gap-[30px] md:gap-[20px] grid-cols-2 gap-[13px]">
              {/* Deals card grid displaying product data */}
              {Productdata.slice(0, 8).map((item, index) => (
                <Fragment key={Date.now() + index}>
                  <DealsCard
                    card="vertical"
                    data={item}
                    color={color}
                    CreatenewList={CreatenewList}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealonSec;
