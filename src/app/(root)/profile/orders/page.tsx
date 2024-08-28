"use client";

// Importing necessary components and libraries
import Ordercard from "@/components/ui/OrderCard";
import Icons from "@/icons/Index";
import React, { Fragment, useState } from "react";
import OrderDetails from "./[orderid]/page";
import { profileinterface } from "@/interFaces/type"; // Assuming a typo fix from "interFaces" to "interfaces"
import ordercarddata from "@/json/ordercarddata.json";
import Sortbydropdown from "@/components/ui/SortByDropdown";
import sortdata from "@/json/sort.json";

// Define props interface for the component
const Page: React.FC<profileinterface> = ({
  classname,
  closebtn,
  profilesidebar,
}) => {
  const [value, setvalue] = useState("sortby"); // State for sorting value
  const [orderdetails, setOrderDetails] = useState(0); // State for order details

  // Function to close order details view
  const closebtnordertails = () => {
    setOrderDetails(0);
  };

  return (
    <>
      {/* Main section */}
      <section className={`${classname} w-full max-[991px]:overflow-scroll lg:h-full`}>
        {/* Top navigation/header */}
        <div className={` ${profilesidebar === 4 ? "fixed right-0 left-0 top-0 " : "static"} bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] min-[991px]:hidden py-[20px] px-[16px] flex gap-[14px] items-center justify-between `}>
          {/* Title with back button */}
          <h2 onClick={closebtn} className="text_20 text-blue_gray_600 flex items-center gap-x-[14px]">
            <Icons type="leftarrowback" /> My Orders
          </h2>
          {/* Heart icon */}
          <Icons type="heart" className="fill-blue_gray_400 max-w-6 w-full" />
        </div>

        {/* Main content area */}
        <div className="p-4 tab:p-[30px] bg-extra_bg tab:bg-white rounded-[14px] max-[991px]:pt-[90px] max-[991px]:overflow-scroll max-[991px]:h-screen">
          {/* Sort and filter dropdown (visible on desktop) */}
          <div className="hidden min-[991px]:block">
            <h3 className="text_24_20 text-blue_gray_800 border-b-[1px] border-blue_gray_50 pb-5 mb-5 md:pb-[30px] md:mb-[30px] flex justify-between items-center">
              My Orders
              {/* Sort dropdown component */}
              <Sortbydropdown heading={value} className="relative">
                <ul className="flex flex-col gap-[12px]">
                  {/* Mapping over sort data */}
                  {sortdata.map((item, index) => (
                    <Fragment key={index}>
                      {/* Sort item */}
                      <li onClick={() => setvalue(item)} className="text_16_2 text-blue_gray_700 py-[3px] list-none sidehovereffect truncate cursor-pointer">
                        {item}
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </Sortbydropdown>
            </h3>
          </div>

          {/* List of order cards */}
          <div className="flex flex-col gap-y-4 lg:gap-y-[20px] bg-white max-[990px]:p-4 rounded-[6px]">
            {/* Search form (hidden on tablet and below) */}
            <form className="flex gap-[6px] justify-between items-center tab:hidden tab:max-w-[857px] rounded-[6px] w-full px-[14px] border-[1px] border-blue_gray_50">
              <input
                placeholder="Search Brands..."
                className="outline-none text_16_2 py-[12px] text-blue_gray_400 w-full"
                type="search"
                name=""
                id=""
              />
              <Icons type="search" />
            </form>

            {/* Divider line (hidden on mobile) */}
            <span className="border-b-[1px] md:hidden"></span>

            {/* Mapping over order card data */}
            {ordercarddata?.map((item, index) => (
              <Fragment key={Date.now() + index}>
                <div onClick={() => setOrderDetails(item.id)}>
                  {/* Order card component */}
                  <Ordercard
                    tittle={`${item?.title}`}
                    size={`${item?.size}`}
                    color={`${item?.color}`}
                    colorvarient={`${item?.colorvariant}`}
                    price={`${item?.price}`}
                    currentposition={`${item?.currentposition}`}
                    description={`${item?.description}`}
                    orderdetail={`${item?.orderdetail}`}
                    refunddetail={`${item?.refunddetail}`}
                    imgpath={`${item?.imgpath}`}
                    Rateproduct={item?.Rateproduct}
                    Returnproduct={item?.Returnproduct}
                    helpproduct={item?.helpproduct}
                    orderid={item?.orderid}
                    refundid={item?.refundid}
                    routeto={`/profile/orders/${item.id}`}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Order details panel (hidden on tablet and below) */}
        <div className="tab:hidden">
          <OrderDetails
            orderdatils={orderdetails}
            closebtn={closebtnordertails}
            className={`${orderdetails > 0 ? "right-[0]" : "right-[-200%]"} fixed duration-500 bg-white top-0 z-[52] tab:static`}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
