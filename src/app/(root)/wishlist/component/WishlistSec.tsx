/**
 * @file WishlistSec Component
 * @description This component handles the Wishlist section including the creation of new wishlists, adding items to wishlists, and managing popup states.
 */

"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Icons from "@/icons/Index";
import DealsCard from "@/components/ui/DealsCard";
import Products from "@/json/products.json";
import Button from "@/components/ui/Button";
import { whislits } from "@/interFaces/type";
import Overlay from "@/components/ui/Overlay";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Sharewishlist from "@/components/popup/ShareWishlist";
import Areyousure from "@/components/popup/AreYouSure";
import Sortbydropdown from "@/components/ui/SortByDropdown";
import sortdata from "@/json/sort.json";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";
import useOutsideClick from "@/lib/hooks/useOutsideclick "


/**
 * @function WishlistSec
 * @description The main function for the WishlistSec component.
 * @param {whislits} className - Class names for styling.
 * @returns {JSX.Element} The WishlistSec component.
 */


const WishlistSec = ({ className }: whislits) => {

  // state to manage sortby dropsown values
  const [value, setValue] = useState("sortby");
   // State for showing add or create wishlist popup.
  const [newList, setNewList] = useState(false);
  // State for showing view wishlist popup.
  const [viewList, setViewList] = useState(false);
  // State for showing create new wishlist popup.
  const [createNewList, setCreateNewList] = useState(false);
   // State for showing confirmation popup after adding to wishlist.
  const [addToWishlist, setAddToWishlist] = useState(false);
   // State for showing overlay.
  const [showOverlay, setShowOverlay] = useState(false);
  // state to manage deletepopup
  const [deletePopup, setDeletePopup] = useState(false);
  // state to manage shares
  const [share, setShare] = useState(false);
  // state to manage colors in ui
  const [color, setColor] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * @function Createnew
   * @description Handles the creation of a new list.
   */
  const Createnew = () => {
    setNewList(false);
    setCreateNewList(true);
    setShowOverlay(true);
  };

  /**
   * @function newlist
   * @description Opens the add to wishlist popup.
   */
  const newlist = () => {
    setAddToWishlist(true);
    setNewList(false);
    setCreateNewList(false);
  };

  /**
   * @function viewwishlist
   * @description Opens the view wishlist popup.
   */
  const viewwishlist = () => {
    setViewList(true);
    setNewList(false);
    setCreateNewList(false);
    setAddToWishlist(false);
  };

  /**
   * @function closePopup
   * @description Closes all popups.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreateNewList(false);
    setAddToWishlist(false);
    setViewList(false);
    setShare(false);
    setDeletePopup(false);
  };

  /**
   * @function cancelCreatenewList
   * @description Cancels the creation of a new list.
   */
  const cancelCreatenewList = () => {
    setColor(false);
    setNewList(false);
    setShowOverlay(false);
  };

  /**
   * @function cancelCreatenew
   * @description Cancels the creation of a new list popup.
   */
  const cancelCreatenew = () => {
    setCreateNewList(false);
    setShowOverlay(false);
  };

  /**
   * @function cancelnewlist
   * @description Cancels the new list creation process.
   */
  const cancelnewlist = () => {
    setNewList(false);
    setCreateNewList(true);
    setViewList(false);
  };

  /**
   * @function cancelviewwishlist
   * @description Cancels the view wishlist popup.
   */
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddToWishlist(false);
  };

  /**
   * @function sharelist
   * @description Opens the share wishlist popup.
   */
  const sharelist = () => {
    setShare(true);
    setShowOverlay(true);
  };

  /**
   * @function opendeletepopup
   * @description Opens the delete confirmation popup.
   */
  const opendeletepopup = () => {
    setShowOverlay(true);
    setDeletePopup(true);
    console.log("you clicked");
  };

  // Custom hook to handle outside click
  useOutsideClick(popupRef, closePopup);

  // State for managing load more button
  const [visibleCount, setVisibleCount] = useState(4);

  /**
   * @function loadmore
   * @description Loads more items in the wishlist.
   */
  const loadmore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const [showwishlistcount, setShowwishlistcount] = useState<number>();

  useEffect(() => {
    let count = Products?.length || 0;
    setShowwishlistcount(count);
    localStorage.setItem("wishlist", count.toString());
  }, []);

  return (
    <>
      {newList && (
        // Addandcreatewishlist pop up
        <Addandcreatewishlist
          newlist={newlist}
          Createnew={Createnew}
          cancelpopup={cancelCreatenewList}
          ref={popupRef}
        />
      )}
      {createNewList && (
        // Createnewwishlist pop up 
        <Createnewwishlist
          viewwishlist={viewwishlist}
          closepopup={closePopup}
          cancelcreatenew={cancelCreatenew}
          ref={popupRef}
        />
      )}
      {addToWishlist && (
        //  Areyousure pop up
        < Areyousure
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          tittle="Your Item has Been Successfully added To Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelviewwishlist}
          ref={popupRef}
        />
      )}
      {viewList && (
        //  Areyousure pop up
        <Areyousure
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          tittle="Your Item has Been Successfully added To Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelnewlist}
          ref={popupRef}
        />
      )}
      {showOverlay && (
        // Display overlay component
        <Overlay isOpen={true} />
      )}
      {share && (
        // Display component for sharing the wishlist
        <Sharewishlist closepopup={closePopup} ref={popupRef} />
      )}
      {deletePopup && (
        // Display confirmation component for deleting an item from the wishlist
        <Areyousure
          heading="Are You Sure"
          tittle="Are you sure you want to remove this product from your wishlist?"
          buttontext="Yes, remove"
          closepopup={closePopup}
          cancelnewlist={closePopup}
          ref={popupRef}
        />
      )}
      <section className="mt-[159px]">
        {/* NextBreadcrumb */}
        <NextBreadcrumb
          bgcolor="bg-extra_bg">
          <p className="text_14_2 leading-[24px] text-blue_gray_400 ">
            Showing - ({showwishlistcount} Products)
          </p>
        </NextBreadcrumb>
        <div className="container">
          <div className="py-[40px]">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-x-3">
                {/* login icon svg */}
                <Icons type="loginicon" />
                <h5 className="text_20_14 text-blue_gray_600">Raj Kumar</h5>
              </div>
              <div
                onClick={sharelist}
                className="flex items-center gap-x-3 cursor-pointer "
              >
                {/* triangleshare icon svg */}
                <Icons type="triangleshare" />
                <h5 className="text_20_14 text-blue_gray_600">
                  Share With Others
                </h5>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 my-[30px] border-hf_image border-b-[1px] pb-[30px] gap-[30px] mb-[30px] ">
                <div className="flex items-center ">
                  <h3
                    onClick={Createnew}
                    className="whitespace-nowrap py-[10px] px-4 hover:bg-light_primary hover:bg-opacity-[0.1] rounded-[6px] uppercase  tab:flex  items-center gap-2 text-light_primary text_16_2_10 cursor-pointer hidden md:block"
                  >
                    {/* plus icon svg */}
                    <Icons className="fill-light_primary" type="plus" /> Create new List
                  </h3>
                </div>
                <div className="flex items-center justify-between gap-[30px]">
                  <span className="flex items-center max-w-[500px] rounded-[6px]   gap-[6px] w-full border  border-blue_gray_50 overflow-hidden ">
                    <input
                      type="text"
                      placeholder="Search Brands..."
                      className=" overflow-hidden placeholder:text_16_2 text-blue_gray_400 py-3 px-[14px] max-w-[446px] w-full outline-none"
                    />
                    {/* search icon svg */}
                    <Icons type="search" />
                  </span>
                  {/*  Sortby dropdown  */}
                  <Sortbydropdown heading={value} className="relative">
                    <ul className="flex flex-col gap-[12px]">
                      {sortdata.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <li
                              onClick={() => setValue(item)}
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
            <div className="grid grid-cols-2 md:grid-cols-3  gap-[13px] lg:gap-[30px] xl:grid-cols-4 mt-5 min-[1025px]:mt-0 ">
              {Products?.slice(0, visibleCount)?.map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    {/* common card DealsCard  card = vertical  */}
                    <DealsCard
                      card="vertical"
                      openpopup={opendeletepopup}
                      data={item}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="hidden tab:block">
        <div className="flex justify-center items-center pt-[30px] pb-[80px] bg-extra_bg">
          {/* btn load more */}
          <Button onClick={loadmore} varient="primary">Load more</Button>
        </div>
      </div>
    </>
  );
};
export default WishlistSec;
