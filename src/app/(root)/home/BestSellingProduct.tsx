"use client";
import React, { Fragment, useRef, useState } from "react";
import Headingsection from "@/components/HeadingSection";
import Icons from "@/icons/Index";
import FeaturedCard from "@/components/ui/FeaturedCard";
import Products from "@/json/products.json";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Areyousure from "@/components/popup/AreYouSure";
import Link from "next/link";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import Overlay from "@/components/ui/Overlay";

/**
 * BestSellingProduct component renders a section displaying best-selling products with options
 * for creating wishlists, viewing wishlists, and handling overlay functionality.
 *
 * @returns {JSX.Element} JSX for rendering the BestSellingProduct component.
 */
const BestSellingProduct = () => {
  const router = useRouter();
  const [newList, setNewList] = useState(false); // State for showing add or create wishlist popup.
  const [viewlist, setviewlist] = useState(false); // State for showing view wishlist popup.
  const [Createnewlist, setCreatenewlist] = useState(false); // State for showing create new wishlist popup.
  const [addtowishlist, setAddtowishlist] = useState(false); // State for showing confirmation popup after adding to wishlist.
  const [showOverlay, setShowOverlay] = useState(false); // State for showing overlay.
  const [color, setcolor] = useState(false); // State for managing color in UI elements.
  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * Sets newList state to true and shows overlay and sets color state to true.
   */
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
    setcolor(true);
  };

  /**
   * Sets newList state to false and sets Createnewlist state to true.
   */
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };

  /**
   * Sets addtowishlist state to true and resets newList and Createnewlist states.
   */
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };

  /**
   * Sets viewlist state to true and resets newList, Createnewlist, and addtowishlist states.
   */
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };

  /**
   * Closes all popups and overlays by resetting respective states.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
  };

  /**
   * Cancels create new list action by resetting color, newList, and showOverlay states.
   */
  const cancelCreatenewList = () => {
    setcolor(false);
    setNewList(false);
    setShowOverlay(false);
  };

  /**
   * Cancels create new action by setting newList to true and Createnewlist to false.
   */
  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  /**
   * Cancels new list action by setting newList to false, Createnewlist to true, and viewlist to false.
   */
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  /**
   * Cancels view wishlist action by setting newList to true and addtowishlist to false.
   */
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  useOutsideClick(popupRef, closePopup); // Custom hook to handle outside click events for closing popups.

  return (
    <>
      {newList && (
        // Addandcreatewishlist pop up
        <Addandcreatewishlist
          newlist={newlist}
          Createnew={Createnew}
          ref={popupRef}
          cancelpopup={cancelCreatenewList}
          
        />
      )}
      {Createnewlist && (
        // Createnewwishlist pop up
        <Createnewwishlist
          viewwishlist={viewwishlist}
          closepopup={closePopup}
          cancelcreatenew={cancelCreatenew}
          ref={popupRef}
        />
      )}
      {addtowishlist && (
        // Areyousure pop up
        <Areyousure
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          buttontext="View wishlist"
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          closepopup={closePopup}
          cancelnewlist={cancelviewwishlist}
          ref={popupRef}
        />
      )}
      {viewlist && (
        // Areyousure pop up
        <Areyousure
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          buttontext="View wishlist"
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          closepopup={closePopup}
          cancelnewlist={cancelnewlist}
          ref={popupRef}
        />
      )}
      {showOverlay && <Overlay isOpen={true} />}
      <section className="bg-[#f57e5d0a]">
        <div className="container">
          <div className="py-[40px] md:py-[80px]">
            {/* Heading Section */}
            <Headingsection
              lgtextclass="whitespace-nowrap"
              headingmainclass="mb-[30px] md:mb-[60px] justify-center md:text-start text-center md:justify-between w-full "
              smtext="Products"
              lgtext="Best Selling Products"
            >
              {/* View All Button */}
              <Link href={"/products"}>
                <button className="py-[10px] px-[16px] gap-[10px] hidden md:flex items-center hover:bg-light_primary hover:bg-opacity-[0.1] rounded-md">
                  <span className="text-light_primary">VIEW ALL</span>
                  <Icons type="viewallarrow" />
                </button>
              </Link>
            </Headingsection>
            {/* Grid of Featured Cards */}
            <div className="grid md:gap-[30px] gap-[13px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {Products.slice(0, 8).map((item, index) => (
                <Fragment key={index}>
                  <div>
                    <FeaturedCard
                      bg="bg-extra_bg"
                      custompaddingboxbottom="p-[10px] md:p-[0px]"
                      hoverEffect
                      data={item}
                      card="vertical"
                      star
                      CreatenewList={CreatenewList}
                      color={color}
                    />
                  </div>
                </Fragment>
              ))}
            </div>
            {/* Button to View More Products */}
            <Button
              varient="primary"
              className="md:hidden py-[10px] px-4 text_16_3 mt-[30px] w-full"
            >
              View More Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingProduct;
