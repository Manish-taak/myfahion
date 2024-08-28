"use client";
import Icons from "@/icons/Index";
import Link from "next/link";
import React, { Fragment } from "react";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/Button";
import { cardinfo } from "@/interFaces/type";
import Image from "next/image";
/**
 *
 * @param  {boolean}  props.hoverEffect  // handling hovereffect on product
 * @param  {string}  props.bg             // handling bg
 * @param  {string}  props.custompaddingboxbottom   // handling custom padding
 * @param  {boolean}  props.star     // handling stars on product
 * @param  {string}  props.card       handling card vairent
 * @param  {any}  props.data           handling data
 * @param  {boolean}  props.checkbox   // handling checkbox
 * @param  {any}  props.CreatenewList  // handling popup
 * @param  {any}  props.checked         handling checked item
 * @param  {number}  props.index         handling index
 * @param  {any}  props.clickme          handling clicked on card
 * @param  {any}  props.ref             handling reffernce for popup
 * @returns  {JSX.Element} JSX for the featuredcard component.
 */
const FeaturedCard = ({
  hoverEffect,
  bg,
  custompaddingboxbottom,
  star,
  card,
  data,
  checkbox,
  CreatenewList,
  checked,
  index,
  clickme,
  ref,
}: cardinfo) => {
  return (
    <>
      {/* vertical card varient */}
      {card === "vertical" && (
        <div
          // handling classes on conditions
          className={`
          ${
            star === true ? "md:p-[14px]" : "p-[10px]"
          } group cursor-pointer flex bg-white flex-col gap-[14px] rounded-[14px] ${
            checkbox == true && "max-h-[426px] "
          } relative `}
        >
          {/* navigating to product detail page */}
          <Link
            className="absolute top-0 left-0 right-0 z-[1] bottom-0"
            href={"/product-detail"}
          ></Link>
          <div
            className={cn` flex justify-center h-[41vw] lg:h-[400px] relative  ${bg}   xl:pt-[28px] lg:pb-[18px] pt-[23px]  pb-[10px] rounded-[10px] md:w-full`}
          >
            {/* product image */}
            <Image
              className={` max-w-[298px] w-full  object-contain ${
                checkbox == true && "max-h-[211px]"
              }`}
              src={`/images/${data?.image}`}
              alt="cardimage"
              width={277}
              height={318}
            />
            {/* product tag */}
            {data?.new !== "" && (
              <>
                <span
                  className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[44px] md:w-[48px] lg:w-[52px] lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.new}
                </span>
              </>
            )}
            {/* product tag */}
            {data?.top !== "" && (
              <>
                <span
                  className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-Dark_Warning_Main rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[86px]   lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.top}
                </span>
              </>
            )}
            {/* product tag */}
            {data?.offer !== "" && (
              <>
                <span
                  className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-Dark_Info_Main  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.offer} OFF
                </span>
              </>
            )}
            {/* product tag */}
            {data?.sold !== "" && (
              <>
                <span
                  className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-sold  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.sold}
                </span>
              </>
            )}
            {/* using checkbox on condition */}
            {checkbox === true ? (
              <>
                <div
                  className={`absolute right-[8px] top-[8px]  md:w-[36px] w-[28px] h-[28px] md:h-[36px] justify-center flex items-center text-center`}
                >
                  {/* <Checkbox id={50} color="green" /> */}
                  <div
                    onClick={() => {
                      clickme(index); // handling index on click
                    }}
                    className="flex text_16_2 text-blue_gray_300 items-center"
                  >
                    <div>
                      <div className="flex gap-[6px] justify-between items-center cursor-pointer">
                        <div
                          className={
                            "flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full"
                          }
                        >
                          <label className="cursor-pointer">
                            {/* {item?.landmark} */}
                          </label>
                          <div className="relative flex">
                            {/* input type checkbox */}
                            <input
                              type="checkbox"
                              checked={checked}
                              readOnly
                              className={
                                "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-light_primary checked:before:bg-light_primary"
                              }
                            />
                            {/* if checked is true then icon will be showed */}
                            {checked && (
                              <Icons
                                type="checkedicon"
                                className="absolute top-[13px] right-[13px] h-3.5 w-3.5"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    CreatenewList(); // handling popup createnewlist
                  }}
                  className={`absolute right-[8px] z-[4] top-[8px] bg-white md:w-[36px] w-[28px] h-[28px] md:h-[36px] justify-center flex items-center text-center rounded-[90px] group/item`}
                >
                  {/* icon type cardlikeimage */}
                  <Icons
                    type="cardlikeimage"
                    className={`fill-blue_gray_100 group-hover/item:fill-red-500 `}
                  />
                </div>
              </>
            )}
            {/* if hover effect is true then this condtion will work */}
            {hoverEffect === true && (
              <div className=" md:block hidden group-hover:opacity-100 opacity-0 absolute z-[4] bottom-[10px] w-full  marker: lg:max-w-[300px] md:max-w-[200px] duration-500 ">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {/* button navigating to cart page */}
                  <Button
                    navroute="/cart"
                    varient="primary"
                    className="w-full flex justify-center"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div
            className={cn`${star === true ? `${custompaddingboxbottom}` : ""}`} // if star condition is true then this class will added
          >
            <div className={`md:flex md:gap justify-between`}>
              <h3
                className={`pt-1 text_20_14_medium text-blue_gray_600 ${
                  star === true ? "md:w-[10vw]" : ""
                } group-hover:text-light_primary duration-300 whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                {data?.name} {/* product name */}
              </h3>
              {checkbox !== true && (
                <>
                  {/* checking star condition */}
                  {star === true && (
                    <div className="md:flex gap-[4px] items-center hidden">
                      <Icons type="singleStar" />
                      <span className="whitespace-nowrap text-blue_gray_400 text_16_2">
                        4.5 (200) {/* product rating */}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex gap-[6px] py-2 md:py-[10px] items-center">
              {/* product color  */}
              <span className="text_14_1_12 text-blue_gray_400">Colors-</span>
              <ul className="flex gap-[6px] flex-wrap ">
                {data?.colors.map((item: any, index: number) => (
                  <li
                    key={Date.now() + index}
                    className="md:w-[20px] w-[10px] md:h-[20px] cursor-pointer h-[10px] rounded-[50%]"
                    style={{ backgroundColor: item.color_code }}
                  ></li>
                ))}
              </ul>
            </div>
            <div className="flex md:gap-[6px] gap-[4px] items-center max-[344px]:flex-wrap ">
              <span
                className={`text_24_14 text-blue_gray_800 whitespace-nowrap `}
              >
                {data?.price} {/* product price */}
              </span>
              <span className="text_16_2_10 text-blue_gray_400">
                <del>$32.00</del> {/*product old price */}
              </span>
              <span className="text-blue_gray_500 text_12 whitespace-nowrap ">
                (15% Off) {/*discount available on product */}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* card type horizontal */}
      {card === "horizontal" && (
        <>
          <div
            className={`flex xl:p-3 lg:gap-6 rounded-[6px] xl:rounded-[10px]  2xl:p-5 xl:grid  h-[140px] md:h-[auto] xl:grid-cols-[40%_50%]  bg-white 2xl:flex cursor-pointer`}
          >
            <div className={`  rounded-[10px] flex items-center`}>
              <div className="  relative  xl:bg-extra_bg   xl:w-full 2xl:w-[240px] w-[135px] md:w-[240px] md:h-[260px] flex justify-center items-center">
                <Link href="/product-detail">
                  {" "}
                  {/*navigation to product-detail page */}
                  {/* product image */}
                  <Image
                    className={` relative  w-[105px] md:w-[auto] h-[122px] md:h-[auto] object-contain  md:max-w-[181px] `}
                    src={`/images/${data?.image}`}
                    alt="cardimage"
                    width={277}
                    height={318}
                  />
                </Link>
                {/* it will hidden and viewd on xl breakpoint */}
                <div className="xl:block hidden ">
                  {/* product tag */}
                  {data?.new !== "" && (
                    <>
                      <span
                        className={`absolute top-[15px] left-[0px] md:left-[10px]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[44px] md:w-[48px] lg:w-[52px] lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.new}
                      </span>
                    </>
                  )}
                  {/* product tag */}
                  {data?.top !== "" && (
                    <>
                      <span
                        className={`absolute top-[15px] left-[0px] md:left-[10px]  bg-Dark_Warning_Main rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[86px]   lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.top}
                      </span>
                    </>
                  )}
                  {/* product tag */}
                  {data?.offer !== "" && (
                    <>
                      <span
                        className={`absolute top-[15px] left-[0px] md:left-[10px]  bg-Dark_Info_Main  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.offer} OFF
                      </span>
                    </>
                  )}
                  {/* product tag */}
                  {data?.sold !== "" && (
                    <>
                      <span
                        className={`absolute top-[15px] left-[0px] md:left-[10px]  bg-sold  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.sold}
                      </span>
                    </>
                  )}
                  <div
                    ref={ref}
                    onClick={(e) => {
                      {
                        CreatenewList(); // handling createnewlist popup
                        e.stopPropagation();
                      }
                    }}
                    className={`absolute top-[10px] right-[10px] w-[36px] h-[36px] flex justify-center items-center bg-white rounded-[50%] z-[2]`}
                  >
                    {/* icon type  cardlikeimage*/}
                    <Icons
                      type="cardlikeimage"
                      className={`fill-blue_gray_100 hover:fill-red-500 `}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`  relative  justify-center md:justify-end flex flex-col gap-[24px] w-full`}
            >
              {/* it will hidden at xl breakpoint */}
              <div className="xl:hidden">
                {/* product tag */}
                {data?.new !== "" && (
                  <>
                    <span
                      className={`absolute top-[15px] left-[0px] md:left-[10px]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[44px] md:w-[48px] lg:w-[52px] lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                    >
                      {data?.new}
                    </span>
                  </>
                )}
                {/* product tag */}
                {data?.top !== "" && (
                  <>
                    <span
                      className={`absolute top-[15px] left-[0px]  bg-Dark_Warning_Main rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[86px]   lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                    >
                      {data?.top}
                    </span>
                  </>
                )}
                {/* product tag */}
                {data?.offer !== "" && (
                  <>
                    <span
                      className={`absolute top-0 left-[0px]  bg-Dark_Info_Main  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                    >
                      {data?.offer} OFF
                    </span>
                  </>
                )}
                {/* product tag */}
                {data?.sold !== "" && (
                  <>
                    <span
                      className={`absolute top-[15px] left-[0px]  bg-sold  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                    >
                      {data?.sold}
                    </span>
                  </>
                )}
                <div
                  ref={ref}
                  onClick={(e) => {
                    {
                      e.stopPropagation();
                      CreatenewList(); // handling createnewlist popup
                    }
                  }}
                  className={`absolute top-[10px] right-[10px] w-[36px] h-[36px] flex justify-center items-center bg-white rounded-[50%] `}
                >
                  {/* icon type  cardlikeimage*/}
                  <Icons
                    type="cardlikeimage"
                    className={`fill-blue_gray_100 hover:fill-red-500  `}
                  />
                </div>
              </div>
              <div
                className={`lg:flex lg:flex-col lg:gap-[12px] grid  grid-cols-1 tab:grid-cols-1 md:grid-cols-2 gap-[12px] "`}
              >
                <div className={`flex flex-col gap-[14px] "  `}>
                  <h3 className=" pt-1 text_20_14_medium text-blue_gray_600  group-hover:text-light_primary duration-300 whitespace-nowrap  overflow-hidden text-ellipsis ">
                    {data?.name} {/* product name */}
                  </h3>

                  {star === true && ( // if star is true then this code will implemented
                    <>
                      <div className="md:flex gap-[4px] items-center hidden ">
                        <Icons type="singleStar" /> {/* icon type  singleStar*/}
                        <span className="whitespace-nowrap  text-blue_gray_400 text_16_2 ">
                          4.5 (200) {/* product rating */}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex gap-[8px] py-2 md:py-[10px] items-center flex-wrap ">
                  {/* product color varients */}
                  <span className="text_16_2_12 text-blue_gray_400 ">
                    Colors-
                  </span>
                  <ul className="flex gap-[6px] flex-wrap ">
                    {data?.colors.map((item: any, index: number) => (
                      <Fragment key={Date.now() + index}>
                        <li
                          className="md:w-[20px] w-[10px] md:h-[20px] cursor-pointer h-[10px] rounded-[50%]"
                          style={{ backgroundColor: item.color_code }}
                        ></li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex md:gap-[6px] gap-[4px] items-center flex-wrap ">
                    <span
                      className={`xl:text-[17px] text_24_14 text-blue_gray_800  2xl:text-[24px] `}
                    >
                      {data?.price} {/*product price */}
                    </span>
                    <span className="text_16_2_10   text-blue_gray_400  ">
                      <del className="text-blue_gray_200 text_16_2_10 ">
                        $32.00 {/* product old price */}
                      </del>
                    </span>
                    <span className="text-blue_gray_400 md:text-blue_gray_500 text_16_2_12">
                      (15% Off) {/* discount avaliable on product */}
                    </span>
                  </div>
                </div>
              </div>
              <div className={` hidden md:block   overflow-hidden `}>
                <div
                  ref={ref}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {/* link navigation to cart page */}
                  <Button
                    navroute="/cart"
                    className="w-full  ld:max-w-[273px] rounded-[6px] py-[14px] px-[18px] flex justify-center"
                    varient="thirdly"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedCard; // exporting featuredcard
