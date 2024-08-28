import Icons from "@/icons/Index";
import React from "react";
import Button from "./ui/Button";
import { cn } from "@/utils/cn";
import { banner } from "@/interFaces/type";
import Image from "next/image";

/**
 * BannerSection component
 * 
 * This component renders a banner section with an image, heading, subheading, button, and other UI elements.
 * 
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.smallheading - The small heading text.
 * @param {string} props.maintextfirst - The first part of the main text.
 * @param {string} props.maintextlast - The last part of the main text.
 * @param {boolean} props.career - Determines the alignment of the content.
 * @param {string} props.imageclass - Additional classes for the image.
 * @param {string} props.ptext - The paragraph text.
 * @param {string} props.btndata - The text for the button.
 * @param {string} props.spantext - The span text within the main heading.
 * @param {boolean} props.banner - Flag to show additional banner content.
 * @param {string} props.image - The image source.
 * @param {string} props.sectionclass - Additional classes for the section.
 * @param {string} props.gap - The gap classes for the section layout.
 * @param {string} props.linkto - The link for the button.
 * 
 * @returns {React.Element} The rendered BannerSection component.
 */
const BannerSection = ({
  smallheading,
  maintextfirst,
  maintextlast,
  career,
  imageclass,
  ptext,
  btndata,
  spantext,
  banner,
  image,
  sectionclass,
  gap,
  linkto,
}: banner) => {
  return (
    <>
      {/** 
       * The main section of the banner.
       * @type {HTMLElement}
       */}
      <section className={` ${sectionclass}`}>
        {/**
         * The container for the banner content.
         * @type {HTMLElement}
         */}
        <div
          className={`m-auto max-w-[1572px] w-full flex flex-col ${gap} px-[16px] lg:flex-row justify-between relative`}
        >
          {/** 
           * Container for the image and icons.
           * @type {HTMLElement}
           */}
          <div className="flex justify-center">
            {/**
             * Main image in the banner.
             * @type {HTMLImageElement}
             */}
            <Image
              src={`/images/${image}`}
              className={cn` ${imageclass} `}
              width={550}
              height={821}
              alt="girl"
            />
            {/**
             * First star icon.
             * @type {JSX.Element}
             */}
            <Icons
              type="star1banner"
              className="absolute top-[33%] right-[10%] md:top-[37%] md:left-[-25px] left-[32px] max-w-[38px] h-[48px] md:max-w-[73px] md:h-[78px] "
            />
            {/**
             * Second star icon.
             * @type {JSX.Element}
             */}
            <Icons
              type="star2banner"
              className="absolute top-[102px] left-[64px] md:left-[34%]"
            />
          </div>
          {/** 
           * Container for the text content.
           * @type {HTMLElement}
           */}
          <div
            className={`w-full max-w-[788px] ${
              career === true ? "justify-center" : "justify-end"
            } flex-col flex mt-[30px] md:mt-0 md:pb-5`}
          >
            <div className="flex flex-col justify-end">
              {/**
               * Small heading text.
               * @type {HTMLHeadingElement}
               */}
              <h2 className="text_24_20 text-light_primary text-center md:text-left">
                {smallheading}
              </h2>
              <div className="relative">
                {/**
                 * Main heading text with a span element.
                 * @type {HTMLHeadingElement}
                 */}
                <h1 className="text-blue_gray_800 text-[38px] leading-[44px] font-bold text-center md:text-left lg:text_90_34_main_heading">
                  {maintextfirst}
                  <span className='text-[38px] leading-[44px] font-bold lg:text_90_38_main_heading relative text-light_primary after:content-[""] after:absolute after:left-0 after:top-0 after:border-[2px] after:border-[#f57e5d] after:transform after:rotate-[-4deg] after:rounded-[50%] after:w-full after:h-[90%] after:block'>
                    {spantext}
                  </span>
                  {maintextlast}
                </h1>
                {/**
                 * Third star icon.
                 * @type {JSX.Element}
                 */}
                <Icons
                  type="star4banner"
                  className="w-full max-w-[34px] md:h-[57px] md:max-w-[54px] h-[37px] absolute top-[50%] right-[3%] md:right-[10%]"
                />
              </div>
              <div className="relative">
                {/**
                 * Paragraph text.
                 * @type {HTMLHeadingElement}
                 */}
                <h3 className="pt-[30px] text-blue_gray_500 text_24_16 text-center md:text-left">
                  {ptext}
                </h3>
                {/**
                 * Fourth star icon.
                 * @type {JSX.Element}
                 */}
                <Icons
                  type="star3banner"
                  className="absolute top-[10%] md:top-[48%] md:left-[1%]"
                />
              </div>
            </div>
            <div className="flex flex-col pt-[40px] lg:pt-[80px] gap-[13.5px] md:gap-[30px] lg:flex-row">
              <div className="rounded-[8px] overflow-hidden">
                {/**
                 * Button component.
                 * @type {JSX.Element}
                 */}
                <Button
                  navroute={`${linkto}`}
                  className="w-full text_20_2"
                  varient="primary"
                >
                  {`${btndata}`}
                </Button>
              </div>
              <div className="flex gap-[10px] items-center justify-center">
                <div className="p-1 rounded-full bg-white shadow-sm">
                  {/**
                   * Video play button icon.
                   * @type {JSX.Element}
                   */}
                  <Icons type="videoplaybtn" />
                </div>
                {/**
                 * Text indicating trending content.
                 * @type {HTMLHeadingElement}
                 */}
                <h4 className="text-blue_gray_700 whitespace-nowrap text_16_2">
                  What On Trending?
                </h4>
              </div>
            </div>
            {banner === true && (
              <>
                {/**
                 * Additional banner content.
                 * @type {HTMLElement}
                 */}
                <div className="mt-[25px] md:mt-[80px] py-[12px] px-[20px] bg-white rounded-[70px] lg:w-[386px]">
                  <div className="flex gap-[24px]">
                    <div className="flex w-[138px] items-center pl-[20px]">
                      {/**
                       * Image of people in the banner.
                       * @type {HTMLImageElement}
                       */}
                      <Image
                        src={"/images/bannerpeoples.png"}
                        className="ml-[-20px] md:w-full"
                        width={40}
                        height={40}
                        alt="imgs"
                      />
                      <Image
                        src={"/images/bannerpeoples.png"}
                        className="ml-[-20px] md:w-full"
                        width={40}
                        height={40}
                        alt="imgs"
                      />
                      <Image
                        src={"/images/bannerpeoples.png"}
                        className="ml-[-20px] md:w-full"
                        width={40}
                        height={40}
                        alt="imgs"
                      />
                      <Image
                        src={"/images/bannerpeoples.png"}
                        className="ml-[-20px] md:w-full"
                        width={40}
                        height={40}
                        alt="imgs"
                      />
                      <Image
                        src={"/images/bannerpeoples.png"}
                        className="ml-[-20px] md:w-full"
                        width={40}
                        height={40}
                        alt="imgs"
                      />
                    </div>
                    <div className="flex flex-col gap-[4.5px] md:gap-[8px]">
                      <div className="flex gap-[10px]">
                        <div className="flex items-center">
                          {/**
                           * Rating star icons.
                           * @type {JSX.Element}
                           */}
                          <Icons type="rattingstar" />
                          <Icons type="rattingstar" />
                          <Icons type="rattingstar" />
                          <Icons type="rattingstar" />
                          <Icons type="rattingstar" />
                        </div>
                        {/**
                         * Rating text.
                         * @type {HTMLHeadingElement}
                         */}
                        <h3 className="whitespace-nowrap text-blue_gray_900 text_16_2">
                          4.8 Ratings
                        </h3>
                      </div>
                      {/**
                       * Reviews text.
                       * @type {HTMLSpanElement}
                       */}
                      <span className="text_12_1 text-blue_gray_700">
                        (2,654 Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
