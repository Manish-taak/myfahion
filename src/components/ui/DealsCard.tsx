"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Icons from "@/icons/Index";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { dealscardtype } from "@/interFaces/type";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 *
 * @param  {any}  props.data  // handling data
 * @param  {string}  props.card             // handling card type
 * @param  {void}  props.openwritepopup   // handling openwritepopup
 * @param  {void}  props.openratingpopup     // handling openratingpopup
 * @param  {boolean}  props.show       handling show condition
 * @param  {boolean}  props.save           handling save condtiotn
 * @param  {any}  props.CreatenewList   // handling  CreatenewList popup
 * @param  {void}  props.opendeletepopup  // handling opendeletepopup
 * @param  {boolean}  props.color         handling color
 * @param  {void}  props.openpopup         handling openpopup
 * @param  {void}  props.closepopup          handling closepopup
 * @returns  {JSX.Element} JSX for the featuredcard component.
 */
const DealsCard = ({
  data,
  card,
  openwritepopup,
  openratingpopup,
  show,
  save,
  CreatenewList,
  opendeletepopup,
  color,
  openpopup,
  closepopup,
}: dealscardtype) => {
  const [quantity, setquantity] = useState(1); //  default state for product quantity
  const location = usePathname(); // importing usepathname and declaring as location
  const stoponoutlick = useRef<HTMLDivElement>(null);
  // handling outside click
  useOutsideClick(stoponoutlick, () => {
    closepopup;
  });
  return (
    <>
      {/* vertical card  */}
      {card === "vertical" && (
        <>
          <div
            ref={stoponoutlick} // reffernce to closepopup on outsideclick
            className="overflow-hidden md:h-[460px] dealmain bg-hf_extra md:bg-white relative"
          >
            {/* link to navigate to product-detail page */}
            <Link
              className="absolute top-0 right-0 left-0 bottom-0 z-[1]"
              href={"/product-detail"}
            ></Link>
            <div className=" duration-1000 bg-white   max-w-[375px] relative rounded-lg cursor-pointer ">
              <div className="duration-1000">
                <div className="pt-4 pb-5  md:pt-6 md:pb-7 bg-white md:bg-extra_bg flex justify-center flex-col items-center rounded-t-[30px] ">
                  {/* product image */}
                  <Image
                    className=" md:dealimage h-[40vw] md:max-w-[250px] w-full object-contain "
                    src={`/images/${data?.image}`}
                    alt="product image"
                    width={306}
                    height={286}
                  />
                  {/* tag for new */}
                  {data?.new !== "" && (
                    <>
                      <span
                        className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[44px] md:w-[48px] lg:w-[52px] lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.new}
                      </span>
                    </>
                  )}
                  {/* tag for top */}
                  {data?.top !== "" && (
                    <>
                      <span
                        className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-Dark_Warning_Main rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[86px]   lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.top}
                      </span>
                    </>
                  )}
                  {/* tag for offer */}
                  {data?.offer !== "" && (
                    <>
                      <span
                        className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-Dark_Info_Main  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.offer} OFF
                      </span>
                    </>
                  )}
                  {/* tag for sold */}
                  {data?.sold !== "" && (
                    <>
                      <span
                        className={`absolute top-[10px] left-[8px] md:top-[19px] md:left-[14px] bg-sold  rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                      >
                        {data?.sold}
                      </span>
                    </>
                  )}
                  <div className="  bg-white rounded-[50px] absolute hidden md:block top-4 right-4 z-[2]">
                    {/* if location.pathname === wishlist closecard icon will be showed  */}
                    {location === "/wishlist" ? (
                      <div
                        onClick={openpopup} // handling open popup on wishlist icon
                      >
                        <Icons
                          className="w-[32px] h-[32px] flex justify-center p-1 fill-light_primary transition-all opacity-30 hover:opacity-100 z-[2]"
                          type="closecard"
                        />
                      </div>
                    ) : (
                      // if not like to wishlist heart icon will be showed
                      <div
                        onClick={(e) => {
                          {
                            e.stopPropagation();
                            CreatenewList(); //handling popup
                          }
                        }}
                        className={`absolute right-px top-px bg-white md:w-[36px] w-[28px] h-[28px] md:h-[36px] justify-center flex items-center text-center rounded-[90px] group z-[2]`}
                      >
                        <Icons
                          type="cardlikeimage"
                          className={` fill-blue_gray_100 group-hover:fill-red-500     `}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center flex-col items-center py-[10px] md:py-[10px] md:px-[14px] ">
                  <div className="text-center">
                    <h3 className="text_20_14 text-blue_gray_700 ">
                      {data?.name} {/**product name */}
                    </h3>
                    <p className="flex justify-center items-center text_16_1_12 py-[6px] text-blue_gray_400 gap-x-[6px]">
                      <Icons type="singleStar" />
                      {data?.price} {/** product price */}
                    </p>
                  </div>
                  <div className="flex md:gap-x-[6px] items-center gap-1 flex-row">
                    <h1 className="text_24_14 text-blue_gray_800 ">
                      {data?.price} {/** product price  */}
                    </h1>
                    <p className="text_16_2_10 text-blue_gray_200 ">
                      <del>$32.00</del>
                    </p>
                    <p className="text_12 text-blue_gray_500">(15% Off)</p>{" "}
                    {/**product offer discount */}
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              {/* product shop now button */}
              <Button
                navroute="/checkout"
                varient="primary"
                className="w-full  justify-center z-[4] md:flex hidden  relative "
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </>
      )}

      {/* horizontal card */}
      {card === "horizontal" && (
        <>
          <div className=" rounded-[6px] md:rounded-[10px] min-[375px]:p-[10px] md:p-[20px]  bg-white  lg:grid-cols-[38%_56%] xl:grid-cols-[30%_67%] grid grid-cols-2 md:gap-x-[30px] w-full relative ">
            <div className="bg-hf_extra  rounded-[6px] md:h-auto h-[30vw]   w-full md:grid md:row-[1_/_span_2] justify-center flex items-center text-center ">
              {/**product image */}
              <Image
                className="xl:w-[200px] w-full h-full object-contain "
                src={`/images/${data.image}`}
                alt="image"
                width={180}
                height={168}
              />
            </div>
            {/** product tag */}
            {data?.new !== "" && (
              <>
                <span
                  className={`absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[0%]  bg-light_primary rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast block text-center w-[44px] md:w-[48px] lg:w-[53px]`}
                >
                  new
                </span>
              </>
            )}
            {/** product tag */}
            {data?.top !== "" && (
              <>
                <span
                  className={`absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[0%]  bg-Dark_Warning_Main rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast text-center w-[86px]   lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.top}
                </span>
              </>
            )}
            {/** product tag */}
            {data?.sold !== "" && (
              <>
                <span
                  className={`absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[0%]  bg-sold rounded-[18px] text-[11px] lg:text-[13px] text-light_secondary_contrast w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.sold}
                </span>
              </>
            )}
            {/** product tag */}
            {data?.offer !== "" && (
              <>
                <span
                  className={`absolute lg:top-[34px] lg:left-[29px]  md:top-[24px] md:left-[19px]  top-[14px] left-[0%]  bg-Dark_Info_Main rounded-[18px] text-light_secondary_contrast  text-[11px] w-[74px]  lg:h-[26px] flex items-center justify-center text_13 capitalize`}
                >
                  {data?.offer} OFF
                </span>
              </>
            )}
            <div className="w-full flex flex-col justify-center ">
              <div className="flex justify-between flex-col lg:flex-row gap-[14px] md:gap-[20px] ">
                <div className="flex flex-col  gap-[14px] md:gap-[20px] ">
                  <h2 className="text_24_16 text-blue_gray_700">
                    {data?.name} {/** product name*/}
                  </h2>
                  <p className="flex md:pb-[14px] text_16_1_12 text-blue_gray_400 items-center ">
                    <Icons type="singleStar" />
                    4.5 (200 Reviews) {/** product reviews */}
                  </p>
                </div>
                <p className=" pb-[14px] text_16_2_10 text-blue_gray_300">
                  Free Delivery By 13 Sep, Tuesday.
                </p>
              </div>
              <div className="flex md:gap-[6px] gap-[4px] items-center">
                <span
                  className={`  xl:text-[17px] text_24_14 2xl:text-[24px] `}
                >
                  $ 20.00
                </span>
                <span className="text_16_2_10   text-blue_gray_400  ">
                  $32.00
                </span>
                <span className=" text-blue_gray_500 text_12">(15% Off)</span>
              </div>
            </div>
            <div className="col-[1_/_3]  md:col-[2_/_3] w-full ">
              <div className="flex flex-col w-full">
                <span className="border-[1px]  my-[14px] md:my-[20px] md:hidden "></span>
                <div className="flex  justify-between md:flex-col">
                  <div
                    className={`flex gap-[8px] items-center  md:pt-[20px] ${
                      show === true ? "pb-0" : "md:pb-5"
                    }`}
                  >
                    <span className="text_16_1_12 text-blue_gray_400  ">
                      Qty :
                    </span>
                    <div className="max-[500px]:w-[68px] max-[500px]:h-[22px] py-[4px] px-[6px] flex gap-[6px] items-center rounded-[30px] border-[1px] w-[106px] justify-between ">
                      <div
                        className="cursor-pointer transition-all duration-300 rounded-full border-[1px] border-transparent hover:border-light_primary group"
                        onClick={() => {
                          if (quantity <= 1) {
                            {
                              /** handling prodict quantity */
                            }
                            return;
                          } else {
                            setquantity(quantity - 1);
                          }
                        }}
                      >
                        {/** decrease quantiy icon */}
                        <Icons
                          className="w-[14px] h-[14px] smalltab:w-[26px] smalltab:h-[26px] px-1 md:p-1 fill-blue_gray_200 group-hover:fill-light_primary"
                          type="minus"
                        />
                      </div>
                      <span className="text_14_1 text-blue_gray_400 max-[500px]:text-[10px]">
                        {quantity} {/** product quantity */}
                      </span>
                      <div
                        className="cursor-pointer transition-all duration-300 rounded-full border-[1px] border-transparent hover:border-light_primary group"
                        onClick={() => {
                          if (quantity !== 3) {
                            {
                              /** handling product quantity */
                            }
                            setquantity(quantity + 1);
                          } else {
                            return;
                          }
                        }}
                      >
                        {/** increase quantiy icon*/}
                        <Icons
                          className="h-[14px] w-[14px] smalltab:h-[26px] smalltab:w-[26px] fill-blue_gray_200 group-hover:fill-light_primary"
                          type="plus"
                          fill="#B0BEC5"
                        />
                      </div>
                    </div>
                  </div>
                  {show === true ? (
                    <span className="border-[1px]  my-[14px] md:my-[20px]  hidden md:block "></span>
                  ) : null}
                  <div className="flex gap-[10px] items-center">
                    <h3
                      onClick={openpopup} // handling popup on click
                      className="text_14_1_10 text-blue_gray_400 cursor-pointer"
                    >
                      Remove Product
                    </h3>
                    {save === true ? (
                      <span className="  hidden  md:block  border-[1px]"></span>
                    ) : null}
                    {save === true ? (
                      <h3 className=" hidden md:block  text_14_1_10 text-blue_gray_400 ">
                        Save For Later
                      </h3>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* profile card */}
      {card === "profilcard" && (
        <>
          <div className="p-3 md:p-5 flex bg-white rounded-[14px]  gap-[10px] tab:gap-x-5 border-[1px] border-blue_gray_50   ">
            <div className="bg-extra_bg rounded-[2px] ">
              <div className=" flex justify-center items-center min-w-[80px]  md:py-4 md:px-6 rounded-[10px]  max-w-[24vw] tab:max-w-[200px]   h-full tab:h-[200px] w-full ">
                {/** product image */}
                <Image
                  className="w-full  object-contain "
                  src={`/images/${data?.image}`}
                  alt="image"
                  width={180}
                  height={168}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[10px] tab:gap-y-5 w-full ">
              <div className="flex flex-col gap-[10px] md:gap-[14px] w-full ">
                <div className="flex items-center justify-between w-full">
                  <h2 className="text_20_14 text-blue_gray_700 lg:text-wrap text-ellipsis overflow-hidden  ">
                    White Mens US Polo Neck T-Shirt... {/** product name */}
                  </h2>
                  <div
                    onClick={openpopup} // handling popup on click
                    className="cursor-pointer z-[2]"
                  >
                    <Icons type="closecard" className="fill-blue_gray_400" />{" "}
                    {/** product remove icon */}
                  </div>
                </div>
                <p className="text_16_2 text-blue_gray_600 flex items-center">
                  <Icons type="star" />
                  4.5 (200 Reviews) {/** product reviews */}
                </p>
              </div>
              <div className="flex md:gap-[6px] gap-[4px] items-center">
                <span className={` text_34_20 text-blue_gray_800 `}>
                  $ 20.00 {/** product price */}
                </span>
                <span className="text_20_12   text-blue_gray_400  ">
                  $32.00 {/** product old price*/}
                </span>
                <span className=" text-blue_gray_500 text_20_12">
                  (15% Off) {/** discount on product */}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {/** rating card*/}
      {card === "Ratingcard" && (
        <>
          <div className="p-3 md:p-5 flex bg-white rounded-[14px] gap-x-[10px] lg:gap-x-5 border-[1px] border-blue_gray_50 overflow-hidden">
            <div className="bg-extra_bg flex justify-center items-center px-5 ">
              <div className="max-w-[180px] max-h-[168px] rounded-[10px] w-full">
                {/** product image*/}
                <Image
                  className="w-full object-contain "
                  src={`/images/${data?.image}`}
                  alt="image"
                  width={180}
                  height={168}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-[10px] lg:gap-y-[14px] w-full overflow-hidden">
              <div className="flex flex-col gap-y-[6px] w-full">
                <div className="hidden xl:block">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text_20_14 text-blue_gray_700  ">
                      White Mens US Polo Neck T-Shirt... {/** product name */}
                    </h2>
                    <div className="flex items-center gap-x-5">
                      <h5
                        className="text-blue_gray_500 text_14_1 cursor-pointer"
                        onClick={opendeletepopup} // handling popoup on delete
                      >
                        Delete
                      </h5>
                      <h5
                        onClick={openwritepopup} // handling popup on edit
                        className="text-blue_gray_500 text_14_1 cursor-pointer"
                      >
                        Edit
                      </h5>
                    </div>
                  </div>
                </div>
                <p className="text_16_2 text-blue_gray_600 flex items-center gap-x-1">
                  <Icons type="star" />
                  4.5 (Awesome)
                </p>
              </div>
              <p className="text-blue_gray_500 text_14_1 text-nowrap md:text-wrap">
                Photographs are a way of preserving a moment in our lives for
                the rest of our lives. Many of us have at least been tempted at
                the flashy array of photo printers which seemingly leap off the
                shelves at even the least tech-savvy.
              </p>
              <div className="hidden lg:block">
                <p className="flex items-center gap-x-1 text-blue_gray_600 text_14_1">
                  Mike Posner <Icons type="verified" />
                </p>
              </div>
              <div className="w-full border-t-[1px] border-blue_gray_50 pt-[10px] lg:pt-[14px]">
                <div className="hidden xl:block">
                  <div className="flex items-center gap-x-[18px]">
                    <p className="flex items-center gap-x-[5px] text-blue_gray_400 text_12_3">
                      <Icons type="like" /> 20 Likes
                    </p>
                    <p className="flex items-center gap-x-[5px] text-blue_gray_400 text_12_3">
                      <Icons type="dislike" /> 20 Dislikes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-5 xl:hidden">
                  <h5
                    className="text-blue_gray_500 text_14_1"
                    onClick={opendeletepopup} // handling delete popup
                  >
                    Delete
                  </h5>
                  <h5
                    onClick={openwritepopup} // handling edit popup
                    className="text-blue_gray_500 text_14_1"
                  >
                    Edit
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* more review card */}
      {card === "Morereview" && (
        <>
          <div className="flex flex-col justify-center items-center gap-y-[10px] md:gap-5 p-[10px] md:p-5 ">
            <div className="bg-extra_bg w-full flex justify-center items-center rounded-[10px] ">
              <div className="tab:max-w-[218px] max-w-[130px] h-[160px] w-full flex justify-center  rounded-[10px] px-[5px]">
                {/** product image*/}
                <Image
                  src={`/images/${data?.image}`}
                  className=" w-full object-contain"
                  alt="image"
                  width={208}
                  height={286}
                />
              </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-[6px]  md:gap-y-[14px] text-center">
              <h2 className="text_16_1_12 text-blue_gray_700  truncate">
                {data?.name} {/** product name */}
              </h2>
              <h2
                onClick={openratingpopup} // handling rating popup
                className="text_16_1_12 text-light_secondary_main xl:py-[10px] xl:px-4 hover:bg-light_secondary_main hover:bg-opacity-[0.2] rounded-[4px]  cursor-pointer"
              >
                Ratings & review
              </h2>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default DealsCard; // exporting dealcard
