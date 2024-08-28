"use client";

import DealsCard from "@/components/ui/DealsCard";
import React, { useRef, useState } from "react";
import Products from "@/json/products.json";
import Icons from "@/icons/Index";
import { cn } from "@/utils/cn";
import WriteReview from "@/components/popup/WriteReview";
import Overlay from "@/components/ui/Overlay";
import { profileinterface } from "@/interFaces/type";
import Areyousure from "@/components/popup/AreYouSure";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 * Functional component for the profile page that manages ratings, reviews, and overlays.
 * 
 * @param {profileinterface} props - Component properties.
 * @param {string} props.classname - CSS classes for styling the main container.
 * @param {function} props.closebtn - Function to close the sidebar or current view.
 * @param {number} props.profilesidebar - Indicates the current state of the profile sidebar.
 * @returns {JSX.Element} The profile page component.
 */
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  // State to manage visibility of the overlay
  const [showOverlay, setShowOverlay] = useState(false);
  // State to manage visibility of the return popup
  const [returnpopup, setreturnpopup] = useState(false);
  // State to manage visibility of the write review popup
  const [writepopup, setwritepopup] = useState(false);
  // State to manage visibility of the delete confirmation popup
  const [deletepopup, setdeletepopup] = useState(false);

  // Ref to track the popup for outside click detection
  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * Function to close all popups and overlay.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setreturnpopup(false);
    setwritepopup(false);
    setdeletepopup(false);
  };

  /**
   * Function to open the write review popup.
   */
  const openwritepopup = () => {
    setwritepopup(true);
    setShowOverlay(true);
  };

  /**
   * Function to open the rating review popup.
   */
  const openratingpopup = () => {
    setreturnpopup(true);
    setShowOverlay(true);
  };

  /**
   * Function to open the delete confirmation popup.
   */
  const opendeletepopup = () => {
    setShowOverlay(true);
    setdeletepopup(true);
  };

  // Hook to detect clicks outside the popup to close it
  useOutsideClick(popupRef, closePopup);

  return (
    <>
      <div className={cn`bg-white w-full max-w-[991px]:overflow-scroll max-[991px]:h-screen ${classname}`}>
        {/* Pop-up section start */}
        {writepopup === true && (
          <>
            <WriteReview
              closepopup={closePopup}
              heading="Edit Rating & Review"
              buttontext="Save Changes"
              ref={popupRef}
            />
          </>
        )}
        {returnpopup === true && (
          <>
            <WriteReview
              closepopup={closePopup}
              heading="Write Review"
              buttontext="Submit Review"
              ref={popupRef}
            />
          </>
        )}
        {deletepopup && (
          <Areyousure
            heading="Are You Sure"
            tittle="Are you sure you want to delete this review?"
            buttontext="Yes, delete"
            closepopup={closePopup}
            cancelnewlist={closePopup}
            ref={popupRef}
          />
        )}
        {showOverlay && <Overlay isOpen={true} />}
        {/* Pop-up section end */}

        <div className={`py-5 px-4 ${profilesidebar === 6 ? "fixed right-0 left-0 top-0 " : "static"} bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] min-[991px]:hidden flex gap-[14px] items-center justify-between`}>
          <h2 onClick={closebtn} className="text_20 text-blue_gray_600 flex items-center gap-x-[14px]">
            <Icons type="leftarrowback" />
            Mans Fashion
          </h2>
          <div className="flex items-center gap-x-[14px]">
            <Icons type="search" />
            <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" />
          </div>
        </div>

        <div className="max-[990px]:pt-[90px] max-[990px]:px-4 max-[990px]:pb-5 flex flex-col gap-[10px] tab:gap-[30px] bg-extra_4 max-[991px]:overflow-scroll max-[991px]:h-screen ">
          <div className="flex flex-col gap-5 tab:gap-[30px] p-1 min-[375px]:p-4 tab:p-[30px] bg-white rounded-[10px]">
            <div className="w-full border-b-[1px] border-blue_gray_100 pb-5 tab:pb-[30px] tab:mb-[30px]">
              <h2 className="text_24 text-blue_gray_800">
                My Ratings & Reviews
              </h2>
            </div>
            {Products?.slice(0, 2).map((item, index) => (
              <div key={Date.now() + index}>
                <DealsCard
                  openwritepopup={openwritepopup}
                  opendeletepopup={opendeletepopup}
                  card="Ratingcard"
                  data={item}
                />
              </div>
            ))}
          </div>

          <div className="p-4 tab:p-[30px] w-full bg-white rounded-[10px]">
            <h2 className="text-blue_gray_800 text_24 border-b-[1px] border-blue_gray_50 pb-5 mb-5 md:pb-[30px] md:mb-[30px]">
              More Orders For Reviews
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[30px] lg:grid-cols-3 xl:grid-cols-4">
              {Products?.slice(0, 4).map((item, index) => (
                <div key={Date.now() + index}>
                  <DealsCard
                    openratingpopup={openratingpopup}
                    card="Morereview"
                    data={item}
                    openpopup={openratingpopup}
                    opendeletepopup={opendeletepopup}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
