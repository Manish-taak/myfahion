import Headingsection from "@/components/HeadingSection";
import Productdata from "@/json/products.json";
import DealsCard from "@/components/ui/DealsCard";
import { Fragment, useRef, useState } from "react";
import Overlay from "@/components/ui/Overlay";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Areyousure from "@/components/popup/AreYouSure";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import CountdownTimer from "@/components/ui/CountTimerProducts";

/**
 * DealsCardSection component renders a section displaying deals on sale with product cards.
 *
 * @returns {JSX.Element} JSX for rendering the DealsCardSection component.
 */
const DealsCardSection = () => {
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
   * Opens the popup to add or create a wishlist.
   */
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
    setcolor(true);
  };

  /**
   * Sets the state to close the create new wishlist popup.
   */
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };

  /**
   * Sets the state to add the current product to a wishlist.
   */
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };

  /**
   * Sets the state to view the wishlist.
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
    // setcolor(false);
  };

  /**
   * Cancels creating a new wishlist and closes the overlay.
   */
  const cancelCreatenewList = () => {
    setcolor(false);
    setNewList(false);
    setShowOverlay(false);
  };

  /**
   * Cancels creating a new wishlist.
   */
  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  /**
   * Cancels adding to a new wishlist.
   */
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  /**
   * Cancels viewing the wishlist.
   */
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  // Calls useOutsideClick hook to close popups when clicking outside
  useOutsideClick(popupRef, closePopup);

  return (
    <>
      {/* Render Addandcreatewishlist component if newList is true */}
      {newList && (
        <Addandcreatewishlist
          newlist={newlist} // Pass newlist prop
          Createnew={Createnew} // Pass Createnew prop
          cancelpopup={cancelCreatenewList} // Function to cancel popup
          ref={popupRef} // Ref for the popup
        />
      )}

      {/* Render Createnewwishlist component if Createnewlist is true */}
      {Createnewlist && (
        <Createnewwishlist
          viewwishlist={viewwishlist} // Pass viewwishlist prop
          closepopup={closePopup} // Function to close popup
          cancelcreatenew={cancelCreatenew} // Function to cancel creating new list
          ref={popupRef} // Ref for the popup
        />
      )}
      {/*  Render Areyousure component if addtowishlist is true */}
      {addtowishlist && (
        <Areyousure
          url="/wishlist" // URL to redirect to wishlist
          heading="Item Has Been Added To Wishlist" // Heading text
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!" // Title text
          buttontext="View wishlist" // Button text
          closepopup={closePopup} // Function to close popup
          cancelnewlist={cancelviewwishlist} // Function to cancel viewing wishlist
          ref={popupRef} // Ref for the popup
        />
      )}

      {/* Render Areyousure component if viewlist is true */}
      {viewlist && (
        <Areyousure
          url="/wishlist" // URL to redirect to wishlist
          heading="Item Has Been Added To Wishlist" // Heading text
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!" // Title text
          buttontext="View wishlist" // Button text
          closepopup={closePopup} // Function to close popup
          cancelnewlist={cancelnewlist} // Function to cancel new list
          ref={popupRef} // Ref for the popup
        />
      )}

      {/* Render Overlay component if showOverlay is true */}
      {showOverlay && <Overlay isOpen={true} />}

      <section className="py-[40px] md:py-[80px]">
        <div className="container">
          <div className="flex flex-col-reverse min-[785px]:flex-row min-[785px]:justify-between min-[785px]:items-center gap-y-5">
            {/* Headingsection component for displaying the section heading */}
            <Headingsection
              smtext="Sale"
              lgtext="Deals On Sale"
              testclass="text-center lg:text-start"
              headingmainclass="justify-center gap-5 lg:gap-0 md:justify-between flex-col lg:flex-row"
            />
            {/* CountdownTimer component for displaying a countdown */}
            <CountdownTimer endDate="2024-12-31T14:12:10" />
          </div>
          <div className="mt-[30px] md:mt-[60px] grid xl:grid-cols-4 md:grid-cols-3 lg:gap-[30px] md:gap-[20px] grid-cols-2 gap-[13px]">
            {Productdata.slice(0, 8).map((item, index) => (
              <Fragment key={Date.now() + index}>
                <div>
                  {/* DealsCard component for displaying each product card */}
                  <DealsCard
                    CreatenewList={CreatenewList}
                    card="vertical"
                    data={item}
                    color={color}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DealsCardSection;
