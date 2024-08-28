"use client";
import Icons from "@/icons/Index";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import footerjson from "@/json/footer.json";
import Dropdown from "./ui/Dropdown";
import headerdata from "@/json/header.json";
import Image from "next/image";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

const Footer = () => {
  const [centurydropdown, setcenturydropdown] = useState(false); // handling currency dropdown
  const [languagedropdown, setlanguagedropdown] = useState(false); // handling language dropdown
  const centurydropdownref = useRef<HTMLDivElement>(null);
  const languagedropdownref = useRef<HTMLDivElement>(null);
  const [currency, setcurrency] = useState("$ USD"); // handling state of currency
  const [language, setlanguage] = useState("eng"); // handling state of language
  // handling outside click on popup
  useOutsideClick(languagedropdownref, () => {
    setlanguagedropdown(false);
  });
  useOutsideClick(centurydropdownref, () => {
    setcenturydropdown(false);
  });

  // handling mail and telephone
  const openSkype = (phoneNumber: string) => {
    const skypeUrl = `skype:${phoneNumber}?call`;
    window.location.href = skypeUrl;
  };

  return (
    <>
      <footer className={`bg-blue_gray_900`}>
        <section className=" pt-[40px] pb-[50px] xl:pt-[80px] md:pb-0">
          <div className="container">
            {/* main logo */}
            <h3 className="text-light_primary text-[22px] font-bold leading-9 mb-5 xl:hidden ">
              FashionCart.
            </h3>
            <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-[30px]  2xl:flex  xl:grid-cols-4">
              {/* shopping list  */}
              <div className=" ">
                <h4 className="text-white text_20_16 mb-[10px]  2xl:w-[240px]">
                  Shopping
                </h4>
                <div className="grid grid-cols-2 2xl:grid-cols-1 gap-[14px]">
                  {footerjson?.shopping?.map((item, index) => {
                    return (
                      <>
                        <li
                          key={Date.now() + index + 1 + `list `}
                          className="text-blue_gray_200 text_16_2_14  py-[3px]  "
                        >
                          <Link
                            className=" hover:text-light_primary duration-300 hover:border-l-[2px] hover:border-light_primary hover:pl-[2px]"
                            href={`${item?.href}`}
                          >
                            {item?.name}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-[13px] lg:gap-x-[30px]">
                {/* helpdesk list */}
                <div className="2xl:w-[240px]">
                  <h4 className="text-white text_20_16 mb-[10px]">Help Desk</h4>
                  <div className="grid  gap-y-1 lg:gap-y-[14px]">
                    {footerjson?.helpdesk?.map((item, index) => {
                      return (
                        <>
                          <li
                            key={Date.now() + index + `list2`}
                            className="text-blue_gray_200 text_16_2_14 py-[3px]"
                          >
                            <Link
                              className=" hover:text-light_primary duration-300 hover:border-l-[2px] hover:border-light_primary hover:pl-[2px]"
                              href={`${item?.href}`}
                            >
                              {item?.name}
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="2xl:w-[240px]">
                  {/* company list */}
                  <h4 className="text-white text_20_16 mb-[10px]">Company</h4>
                  <div className="grid  gap-y-1 lg:gap-y-[14px]">
                    {footerjson?.Company?.map((item, index) => {
                      return (
                        <>
                          <li
                            key={Date.now() + index + `list3 `}
                            className="text-blue_gray_200 text_16_2_14 py-[3px]"
                          >
                            <Link
                              className=" hover:text-light_primary duration-300 hover:border-l-[2px] hover:border-light_primary hover:pl-[2px]"
                              href={`${item?.href}`}
                            >
                              {item?.name}
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="2xl:w-[375px] ">
                {/* popular searches list */}
                <h4 className="text-white text_20_16 mb-[10px]">
                  Popular Searches
                </h4>
                <div className="grid grid-cols-2 gap-[14px]">
                  {footerjson?.PopularSearches?.map((item, index) => {
                    return (
                      <>
                        <li
                          key={Date.now() + index + `list4`}
                          className="text-blue_gray_200 text_16_2_14 py-[3px] "
                        >
                          <Link
                            className=" hover:text-light_primary duration-300 hover:border-l-[2px] hover:border-light_primary hover:pl-[2px]"
                            href={`${item.href}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center flex-col lg:col-span-4 xl:col-span-1 xl:items-start 2xl:w-[375px] ">
                {/* contact us  */}
                <h4 className="text-white text_20_16 mb-[10px] xl:text-start">
                  Contact Us
                </h4>
                <div className="grid  gap-y-[14px] lg:gap-y-[17px]">
                  {/*  tracking mail address*/}
                  <div
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   openEmail("dummyemail@gmail.com");
                    // }}
                    className="flex flex-col gap-y-1 cursor-pointer"
                  >
                    <p className="text-blue_gray_200 text-center  flex justify-center items-center xl:justify-start gap-x-2 ">
                      {<Icons type="mail" />}Email Address
                    </p>
                    <p className="text-blue_gray_200 text-center xl:text-start cursor-pointer">
                      <Link href={"mailto:example@example.com"}>
                        dummyemail@gmail.com
                      </Link>
                    </p>
                  </div>
                  {/* tracking mobile number */}
                  <div className="flex flex-col gap-y-1 cursor-pointer">
                    <p className="text-blue_gray_200 text-center  flex justify-center items-center xl:justify-start gap-x-2  ">
                      {<Icons type="call" />} Mobile
                    </p>
                    <p className="text-blue_gray_200 text-center xl:text-start cursor-pointer">
                      <Link href="tel:+91 12345 67890">+91 12345 67890</Link>
                    </p>
                  </div>
                  {/* store location */}
                  <div className="flex flex-col gap-y-1">
                    <p className="text-blue_gray_200 text-center  flex justify-center items-center xl:justify-start gap-x-2  ">
                      {<Icons type="location" className="fill-blue_gray_100" />}
                      Store Location
                    </p>
                    <p className="text-blue_gray_200 text-center xl:text-start">
                      Akshya Colony 1st Block 1st Cross, Ram Nagar,
                      Bangalore-560016
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse py-5 lg:py-[30px] lg:flex-row lg:items-center lg:justify-between border-t-[1px] border-blue_gray_400 mt-5 lg:mt-[60px]">
              {/* copyright section */}
              <div className="xl:max-w-[375px] xl:w-full">
                <p className="text-blue_gray_200 text_14_1_12 text-center ">
                  © Copyright 2022 Madbrains. All Rights Are reserved.
                </p>
              </div>
              {/* payment modes available */}
              <div className="flex gap-x-2 justify-center my-4 lg:my-0 xl:max-w-[839.5px] xl:w-full">
                {footerjson?.paymentimages?.map((item, index) => {
                  return (
                    <Fragment key={Date.now() + index + `list5` + Math.random()}>
                      <Image
                        src={`/images/${item}.png`}
                        className="max-w-[38px] md:max-w-[44px] lg:max-w-[48px] xl:max-w-[52.5px]"
                        width={52.5}
                        height={30}
                        alt="logo"
                      />
                    </Fragment>
                  );
                })}
              </div>
              <div className="flex justify-center xl:max-w-[375px] xl:w-full lg:justify-end  gap-x-5 ">
                <div className="flex xl:gap-[10px] w-full justify-center  items-center   lg:justify-end gap-5 ">
                  <div
                    ref={centurydropdownref}
                    onClick={() => {
                      setcenturydropdown(!centurydropdown); // changing state to opposite
                      setlanguagedropdown(false); // changing language dropdown to false
                    }}
                    className="rounded-l-[6px]"
                  >
                    {/* currency dropdown  */}
                    <Dropdown
                      arrowimageclass={`${centurydropdown === true ? "rotate-180" : "rotate-0"
                        } transition-all duration-300 `}
                      onclick={true}
                      arrow="top-[-11px] right-[51px] "
                      className="gap-[6px] items-center  py-[6px] px-[8px] border border-blue_gray_500  rounded-[4px] "
                      testclass="  text-blue_gray_100 text_12_1"
                      image="dropdownarrow"
                      heading={currency}
                    >
                      <div
                        className={` z-[1] duration-300 relative  ${centurydropdown === true
                          ? "opacity-100"
                          : "opacity-0 z-[-1] invisible"
                          }`}
                      >
                        <ul className=" rounded-[8px] shadow-2xl flex gap-[8px] left-[-90px] bottom-[42px] py-[12px] px-[10px] bg-white w-[200px] flex-col absolute ">
                          <span
                            className={`block w-5 h-5 absolute  bg-white  rotate-45 z-[1] bottom-[-7px] right-[42px]`}
                          ></span>
                          {headerdata?.centuryList?.map((item, index) => {
                            return (
                              <Fragment key={Date.now() + index + "list7"}>
                                <li
                                  onClick={() => {
                                    setcurrency(item.century);
                                  }}
                                  className="p-[10px] group rounded-[4px] flex justify-between w-full  gap-[10px] items-center "
                                >
                                  <span className="text_14_3 bg-hf_extra  group-hover:text-light_primary text-blue_gray_300">
                                    {item.century}
                                  </span>

                                  <Image
                                    src={`/images/${item.image}`}
                                    width={28}
                                    height={20}
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
                  <div
                    ref={languagedropdownref}
                    onClick={() => {
                      setlanguagedropdown(!languagedropdown); // changing language dropdown state to opposite
                      setcenturydropdown(false); // changing century dropdown to false
                    }}
                    className="rounded-l-[6px]"
                  >
                    {/* language dropdown */}
                    <Dropdown
                      arrowimageclass={`${languagedropdown === true ? "rotate-180" : "rotate-0"
                        }   transition-all duration-300`}
                      onclick={true}
                      arrow="top-[-11px] right-[51px] "
                      className="gap-[6px] items-center  py-[6px] px-[8px] border border-blue_gray_500  rounded-[4px] capitalize "
                      testclass="  text-blue_gray_100 text_12_1 "
                      image="dropdownarrow"
                      heading={language}
                    >
                      <div
                        className={` z-[1] duration-300 relative  ${languagedropdown === true
                          ? "opacity-100"
                          : "opacity-0 z-[-1] invisible "
                          }`}
                      >
                        <ul className=" rounded-[8px] shadow-2xl flex gap-[8px] bottom-[42px] bg-white left-[-100px] lg:left-[-135px]  w-[200px] flex-col absolute px-[10px] py-[12px] ">
                          <span
                            className={`block w-5 h-5 absolute  bg-white  rotate-45 z-[1] bottom-[-7px] right-[42px]`}
                          ></span>
                          {headerdata?.language?.map((item, index) => {
                            return (
                              <Fragment key={Date.now() + index + "list8"}  >
                                <li
                                  onClick={() => {
                                    setlanguage(item.language);
                                  }}
                                  className="p-[10px] hover:bg-hf_extra group rounded-[4px] flex justify-between w-full  gap-[10px] items-center"
                                >
                                  <span className="text-blue_gray_300 group-hover:text-light_primary  text_14_3 ">
                                    {item.language}
                                  </span>

                                  <Image
                                    src={`/images/${item.image}`}
                                    width={28}
                                    height={20}
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
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
