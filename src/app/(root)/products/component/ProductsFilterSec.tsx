"use client";
import React, { Fragment, useContext, useRef, useState } from "react";
import Filterside from "./FilterSide";
import Products from "@/json/products.json";
import FeaturedCard from "@/components/ui/FeaturedCard";
import Icons from "@/icons/Index";
import Link from "next/link";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Overlay from "@/components/ui/Overlay";
import Areyousure from "@/components/popup/AreYouSure";
import Sortbydropdown from "@/components/ui/SortByDropdown";
import { useRouter } from "next/navigation";
// import sortdata from "@/json/sort.json";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import NextBreadcrumb from "@/components/ui/BreadCrumbs";
import Pagination from "@/components/ui/Pagination";

const ProductsFilterSec = () => {
  // state to manage dropdown
  const [sortby, setsortby] = useState(false);
  //state to manage grid layout
  const [grid, setgrid] = useState(false);
  //state to manage activebutton
  const [activeButton, setActiveButton] = useState(2);
  //state to manage filter
  const [filter, setfilter] = useState(false);
  const [color, setcolor] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
// state to manage dropdown values
  const [value, setvalue] = useState("sortby");
  //states to manages popups
  const [newList, setNewList] = useState(false);
  const [viewlist, setviewlist] = useState(false);
  const [Createnewlist, setCreatenewlist] = useState(false);
  const [addtowishlist, setAddtowishlist] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const sortdata = [
    " Price (Low to High)",
    "  Price (High to Low)",
    " New Arrivals",
    "    AVG. Customer Review",
    "    All items",
  ];
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
    setcolor(true);
  };
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
    // setcolor(false);
  };

  const cancelCreatenewList = () => {
    setcolor(false);
    setNewList(false);
    setShowOverlay(false);
  };

  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };
  useOutsideClick(popupRef, closePopup);
  return (
    <>
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
          url="/wishlist"
          heading="Item Has Been Added To Wishlist"
          tittle="Your Item has Been Successfully added To  Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelviewwishlist}
          ref={popupRef}
        />
      )}
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
      {showOverlay && <Overlay isOpen={true} />}
      <section className=" md:pb-[80px]  pb-[40px]   md:mt-[158px] bg-extra_bg ">
        <NextBreadcrumb bgcolor="bg-extra_bg" />
        <div className="container ">
          <div className="flex gap-[30px] relative   ">
            <div
              className={` left-[-120%] tab:left-0 absolute  max-w-[375px] w-full tab:contents `}
            >
              <Filterside filter={filter} />
            </div>
            <div
              className={` w-full tab:hidden p-[20px] ${
                sortby === true ? "right-0" : "right-[-100%]"
              } transition-all duration-[0.8s] ease-[cubic-bezier(.175,0.885,0.32,1.275)]  h-[100vh]  bg-white fixed z-[99] top-0 `}
            >
              <div className="flex justify-between p-6 ">
                <Icons type="mainlogo" />
                <div onClick={() => setsortby(false)}>
                  <Icons className="p-3 w-[23px] h-[24px]" type="popupclose" />
                </div>
              </div>
              <ul className=" p-[24px]  flex flex-col gap-[20px]">
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
            </div>
            <div className="flex flex-col mt-[163px] md:mt-0 w-full  ">
              <div className=" bg-white hidden tab:flex gap-[30px] p-5  items-center ">
                <span className="w-full max-w-[827px] text-blue_gray_400 text_14_2 leading-[24px]">
                  Showing - (2800 Products)
                </span>
                <Sortbydropdown heading={value} className="relative">
                  <ul className="flex flex-col gap-[12px]">
                    {sortdata?.map((item, index) => {
                      return (
                        <li
                          onClick={() => setvalue(item)}
                          className="text_16_2 text-blue_gray_700 py-[3px] list-none sidehovereffect"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Sortbydropdown>
                <div className="flex gap-[10px] cursor-pointer">
                  <div onClick={() => setgrid(true)}>
                    <Icons
                      className="cursor-pointer"
                      fill={grid === true ? "#78909C" : "#B0BEC5"}
                      type="gridcol"
                    />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setgrid(false)}
                  >
                    <Icons
                      fill={grid === false ? "#78909C" : "#B0BEC5"}
                      type="gridrow"
                    />
                  </div>
                </div>
              </div>
              <div
                className={` ${
                  grid === true
                    ? " grid-cols-1  gap-[13px] 2xl:gap-[30px] xl:grid-cols-2 2xl:grid-cols-2 xl:gap-[15px]  "
                    : "  grid-cols-2  lg:grid-cols-2  gap-[13px] md:gap-[20px] lg:gap-[30px] pt-[30px] xl:grid-cols-3"
                } grid `}
              >
                {Products?.slice(0, 6).map((item, index) => {
                  return (
                    <Fragment key={Date.now() + index}>
                      {grid === true ? (
                        <div>
                          <FeaturedCard
                            card="horizontal"
                            CreatenewList={CreatenewList}
                            data={item}
                            color={color}
                            star={true}
                          />
                        </div>
                      ) : (
                        <div>
                          <FeaturedCard
                            bg={"md:bg-extra_bg"}
                            custompaddingboxbottom="p-[10px]"
                            card="vertical"
                            hoverEffect={true}
                            CreatenewList={CreatenewList}
                            data={item}
                            star={true}
                            color={color}
                          />
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </div>

              <div className="md:pt-[30px]">
                <Pagination />
              </div>
            </div>
            <div className="items-center  tab:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px]  fixed z-[99] bottom-0 w-[95%]  left-[50%] right-0 transform translate-x-[-50%] py-[6px]  ">
              <div className="flex flex-col justify-center items-center  py-[10px] ">
                <div
                  onClick={() => {
                    handleClick(1);
                    setfilter(!filter);
                  }}
                  className={`btn ${
                    activeButton === 1 ? "active" : ""
                  } pb-[1px] btn py-[10px]' flex flex-row-reverse  w-[95px]   gap-[10px]  justify-center items-center
                                 `}
                >
                  <Icons
                    type={"filter"}
                    fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"}
                  />
                  <Link
                    href="#"
                    className={`text_10 ${
                      activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                    }`}
                  >
                    Filter By
                  </Link>
                </div>
                <span
                  className={`
                              ${
                                activeButton === 1
                                  ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                                  : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                              } `}
                ></span>
              </div>
              <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>

              <div className="flex flex-col justify-center items-center  py-[10px] ">
                <div
                  onClick={() => {
                    handleClick(2);
                    setgrid(!grid);
                  }}
                  className={`btn ${
                    activeButton === 2 ? "active" : ""
                  } pb-[1px] btn  py-[10px]' flex flex-row-reverse  w-[95px] gap-[10px] justify-center items-center
                                 `}
                >
                  <Icons
                    type={grid === true ? "gridrow" : "gridcol"}
                    fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"}
                  />
                  <Link
                    href="#"
                    className={`text_10 ${
                      activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                    }`}
                  >
                    Grid View
                  </Link>
                </div>
                <span
                  className={`
                              ${
                                activeButton === 2
                                  ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                                  : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                              } `}
                ></span>
              </div>

              <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>
              <div className="flex flex-col justify-center items-center  py-[10px] ">
                <div
                  onClick={() => {
                    handleClick(3);
                    setsortby(!sortby);
                  }}
                  className={`btn ${
                    activeButton === 3 ? "active" : ""
                  } pb-[1px] btn  py-[10px]' flex flex-row-reverse  w-[95px] gap-[10px]  justify-center items-center
                                 `}
                >
                  <Icons
                    type={"sortby"}
                    fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"}
                  />
                  <Link
                    href="#"
                    className={`text_10 ${
                      activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                    }`}
                  >
                    Sort By
                  </Link>
                </div>
                <span
                  className={`
                              ${
                                activeButton === 3
                                  ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                                  : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                              } `}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsFilterSec;

{
}
