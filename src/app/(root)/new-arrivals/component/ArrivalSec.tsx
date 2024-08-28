"use client";
import Headingsection from "@/components/HeadingSection";
import FeaturedCard from "@/components/ui/FeaturedCard";
import React, { Fragment, useRef, useState } from "react";
import Productdata from "@/json/products.json";
import Button from "@/components/ui/Button";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Overlay from "@/components/ui/Overlay";
import Areyousure from "@/components/popup/AreYouSure";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 * Renders the New Arrivals section with product cards and popups for wishlist functionality.
 * @returns {JSX.Element} JSX element containing the New Arrivals section.
 */
const ArrivalSec = () => {
   // State for showing add or create wishlist popup.
  const [newList, setNewList] = useState(false);
  // State for showing view wishlist popup.
  const [viewlist, setviewlist] = useState(false);
  // State for showing create new wishlist popup.
  const [Createnewlist, setCreatenewlist] = useState(false);
   // State for showing confirmation popup after adding to wishlist.
  const [addtowishlist, setAddtowishlist] = useState(false);
   // State for showing overlay.
  const [showOverlay, setShowOverlay] = useState(false);
   // State for managing color in UI elements.
  const [color, setcolor] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * Sets state and shows the "Add and Create Wishlist" popup.
   */
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
    setcolor(true);
  };

  /**
   * Sets state to close the "Add and Create Wishlist" popup and shows the "Create New Wishlist" popup.
   */
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };

  /**
   * Sets state to add the product to wishlist and close popups.
   */
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };

  /**
   * Sets state to view the wishlist and close other popups.
   */
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };

  /**
   * Closes all popups and overlay.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
  };

  /**
   * Cancels creating a new wishlist and closes related popups.
   */
  const cancelCreatenewList = () => {
    setcolor(false);
    setNewList(false);
    setShowOverlay(false);
  };

  /**
   * Cancels creating a new wishlist and shows the "Add and Create Wishlist" popup.
   */
  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  /**
   * Cancels adding to wishlist and shows the "Create New Wishlist" popup.
   */
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  /**
   * Cancels viewing the wishlist and shows the "Add and Create Wishlist" popup.
   */
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  // Custom hook to handle outside clicks to close popups
  useOutsideClick(popupRef, closePopup);

  return (
    <>
      {/* Render "Add and Create Wishlist" popup if newList state is true */}
      {newList && (
        <Addandcreatewishlist
          newlist={newlist}
          Createnew={Createnew}
          cancelpopup={cancelCreatenewList}
          ref={popupRef}
        />
      )}

      {/* Render "Create New Wishlist" popup if Createnewlist state is true */}
      {Createnewlist && (
        <Createnewwishlist
          viewwishlist={viewwishlist}
          closepopup={closePopup}
          cancelcreatenew={cancelCreatenew}
          ref={popupRef}
        />
      )}

      {/* Render "Item Added to Wishlist" confirmation popup if addtowishlist state is true */}
      {addtowishlist && (
        <Areyousure
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelviewwishlist}
          ref={popupRef}
        />
      )}

      {/* Render "Item Added to Wishlist" confirmation popup if viewlist state is true */}
      {viewlist && (
        <Areyousure
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelnewlist}
          ref={popupRef}
        />
      )}

      {/* Render Overlay component if showOverlay state is true */}
      {showOverlay && <Overlay isOpen={true} />}

      {/* New Arrivals section */}
      <section className=" mt-[161px]">
        <div className="bg-extra_4  py-[40px] md:py-[80px] ">
          <div className="container">
            {/* Heading for New Arrivals section */}
            <Headingsection
              smtext="New"
              lgtext="New Arrivals"
              headingmainclass="justify-center pb-[30px] md:pb-[60px]  "
              testclass="text-center"
            />

            {/* Grid of product cards */}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px] md:gap-[30px] ">
              {/* Map through Productdata to render FeaturedCard for each product */}
              {Productdata.map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    <FeaturedCard
                      hoverEffect={false}
                      card="vertical"
                      star={true}
                      data={item}
                      bg="bg-extra_bg"
                      CreatenewList={CreatenewList}
                      // featurewish={featurewish}
                    />
                  </Fragment>
                );
              })}
            </div>

            {/* Load more button (visible on mobile) */}
            <Button
              className=" md:hidden py-[10px] px-4 text_16_3 mt-[30px] w-full "
              varient="primary"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArrivalSec;
