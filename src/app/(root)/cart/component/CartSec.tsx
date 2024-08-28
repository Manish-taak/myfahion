"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Productsdata from "@/json/products.json";
import DealsCard from "@/components/ui/DealsCard";
import Button from "@/components/ui/Button";
import Swipercardsectioncommon from "@/components/Swiper";
import Areyousure from "@/components/popup/AreYouSure";
import Overlay from "@/components/ui/Overlay";
import Sortbydropdown from "@/components/ui/SortByDropdown";
import sortdata from "@/json/sort.json";
import Applycoupons from "@/components/popup/ApplyCoupons";
import coupondata from "@/json/coupon.json";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";

/**
 * Functional component representing the shopping cart section.
 * @returns JSX.Element
 */
const CartSec = () => {
  const [value, setvalue] = useState("sortby");
  const [activeButton, setActiveButton] = useState(2);
  const [showOverlay, setShowOverlay] = useState(false);
  const [deletepopup, setdeletepopup] = useState(false);
  const [applycoupon, setapplycoupon] = useState(false);
  const stoponoutlick = useRef<HTMLDivElement>(null);

  // State to store the number of products/items
  const [productsitem, setproductsitem] = useState<number>();

  // Custom hook to detect clicks outside a specified DOM element
  useOutsideClick(stoponoutlick, () => {
    closepopup();
  });

  /**
   * Handles button click events.
   * @param {number} buttonNumber - The number of the button clicked.
   */
  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  /**
   * Opens the delete confirmation popup.
   */
  const opendeletepopup = () => {
    setShowOverlay(true);
    setdeletepopup(true);
  };

  /**
   * Closes all popups and overlays.
   */
  const closepopup = () => {
    setShowOverlay(false);
    setdeletepopup(false);
    setapplycoupon(false);
  };

  /**
   * Opens the apply coupon popup.
   */
  const addcoupon = () => {
    setapplycoupon(true);
    setShowOverlay(true);
  };

  // State to manage the number of visible products
  const [visibleCount, setVisibleCount] = useState(4);

  /**
   * Loads more products when the load more button is clicked.
   */
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    // Get the number of products/items and store in localStorage
    let count = Productsdata?.length || 0;
    setproductsitem(count);
    localStorage.setItem("cartitem", count.toString());
  }, []);

  return (
    <>
      {/* Overlay component to be shown based on showOverlay state */}
      {showOverlay && <Overlay isOpen={true} />}

      {/* Delete confirmation popup based on deletepopup state */}
      {deletepopup && (
        <Areyousure
          heading="Are You Sure"
          closepopup={closepopup}
          cancelnewlist={closepopup}
          tittle="After Clicking yes button this item will be removed from your cart"
          buttontext="Yes, Remove"
        />
      )}

      {/* Apply coupons popup based on applycoupon state */}
      {applycoupon && (
        <Applycoupons ref={stoponoutlick} data={coupondata} cancelcoupon={closepopup} />
      )}

      <div className="bg-hf_extra mt-[148px] md:mt-[159px]">
        <div className="md:container">
          {/* Breadcrumb navigation component */}
          <NextBreadcrumb />

          <div className="flex md:gap-y-[30px] flex-col">
            {/* Cart header section for larger screens */}
            <div className="hidden md:flex gap-[20px] p-[20px] items-center justify-between rounded-[6px] bg-white">
              <h2 className="text-blue_gray_800 text_24">
                My Cart
                <span className="text-blue_gray_400 text_16_2 pl-[12px]">
                  {productsitem} item
                </span>
              </h2>

              {/* Dropdown for sorting items */}
              <Sortbydropdown heading={value} className="relative">
                <ul className="flex flex-col gap-[12px]">
                  {sortdata.map((item, index) => (
                    <Fragment key={index}>
                      <li
                        onClick={() => setvalue(item)}
                        className="text_16_2 text-blue_gray_700 py-[3px] list-none sidehovereffect truncate cursor-pointer"
                      >
                        {item}
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </Sortbydropdown>
            </div>

            {/* Main content section with product cards and order summary */}
            <div className="flex pb-[30px] md:pb-[80px] md:gap-[30px] flex-col lg:flex-row">
              {/* Product cards */}
              <div className="gap-y-[10px] md:gap-y-[30px] grid grid-cols-1 max-w-[1185px] max-[768px]:py-5 max-[768px]:px-4 w-full pb-[30px] lg:pb-0">
                {Productsdata?.slice(0, visibleCount).map((item, index) => (
                  <Fragment key={item.id || Date.now() + index}>
                    <DealsCard
                      show={true}
                      save={true}
                      card={"horizontal"}
                      openpopup={opendeletepopup}
                      data={item}
                    />
                  </Fragment>
                ))}

                {/* Load more button */}
                {visibleCount < Productsdata.length && (
                  <Button onClick={loadMore} varient="primary">Load More</Button>
                )}
              </div>

              {/* Order summary section */}
              <div className="p-5 md:p-[30px] bg-white lg:max-w-[375px] w-full mb-10 h-fit rounded-[8px]">
                <h3 className="text-blue_gray_700 text_20_16 pb-3">
                  Order Summary
                </h3>
                <div className="flex flex-col gap-y-[18px] border-t-[1px] pt-6">
                  {/* Product price */}
                  <div className="flex justify-between">
                    <h6 className="text_14_1 text-blue_gray_400">
                      Product Price (2 items)
                    </h6>
                    <h6 className="text_14_1 text-blue_gray_600">$40.00</h6>
                  </div>

                  {/* GST */}
                  <div className="flex justify-between">
                    <h6 className="text_14_1 text-blue_gray_400">
                      GST (Tax 28%)
                    </h6>
                    <h6 className="text_14_1 text-blue_gray_600">$2.00</h6>
                  </div>

                  {/* Discount */}
                  <div className="flex justify-between">
                    <h6 className="text_14_1 text-blue_gray_400">Discount</h6>
                    <h6 className="text_14_1 text-light_primary">- $20.00</h6>
                  </div>

                  {/* Delivery charges */}
                  <div className="flex justify-between">
                    <h6 className="text_14_1 text-blue_gray_400">
                      Delivery Charges
                    </h6>
                    <h6 className="text_14_1 text-blue_gray_600">Free</h6>
                  </div>

                  {/* Apply coupon section */}
                  <div className="flex justify-between border-t-[1px] pt-[18px] cursor-pointer">
                    <h6 className="text_14_1 text-blue_gray_400">
                      Apply Coupon
                    </h6>
                    <h6
                      ref={stoponoutlick}
                      onClick={() => {
                        addcoupon();
                      }}
                      className="text_14_1 text-blue_gray_600"
                    >
                      See Offers
                    </h6>
                  </div>

                  {/* Total amount */}
                  <div className="flex justify-between border-t-[1px] pt-[10px]">
                    <h6 className="text-blue_gray_700 text_16_2">Total</h6>
                    <h6 className="text-blue_gray_700 text_16_2">$22.00</h6>
                  </div>
                </div>

                {/* Savings message */}
                <div className="p-[8px] bg-[#02A77D14] text-center rounded-[8px] my-6">
                  <h3 className="text-light_secondary_main text_16_2_14">
                    You Will Save $20.00 On This Order
                  </h3>
                </div>

                {/* Place order button */}
                <div className="flex justify-center items-center">
                  <Button
                    navroute="/checkout"
                    varient="primary"
                    className="py-[10px] px-4 md:py-4 md:px-6 w-full text_20_16"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended product section */}
      <div className="container">
        <div className="py-10 md:py-[60px] lg:py-20">
          <Swipercardsectioncommon
            headingmainclass="justify-between items-center mb-[30px] md:mb-[60px]"
            testclass="whitespace-nowrap text-center md:text-start"
            smtext="Recommended"
            pagination={true}
            topbtn={true}
            lgtext="Recommended Product"
            lgtextclass="max-[375px]:text-[8vw]"
            card="Dealcards"
            cardData={Productsdata}
          />
        </div>
      </div>
    </>

  );
};

export default CartSec;
