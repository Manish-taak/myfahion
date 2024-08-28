"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icons from "@/icons/Index";
import SideBar from "./SideBar";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import Dropdown from "./ui/Dropdown";
import headerdata from "@/json/header.json"
import { header } from "@/interFaces/type";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
import Image from "next/image";
import Overlay from "./ui/Overlay";
import Itemadded from "./popup/ItemAdded";
const Header = ({ noHeaderfooter }: header) => {
  // state to manage dropdown
  const [allcateDropdown, setallcateDropdown] = useState(false);
  // state to manage currency
  const [centurydropdown, setcenturydropdown] = useState(false);
  // state to manage language
  const [languagedropdown, setlanguagedropdown] = useState(false);
  // state to manage find address popup
  const [findAddresspopup, setfindAddresspopup] = useState(false);
  // state to manage sidebar
  const [sidebar, setsidebar] = useState(false);
  // state to manage overlay
  const [showOverlay, setshowOverlay] = useState(false)

  // states to manage dropdowns values
  const [category, setcategory] = useState("All Categories")
  const [currency, setcurrency] = useState("$ USD")
  const [language, setlanguage] = useState("eng")
  const popupRef = useRef<HTMLDivElement>(null);
  // store data cart item
  const [cartitem, setCartitem] = useState<number>(0)

  // store data cart item
  const [wishitem, setWishitem] = useState<number>(0)

  const dropdowntoggle = () => {
    setcenturydropdown(!centurydropdown)
    setlanguagedropdown(!languagedropdown)
  }

  const [activeButton, setActiveButton] = useState(2);
  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };


  const router = useRouter();
  const dropdownRefcateDropdown = useRef<HTMLDivElement>(null);
  const dropdownReflanguagedropdown = useRef<HTMLDivElement>(null);
  const dropdownRefcenturydropdown = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRefcateDropdown, () => {
    setallcateDropdown(false);
  });

  useOutsideClick(dropdownReflanguagedropdown, () => {
    setlanguagedropdown(false);
  });

  useOutsideClick(dropdownRefcenturydropdown, () => {
    setcenturydropdown(false);
  });


  const closepopup = () => {
    setshowOverlay(false)
    setfindAddresspopup(false)
  }
  useOutsideClick(popupRef, closepopup);

  // get cart item in local storage 


  useEffect(() => {
    const cartlistitem = localStorage.getItem("cartitem");
    const wishlistitem = localStorage.getItem("wishlist");
    if (wishlistitem) {
      setWishitem(parseInt(wishlistitem, 10))
    }

    if (cartlistitem) {
      setCartitem(parseInt(cartlistitem, 10));
    }
  }, [])


  return (
    <>
      {showOverlay && <Overlay isOpen={true} />}
      {
        findAddresspopup === true && <Itemadded closepopup={closepopup} ref={popupRef} />
      }
      <header className={cn`shadow-lg ${noHeaderfooter}  pt-[20px] md:pt-[30px] pb-[20px] fixed top-0 left-0 right-0 bg-white z-50 `} >
        <div className="tab:hidden">
          <SideBar setsidebar={setsidebar} sidebar={sidebar} />
        </div>
        <div className="container">
          <div className="flex gap-[15px]  lg:gap-[40px] xl:gap-[10px] 2xl:m-auto justify-between md:border-blue_gray_50 tab:border-b-[2px] md:pb-[14px] mb-[20px] md:mb-[14px_!important] items-center  ">
            <Link href="/">
              <Icons type="mainlogo" className="min-h-[36px]" />
            </Link>
            <div
              ref={dropdownRefcateDropdown}
              className=" hidden tab:flex gap-[10px] relative   max-w-[1089px] w-full bg-extra_bg h-[48px] rounded-l-[6px] ">
              <div className="rounded-l-[6px]" onClick={() => setallcateDropdown(!allcateDropdown)}>
                <Dropdown
                  arrowimageclass={`${allcateDropdown === true ? "rotate-180" : "rotate-0"
                    }  transition-all duration-300 `}
                  onclick={true}
                  testclass=" whitespace-nowrap text-blue_gray_600 text_16_1 w-[100px]  truncate  "
                  className="gap-[6px] items-center  w-[152px] py-[13px] px-[12px]   text-blue_gray_600 bg-extra_4 rounded-l-[6px] "
                  image="dropdownarrow"
                  heading={category}
                >
                  <div className={`shadow-2xl rounded-[10px] z-[1] relative duration-300 bg-white ${allcateDropdown === true ? "opacity-100" : "opacity-0 z-[-1] invisible"}`} >
                    <span className={`block w-5 h-5  absolute  bg-white  rotate-45 z-[1] top-[-9px] left-[61px]`}></span>
                    <ul
                      className="flex gap-[8px] flex-col  rounded-[4px] shadow-2xl p-4 absolute w-[200px] bg-white ">
                      {headerdata?.allcategoryList.map((item, index) => {
                        return (
                          <Fragment key={Date.now() + index}>
                            <li
                              onClick={() => {
                                setallcateDropdown(false)
                                setcategory(item.categoryName)
                              }}
                              className="p-[10px] hover:bg-hf_extra  hover:text-light_primary rounded-[4px] flex justify-between w-full text-blue_gray_500  gap-[10px] items-center " >
                              <span className="">{item.categoryName}  </span>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </Dropdown>
              </div>
              <form className="bg-extra_bg max-w-[857px] w-full ">
                <input
                  placeholder="Search Brands..."
                  className="outline-none text_16_2 pt-[12px] text-blue_gray_400 w-full bg-extra_bg"
                  type="search"
                  name=""
                  id=""
                />
              </form>
              <div className="bg-light_primary  flex justify-center items-center w-full max-w-[60px] rounded-r-[6px] cursor-pointer ">
                <Icons type="searchwhite" />
              </div>
            </div>
            <div className="hidden tab:flex  gap-[10px] lg:gap-[20px] items-center">
              <Link
                className=" relative flex gap-[6px] flex-col items-center text-blue_gray_600 p-[2px]  "
                href="/wishlist"
              >
                <Icons fill="#455A64" type="Wishlisticon" />
                {wishitem > 0 && (
                  <div className="absolute flex justify-center items-center  left-[35px] top-0 w-[20px] h-[18px] bg-light_primary rounded-full">
                    <span className="text-white text-[12px]">{cartitem}</span>
                  </div>
                )}
                <p className="text-[14px] leading-[20px] font-semibold ">
                  Wishlist
                </p>
              </Link>
              <Link
                className=" relative flex gap-[6px] flex-col text-blue_gray_600  items-center  p-[2px] "
                href="/cart"
              >
                <Icons type="carticon" />
                {cartitem > 0 && (
                  <div className="absolute flex justify-center items-center left-6 top-0 w-[20px] h-[18px] bg-light_primary rounded-full">
                    <span className="text-white text-[12px]">{cartitem}</span>
                  </div>
                )}

                <p className="text-[14px] leading-[20px] font-semibold ">Cart</p>
              </Link>
              <Link
                className="flex gap-[6px] flex-col text-blue_gray_600  items-center  p-[2px] "
                href="/login"
              >
                <Icons type="loginicon" />
                <p className="text-[14px] leading-[20px] font-semibold">
                  Login
                </p>
              </Link>
            </div>
            <div className="tab:hidden " onClick={() => setsidebar(true)}>
              <Icons type="togglebar" />
            </div>
          </div>
          <form className="tab:hidden flex gap-[6px] py-[12px] items-center px-[14px] border-[1px] border-blue_gray_50 rounded-[6px]">
            <Icons type="search" className="tab:hidden  " />
            <input
              className="text-blue_gray_400 text_16_2 w-full outline-none border-none "
              type="search"
              placeholder="Search Brands..."
              name=""
              id=""
            />
          </form>
          {/* header drop down men ,women , kids */}
          <div className="hidden tab:flex xl:gap-[40px] lg:gap-[20px] gap-[7px]">
            <div className="flex  tab:gap-[15px] lg:gap-[20px] xl:gap-[40px] 2xl:gap-[60px] w-full items-center relative ">
              <div className="group">
                <Dropdown
                  positionsta={true}
                  directionshovercontent="left-0  2xl:overflow-hidden  overflow-scroll max-w-[97vw] "
                  testclass=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px]"
                  heading={`Man's Fashion`}
                >
                  <div className="bg-white  p-6   max-w-[1650px] 2xl:overflow-hidden  overflow-scroll  flex gap-[30px] w-[1650px] ">
                    {headerdata?.Dropdowndata?.slice(0, 1).map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index}>
                          {item?.dropdata?.map((item, index) => {
                            return (
                              <>
                                <div
                                  key={Date.now() + index}
                                  className="flex gap-[30px] "
                                >
                                  <div className="flex flex-col gap-[14px] w-[188px]">
                                    <li className=" list-none pb-[6px] text-[45px] text_16_1 text-blue_gray_800 border-b-[1px] mb-[4px] border-blue_gray_100 ">
                                      {item.heading}
                                    </li>
                                    {item?.list?.map((item, index) => {
                                      return (
                                        <li
                                          key={Date.now() + index}
                                          className=" hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px]  text_14_1 text-blue_gray_500  list-none whitespace-nowrap w-full max-w-[188px]"
                                        > <Link href={"#"}>
                                            {item}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                    <div className="relative flex justify-center">
                      <Image
                        width={280}
                        height={352}
                        className=" rounded-md"
                        src="/images/boyimagedropdown.png"
                        alt="img"
                      />
                      <Link href={"/explore-by-categories"}>
                        <div >
                          <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
                            <p className="text_20_12 text-blue_gray_600 text-center">
                              Best Offer On Western Wear
                            </p>
                            <h3 className="text_34_20 text-light_primary text-center mt-[2px]">
                              40 - 60% Off
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Dropdown>
              </div>
              <div className="group">
                <Dropdown
                  positionsta={true}
                  directionshovercontent="left-0  2xl:overflow-hidden  overflow-scroll max-w-[97vw] "
                  testclass=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px] "
                  heading={`Women’s Fashion`}
                >
                  <div className="bg-white p-6   max-w-[1650px] 2xl:overflow-hidden  overflow-scroll  flex gap-[30px] w-[1650px] ">
                    {headerdata?.Dropdowndata?.slice(1, 2).map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index}>
                          {item?.dropdata?.map((item, index) => {
                            return (
                              <>
                                <div
                                  key={Date.now() + index}
                                  className="flex gap-[30px] "
                                >
                                  <div className="flex flex-col gap-[14px] w-[188px]">
                                    <li className=" list-none pb-[6px] text-[45px] text_16_1 text-blue_gray_800 border-b-[1px] mb-[4px] border-blue_gray_100 ">
                                      {item.heading}
                                    </li>
                                    {item?.list?.map((item, index) => {
                                      return (
                                        <li
                                          key={Date.now() + index}
                                          className=" hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px]  text_14_1 text-blue_gray_500  list-none whitespace-nowrap w-full max-w-[188px]"
                                        ><Link href={"#"}>

                                            {item}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                    <div className="relative flex justify-center">
                      <Image
                        width={280}
                        height={352}
                        className=" rounded-md"
                        src="/images/womendropdownimage.png"
                        alt="img"
                      />
                      <Link href={"/explore-by-categories"}>

                        <div>
                          <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
                            <p className="text_20_12 text-blue_gray_600 text-center">
                              Best Offer On Western Wear
                            </p>
                            <h3 className="text_34_20 text-light_primary text-center mt-[2px]">
                              40 - 60% Off
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Dropdown>
              </div>
              <div className="group">
                <Dropdown
                  positionsta={true}
                  directionshovercontent="left-0  2xl:overflow-hidden  overflow-scroll max-w-[97vw] "
                  testclass=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px] "
                  heading={`Kid’s Fashion`}
                >
                  <div className="bg-white p-6   max-w-[1650px] 2xl:overflow-hidden  overflow-scroll  flex gap-[30px] w-[1650px]  ">
                    {headerdata?.Dropdowndata?.slice(2, 3).map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index}>
                          {item?.dropdata?.map((item, index) => {
                            return (
                              <div
                                key={Date.now() + index}
                                className="flex gap-[30px] "
                              >
                                <div className="flex flex-col gap-[14px] w-[188px]">
                                  <li className=" list-none pb-[6px] text-[45px] text_16_1 text-blue_gray_800 border-b-[1px] mb-[4px] border-blue_gray_100 ">
                                    {item.heading}
                                  </li>
                                  {item?.list?.map((item, index) => {
                                    return (
                                      <li
                                        key={Date.now() + index}
                                        className=" hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px]  text_14_1 text-blue_gray_500  list-none whitespace-nowrap w-full max-w-[188px]"
                                      >
                                        <Link href={"#"}>

                                          {item}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                    <div className="relative flex justify-center">
                      <Image
                        width={280}
                        height={352}
                        className=" rounded-md"
                        src="/images/kidsdropdownimage.png"
                        alt="img"
                      />
                      <Link href={"/explore-by-categories"}>
                        <div>
                          <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
                            <p className="text_20_12 text-blue_gray_600 text-center">
                              Grab Offer On Kids Wear
                            </p>
                            <h3 className="text_34_20 text-light_primary text-center mt-[2px]">
                              65% Off
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Dropdown>
              </div>
              {headerdata?.category?.map((item, index) => {
                return (
                  <Fragment key={Date.now() + index}>
                    <li className="py-[3px] list-none ">
                      <Link
                        href={`/${item.link}`}
                        className=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-500 transform hover:pl-[3px] "
                      >
                        {item?.categoryName}
                      </Link>
                    </li>
                  </Fragment>
                );
              })}
            </div>
            <div onClick={() => { setfindAddresspopup(!findAddresspopup); setshowOverlay(true) }} className="flex gap-[6px] whitespace-nowrap cursor-pointer p-[2px] items-center max-w-[115px] w-full ">
              <Icons type="location" className="fill-blue_gray_400" />
              <h3 className="text_14_1 text-blue_gray_400 ">Find Address</h3>
            </div>
            <div className="flex xl:gap-[10px] w-full max-w-[172px] items-center justify-end">
              <div
                ref={dropdownRefcenturydropdown}
                onClick={() => { setcenturydropdown(!centurydropdown); setlanguagedropdown(false) }}
                className="rounded-l-[6px]"
              >
                <Dropdown
                  arrowimageclass={`${centurydropdown === true ? "rotate-180" : "rotate-0"
                    } transition-all duration-300 `}
                  onclick={true}
                  arrow="top-[-11px] right-[51px] "
                  className="gap-[6px] items-center  py-[6px] px-[8px]"
                  testclass="  text-blue_gray_500 text_12_1 "
                  image="dropdownarrow"
                  heading={currency}
                >
                  <div
                    className={` z-[1] relative duration-300 ${centurydropdown === true ? "opacity-100" : "opacity-0 z-[-1] invisible"
                      }`}
                  >
                    <ul className=" rounded-[8px] shadow-2xl flex gap-[8px] left-[-110px] top-[12px] py-[12px] px-[10px] bg-white w-[200px] flex-col absolute ">
                      <span
                        className={`block w-5 h-5 absolute  bg-white  rotate-45 z-[1] top-[-9px] right-[42px]`}
                      ></span>
                      {headerdata?.centuryList?.map((item, index) => {
                        return (
                          <Fragment key={Date.now() + index}>
                            <li onClick={() => setcurrency(item.century)} className="p-[10px] group rounded-[4px] flex justify-between w-full  gap-[10px] items-center truncate ">
                              <span className="text_14_3 bg-hf_extra  group-hover:text-light_primary text-blue_gray_300">
                                {item.century}
                              </span>
                              <Image width={28} height={20} src={`/images/${item.image}`} alt="india" />
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </Dropdown>
              </div>
              <span className="border-[1px] border-blue_gray_100 h-[20px]"></span>
              <div
                ref={dropdownReflanguagedropdown}
                onClick={() => { setlanguagedropdown(!languagedropdown); setcenturydropdown(false) }}
                className="rounded-l-[6px]"
              >
                <Dropdown
                  arrowimageclass={`${languagedropdown === true ? "rotate-180" : "rotate-0"
                    }   transition-all duration-300`}
                  onclick={true}
                  arrow="top-[-11px] right-[51px] "
                  className="gap-[6px] items-center  py-[6px] px-[8px] uppercase"
                  testclass="  text-blue_gray_500 text_12_1 "
                  image="dropdownarrow"
                  heading={language}
                >
                  <div
                    className={` z-[1] relative duration-300 ${languagedropdown === true ? "opacity-100" : "opacity-0 z-[-1] invisible "
                      }`}
                  >
                    <ul className=" rounded-[8px] shadow-2xl flex gap-[8px] top-[12px] bg-white left-[-127px] w-[200px] flex-col absolute px-[10px] py-[12px] ">
                      <span
                        className={`block w-5 h-5 absolute  bg-white  rotate-45 z-[1] top-[-9px] right-[42px]`}
                      ></span>
                      {headerdata?.language?.map((item, index) => {
                        return (
                          <Fragment key={Date.now() + index}>
                            <li onClick={() => { setlanguage(item.language) }} className="p-[10px] hover:bg-hf_extra group rounded-[4px] flex justify-between w-full  gap-[10px] items-center ">
                              <span className="text-blue_gray_300 group-hover:text-light_primary  text_14_3">
                                {item.language}
                              </span>
                              <Image
                                width={28}
                                height={20}
                                src={`/images/${item.image}`}
                                alt="india"
                              />
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
          {/* <Bottomtabs flexdiraction='w-[71px] flex flex-col gap-[1px]' bootomtabsdata={bootomtabsdata} /> */}
          <div className="items-center  md:hidden flex gap-[6.5px] justify-between bg-blue_gray_900 rounded-[50px] px-[10px]  fixed z-40 bottom-0 w-[95%]  left-[50%] right-0 transform translate-x-[-50%] py-[6px] ">
            <div
              onClick={() => handleClick(1)}
              className={`btn ${activeButton === 1 ? "active" : ""
                } pb-[1px] btn  w-[71px] flex flex-col gap-[1px] justify-center items-center
                                 `}
            >
              <Icons
                type={"home"}
                fill={activeButton === 1 ? "#F57E5D" : "#FFFFFF"}
              />
              <Link
                href="/"
                className={`text_10 ${activeButton === 1 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                Home
              </Link>
              <span
                className={`
                              ${activeButton === 1
                    ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                    : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                  } `}
              ></span>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>

            <div
              onClick={() => handleClick(2)}
              className={`btn ${activeButton === 2 ? "active" : ""
                } pb-[1px] btn  w-[71px] flex flex-col gap-[1px] justify-center items-center
                                 `}
            >
              <Icons
                type={"heart"}
                fill={activeButton === 2 ? "#F57E5D" : "#FFFFFF"}
              />
              <Link
                href="/wishlist"
                className={`text_10 ${activeButton === 2 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                My Wishlist
              </Link>
              <span
                className={`
                              ${activeButton === 2
                    ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                    : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                  } `}
              ></span>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>
            <div
              onClick={() => handleClick(3)}
              className={`btn ${activeButton === 3 ? "active" : ""
                } pb-[1px] btn  w-[71px] flex flex-col gap-[1px] justify-center items-center
                                 `}
            >
              <Icons
                type={"cartcarry"}
                fill={activeButton === 3 ? "#F57E5D" : "#FFFFFF"}
              />
              <Link
                href="/cart"
                className={`text_10 ${activeButton === 3 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                My Cart
              </Link>
              <span
                className={`
                              ${activeButton === 3
                    ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                    : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                  } `}
              ></span>
            </div>
            <span className="border-[#FFFFFF] opacity-10  h-[18px] border-[1px] "></span>

            <div
              onClick={() => handleClick(4)}
              className={`btn ${activeButton === 4 ? "active" : ""
                } pb-[1px] btn  w-[71px] flex flex-col gap-[1px] justify-center items-center
                                 `}
            >
              <Icons
                type={"loginavtar"}
                fill={activeButton === 4 ? "#F57E5D" : "#FFFFFF"}
              />
              <Link
                href="/login"
                className={`text_10 ${activeButton === 4 ? "text-[#F57E5D]" : "text-[#FFFFFF]"
                  }`}
              >
                Login
              </Link>
              <span
                className={`
                              ${activeButton === 4
                    ? "border-[1px] border-light_primary w-[10px] h-[1px]"
                    : "border-blue_gray_900  border-[1px]  w-[10px] h-[1px]"
                  } `}
              ></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;