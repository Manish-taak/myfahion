"use client";
import React, { Fragment, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Icons from "@/icons/Index";
import FeaturedCard from "./ui/FeaturedCard";
import { cn } from "@/utils/cn";
import DealsCard from "./ui/DealsCard";
import BlogPostcard from "./ui/BlogPostcard";
import { useRouter } from "next/navigation";
import { swiperdetails } from "@/interFaces/type";
import Button from "./ui/Button";
import Image from "next/image";
import Overlay from "./ui/Overlay";
import Addandcreatewishlist from "./popup/AddAndCreateWishlist";
import Createnewwishlist from "./popup/CreateNewWishlist";
import Areyousure from "./popup/AreYouSure";
import Link from "next/link";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";
// import useOutsideClick from "@/lib/hooks/useOutsideclick";

/**
 * Swipercardsectioncommon is a React component that displays a swiper section with various card types.
 * It supports features such as autoplay, pagination, and different card types like FeaturedCard, DealsCard, BlogPostcard, etc.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.headingmainclass - The main class for the heading.
 * @param {string} props.smtextclass - The class for the small text.
 * @param {string} props.smtext - The small text content.
 * @param {string} props.lgtextclass - The class for the large text.
 * @param {string} props.lgtext - The large text content.
 * @param {string} props.customtopbtnclass - The class for the custom top button.
 * @param {boolean} props.topbtn - Flag to display top buttons.
 * @param {string} props.card - The type of card to display.
 * @param {string} props.custombttombtnclass - The class for the custom bottom button.
 * @param {boolean} props.bottombtn - Flag to display bottom buttons.
 * @param {string} props.testclass - The test class for custom styling.
 * @param {Array} props.cardData - The data for the cards.
 * @param {Array} props.UserThoughtcarddata - The data for the user thought cards.
 * @param {Array} props.SaleCard - The data for the sale cards.
 * @param {Array} props.SimilarProduct - The data for the similar product cards.
 * @param {Array} props.blogpostcard - The data for the blog post cards.
 * @param {boolean} props.pagination - Flag to enable pagination.
 * @param {Array} props.OffersOnSimilarProducts - The data for offers on similar products.
 * @param {boolean} props.autoplay - Flag to enable autoplay.
 * @param {string} props.route - The route for navigation.
 * @returns {JSX.Element} - The JSX for the Swipercardsectioncommon component.
 */
const Swipercardsectioncommon = ({
  headingmainclass,
  smtextclass,
  smtext,
  lgtextclass,
  lgtext,
  customtopbtnclass,
  topbtn,
  card,
  custombttombtnclass,
  bottombtn,
  testclass,
  cardData,
  UserThoughtcarddata,
  SaleCard,
  SimilarProduct,
  blogpostcard,
  pagination,
  OffersOnSimilarProducts,
  autoplay,
  route,
}: swiperdetails) => {
  const swiperRef = useRef<any>();
  // states to manage all popups
  const [newList, setNewList] = useState(false);
  const [viewlist, setviewlist] = useState(false);
  const [Createnewlist, setCreatenewlist] = useState(false);
  const [addtowishlist, setAddtowishlist] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  // states to manage likes
  const [like, setlike] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  /**
   * Function to handle the creation of a new list.
   */
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
  };

  /**
   * Function to handle the creation of a new wishlist.
   */
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };

  /**
   * Function to handle adding an item to the wishlist.
   */
  const newlist = () => {
    setlike(true);
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };

  /**
   * Function to handle viewing the wishlist.
   */
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };

  /**
   * Function to close the popup.
   */
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
  };

  /**
   * Function to cancel the creation of a new list.
   */
  const cancelCreatenewList = () => {
    setNewList(false);
    setShowOverlay(false);
  };

  /**
   * Function to cancel the creation of a new wishlist.
   */
  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  /**
   * Function to cancel adding to the new list.
   */
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  /**
   * Function to cancel viewing the wishlist.
   */
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  useOutsideClick(popupRef, closePopup);

  return (
    <>
      {/* pop up start */}
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
          tittle="Your Item has Been Successfully added To Your Wishlist. Thank You !!!"
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
          tittle="Your Item has Been Successfully added To Your Wishlist. Thank You !!!"
          buttontext="View wishlist"
          closepopup={closePopup}
          cancelnewlist={cancelnewlist}
          ref={popupRef}
        />
      )}
      {/* pop up end */}

      {/* overlay */}
      {showOverlay && <Overlay isOpen={true} />}
      {/* overlay */}
      <div className={cn` flex ${headingmainclass}`}>
        <div className={cn`${testclass}`}>
          <h3 className={cn`${smtextclass} text-light_primary text_24_20`}>
            {smtext}
          </h3>
          <h2 className={cn(`${lgtextclass} text_60_32_sec_heading text-blue_gray_800 text-center`)}>
            {lgtext}
          </h2>
        </div>
        <div className={cn`${customtopbtnclass}`}>
          {topbtn === true && (
            <>
              <div className={`md:flex md:gap-[20px] items-center hidden`}>
                <div onClick={() => swiperRef.current?.slidePrev()}>
                  {/* svg show type swiperarrowback  */}
                  <Icons
                    className="cursor-pointer md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] hover:bg-blue_gray_50"
                    type="swiperarrowback"
                  />
                </div>
                <div onClick={() => swiperRef.current?.slideNext()}>
                  {/* svg show type swiperarrownext  */}
                  <Icons
                    className="cursor-pointer md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)] hover:bg-blue_gray_50"
                    type="swiperarrownext"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false}
          slidesPerView={"auto"}
          loop={true}
          pagination={{
            clickable: pagination,
          }}
          className={`mySwiper tmb-swiper`}
        >
          {card === "FeaturedCard" &&
            cardData?.map((item, index) => {
              return (
                <SwiperSlide className="max-w-[343px] md:max-w-[375px] w-auto" key={Date.now() + index || item?.id}>
                  <div className="w-[343px] md:w-[375px]">
                    <FeaturedCard
                      bg={"bg-extra_bg"}
                      hoverEffect={true}
                      data={item}
                      card="vertical"
                      CreatenewList={CreatenewList}
                      color={like}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          {card === "Dealcards" &&
            cardData?.slice(0, 6).map((item, index) => {
              return (
                <SwiperSlide className="w-full max-w-[60vw] md:max-w-[375px]" key={Date.now() + index || item?.id}>
                  <DealsCard
                    CreatenewList={CreatenewList}
                    data={item}
                    card="vertical"
                  />
                </SwiperSlide>
              );
            })}
          {card === "blogcard" &&
            blogpostcard?.map((item, index) => {
              return (
                <SwiperSlide className="w-full max-w-[510px]" key={Date.now() + index}>
                  <Link href={"/blog-details"}>
                    <div>
                      <BlogPostcard samesize={true} data={item} />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          {card === "userthoughtcard" &&
            UserThoughtcarddata?.map((item, index) => {
              return (
                <SwiperSlide className="max-w-[1320px] w-full" key={Date.now() + index || item?.id}>
                  <div className="flex flex-col-reverse items-center bg-light_primary_shades_4p py-5 px-[14px] lg:py-[50px] lg:px-10 gap-[30px] lg:gap-[60px] lg:flex-row lg:max-w-[1320px] rounded-[20px] mt-[30px] md:mt-[60px]">
                    <div className="flex flex-col items-center lg:items-start gap-[10px] max-w-[805px]">
                      <h2 className="text_34_20 text-blue_gray_800 text-center">
                        {item.heading}
                      </h2>
                      <p className="text-blue_gray_500 text-center md:text-start text_20_14">
                        {item.description}
                      </p>
                      <div className="flex flex-col items-center lg:items-start border-t-[1px] border-[#ECEFF1] mt-[14px] pt-[14px] w-full">
                        <h4 className="text-blue_gray_600 text_24_16">
                          {item.username}
                        </h4>
                        <h5 className="text-blue_gray_400">
                          {item.location}
                        </h5>
                      </div>
                    </div>
                    <div className="flex max-w-[375px] w-full justify-center">
                      <div className="border-2 border-light_primary p-[10px] rounded-t-[100px]">
                        <Image
                          width={345}
                          height={450}
                          className="rounded-t-[90px] max-w-[255px] lg:max-w-[345px] w-full text_20_12"
                          src="/images/thoughtbg.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          {card === "biggestsalecard" &&
            SaleCard?.map((item, index) => {
              return (
                <SwiperSlide className="max-w-[1185px]" key={Date.now() + index || item?.discount}>
                  <Link href={"/explore-by-categories"}>
                    <div
                      className={`bg-[url("/images/${item?.image}")] bg-cover bg-no-repeat bg-center py-[9%] xl:py-[128px] xl:max-w-[1185px] flex justify-end rounded-md`}
                    >
                      <div className="max-w-[186px] md:max-w-[300px] md:mr-[70px] lg:max-w-[400] xl:max-w-[496px] xl:mr-[149px]">
                        <h3 className="text_24_12 text-light_primary">
                          {item.discount}
                        </h3>
                        <h2 className="leading-7 text_48_18 text-blue_gray_800 pt-[10px] md:pt-5">
                          {item.subcategoryinfo}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          {card === "similarproductscard" &&
            SimilarProduct?.map((item, index) => {
              return (
                <SwiperSlide className="w-full max-w-[780px]" key={Date.now() + index || item?.name}>
                  <div className="relative cursor-pointer">
                    <Image
                      width={780}
                      height={420}
                      className="rounded-md"
                      src={`/images/${item.image}`}
                      alt=""
                    />
                    <div className="absolute top-5 md:top-10 lg:top-[60px] xl:top-[80px] left-2 md:left-[30px]">
                      <h3 className="text_48_20 text-extra_4 pb-[2px] md:pb-4">
                        {item.name}
                      </h3>
                      <h5 className="flex items-center text_34_20 font-normal gap-x-[7px] md:gap-[10px] text-light_secondary_contrast tab:mt-5">
                        <p className="text_20_12 font-normal text-white">
                          Starting From
                        </p>
                        {item.price}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          {card === "OffersOnSimilarProducts" &&
            OffersOnSimilarProducts?.map((item, index) => {
              return (
                <SwiperSlide className="w-full max-w-[510px]" key={Date.now() + index || item?.productName}>
                  <div className="relative">
                    <Image
                      width={510}
                      height={240}
                      className="xl:max-w-[510px] min-h-[170px]"
                      src={`/images/${item.image}`}
                      alt="img"
                    />
                    <div className="absolute top-[28.5px] left-[10px] xl:top-[41px] xl:left-5 bottom-[23.5px]">
                      <h3 className="text_34_20 text-blue_gray_900">
                        {item.productName}
                      </h3>
                      <h5 className="text_24_16 text-blue_gray_800 flex items-center gap-x-[6px] mt-[10px]">
                        <span className="text_16_1_12 text-blue_gray_800">
                          Get
                        </span>
                        {item.productsoffer}
                      </h5>
                      <div>
                        <Button
                          navroute="/products"
                          varient="primary"
                          className="py-[5px] md:py-[10px] px-4 min-w-[200px]:py-[5px] lg:py-[10px] lg:px-4 mt-[14px] xl:mt-6 rounded-md"
                        >
                          Shop Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className={cn`${custombttombtnclass}`}>
        {bottombtn === true && (
          <>
            <div className={`md:flex md:gap-[20px] items-center flex gap-[20px] justify-center`}>
              <div onClick={() => swiperRef.current?.slidePrev()}>
                <Icons
                  className="cursor-pointer md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)]"
                  type="swiperarrowback"
                />
              </div>
              <div onClick={() => swiperRef.current?.slideNext()}>
                <Icons
                  className="cursor-pointer md:right-[10px] rounded-[120px] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.04)]"
                  type="swiperarrownext"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Swipercardsectioncommon;
