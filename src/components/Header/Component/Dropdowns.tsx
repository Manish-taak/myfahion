"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import headerdata from "@/json/header.json"
import Image from "next/image";
import Dropdown from "@/components/ui/Dropdown";
const Dropdowns = () => {
    return (
        <>
            <div className="flex  tab:gap-[15px] lg:gap-[20px] xl:gap-[40px] 2xl:gap-[60px] w-full items-center relative ">
                <div className="group">
                    {/* Man's Fashions Dropdown  */}
                    <Dropdown
                        positionsta={true}
                        directionshovercontent="left-0  2xl:overflow-hidden  overflow-scroll max-w-[97vw] "
                        testclass=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px] "
                        heading={`Man's Fashion`}
                    >
                        <div className="bg-white  p-6   max-w-[1650px] 2xl:overflow-hidden  overflow-scroll  flex gap-[30px] w-[1650px] ">
                            {headerdata?.Dropdowndata?.slice(0, 1).map((item, index) => {
                                return (
                                    <Fragment key={Date.now() + index + `dropdown1`}>
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
                                                                        key={Date.now() + index + `dropdown2`}
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
                                    src="/images/boyimagedropdown.png"
                                    alt="img"
                                />
                                <Link href={"/exploreByCategories"}>
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
                    {/*  Women’s Fashion Dropdown  */}
                    <Dropdown
                        positionsta={true}
                        directionshovercontent="left-0  2xl:overflow-hidden  overflow-scroll max-w-[97vw] "
                        testclass=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px] "
                        heading={`Women’s Fashion`}
                    >
                        <div className="bg-white p-6   max-w-[1650px] 2xl:overflow-hidden  overflow-scroll  flex gap-[30px] w-[1650px] ">
                            {headerdata?.Dropdowndata?.slice(1, 2).map((item, index) => {
                                return (
                                    <Fragment key={Date.now() + index + `dropdown3`}>
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
                                                                        key={Date.now() + index + `dropdown4`}
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
                                <Link href={"/exploreByCategories"}>

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
                    {/*  Kid’s Fashion  */}
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
                                <Link href={"/exploreByCategories"}>
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
                {/* nav links */}
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
        </>
    )
}

export default Dropdowns