
import Icons from "@/icons/Index";
import React, { Fragment, use, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Productimage from "@/json/productdetail.json";
import Image from "next/image";
import Addandcreatewishlist from "@/components/popup/AddAndCreateWishlist";
import Createnewwishlist from "@/components/popup/CreateNewWishlist";
import Sharewishlist from "@/components/popup/ShareWishlist";
import Overlay from "@/components/ui/Overlay";
import Areyousure from "@/components/popup/AreYouSure";
import useOutsideClick from "@/lib/hooks/useOutsideclick ";

/**
 * ProductView component displays the detailed view of a product, 
 * including images, buttons for adding to cart and buying now, 
 * and options for adding to wishlist and sharing.
 * 
 * @returns {JSX.Element} The product view component
 */
const ProductView = () => {
  // state to manage product image
  const [image, setimage] = useState(
    `${[
      Productimage.slice(0, 1).map((item, index) => {
        return item.image;
      }),
    ]}`
  );
  const popupRef = useRef<HTMLDivElement>(null);
   // State for showing add or create wishlist popup.
  const [newList, setNewList] = useState(false);
  // State for showing view wishlist popup.
  const [viewlist, setviewlist] = useState(false);
  // State for showing create new wishlist popup.
  const [Createnewlist, setCreatenewlist] = useState(false);
   // State for showing confirmation popup after adding to wishlist.
  const [addtowishlist, setAddtowishlist] = useState(false);
   // State for showing overlay.
  const [showOverlay, setShowOverlay] = useState(false);
  // state to manage product share
  const [share, setShare] = useState(false);
  // state to manage border
  const [border, setborder] = useState(0);
  // state to manage active button
  const [active, setactive] = useState(false);

  // createnewlist popup
  const CreatenewList = () => {
    setNewList(true);
    setShowOverlay(true);
  };

  // createnew popup
  const Createnew = () => {
    setNewList(false);
    setCreatenewlist(true);
  };
  // newlist popup
  const newlist = () => {
    setAddtowishlist(true);
    setNewList(false);
    setCreatenewlist(false);
  };
  // view wishlist popup
  const viewwishlist = () => {
    setviewlist(true);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
  };
  // closepopup
  const closePopup = () => {
    setShowOverlay(false);
    setNewList(false);
    setCreatenewlist(false);
    setAddtowishlist(false);
    setviewlist(false);
    setShare(false);
  };

  // cancelcreatenewlist
  const cancelCreatenewList = () => {
    setNewList(false);
    setShowOverlay(false);
  };

  // cancelcreatenew popup
  const cancelCreatenew = () => {
    setNewList(true);
    setCreatenewlist(false);
  };

  // cancel newlist popup
  const cancelnewlist = () => {
    setNewList(false);
    setCreatenewlist(true);
    setviewlist(false);
  };

  // cancel view wishlist popup
  const cancelviewwishlist = () => {
    setNewList(true);
    setAddtowishlist(false);
  };

  // close all popups on outside click
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
      {share &&
        <Sharewishlist
          closepopup={closePopup}
          ref={popupRef}
        />
      }
      {/* pop up end */}

      {/*over lay  */}
      {showOverlay && <Overlay isOpen={true} />}
      <div className="sticky top-[220px]">
        <div className="bg-extra_bg relative xl:pt-[42px] xl:pb-[30px] px-8 flex flex-col items-center rounded-[14px]">
          {/* Favorite icon */}
          <Icons type="heart" className="absolute top-[14px] right-4" />
          {/* Tag icon */}
          <Icons
            type="Tag"
            className="absolute top-[19px] left-4 hidden lg:block "
          />
          {/* Product image for larger screens */}
          <Image
            width={383}
            height={440}
            className=" cursor-pointer max-w-[250px] xl:max-w-[383px] max-h-[440px] hidden lg:block"
            src={`/images/${image}`}
            alt="produtImage"
          />
          {/* Product image slider for smaller screens */}
          <div className="lg:hidden max-w-[383px] -z-0">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className={`mySwiper tmb-swiper`}
            >
              {Productimage?.map((item, index) => {
                return (
                  <SwiperSlide>
                    <Fragment key={Date.now() + index}>
                      <div className="flex justify-center">
                        <Image
                          src={`/images/${item.image}`}
                          width={383}
                          height={440}
                          alt="product image"
                          className="max-w-[259px] max-h-[298px] md:max-w-[383px] md:max-h-[440px]"
                        />
                      </div>
                    </Fragment>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* Favorite icon for adding to wishlist */}
          <div
            onClick={CreatenewList}
            className="absolute top-[14px] right-[14px] p-2 bg-white rounded-full"
          >
            <Icons
              type="solidheart"
              className={` fill-blue_gray_100 hover:fill-red-500 cursor-pointer `}
            />
          </div>
          {/* Share icon with options for smaller screens */}
          <div
            onClick={() => setactive(!active)}
            className="md:hidden  absolute top-[14px] left-[14px] p-2 bg-white rounded-full "
          >
            <div>
              <Icons type="share" className=" fill-blue_gray_400  relative" />
              <div
                className={`${active === true
                  ? "visible opacity-100"
                  : "invisible opacity-0"
                  } absolute duration-300 rounded-md  left-[0px]  p-2 top-[43px] min-[1672px]:right-[41px] bg-white shadow-md  `}
              >
                {/*  svg icons facebook , instagram twiter ,pinterest  */}
                <div className=" flex gap-x-2">
                  <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                    <Icons className="w-[18px] h-[18px]" type="facebook" />
                  </div>
                  <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                    <Icons className="w-[18px] h-[18px]" type="insta" />
                  </div>
                  <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                    <Icons className="w-[18px] h-[18px]" type="twiter" />
                  </div>
                  <div className="p-2 border-[1px] border-light_primary rounded-full cursor-pointer">
                    <Icons className="w-[18px] h-[18px]" type="pinterest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Compare icon for larger screens */}
          <div className=" bg-transparent hidden md:block absolute top-[14px] left-[14px] p-[6px]  rounded-full border-[1px] border-blue_gray_400 hover:border-light_primary max-w-[170px] w-10 transition-[width] duration-[.3s] hover:w-[170px] group ">
            <Link href={"/campare"} className="flex flex-row items-center  ">
              <Icons
                type="compare"
                className=" group-hover:fill-light_primary "
              />
              <p className="hidden delay-300 group-hover:block  text-light_primary text-sm absolute left-10">
                AddToCompare
              </p>
            </Link>
          </div>
          {/* Product image thumbnail navigation for larger screens */}
          <div className="hidden lg:block">
            <div className="max-w-[580px] flex items-center mt-8 ">
              <div className="p-1 rounded-[120px] shadow-2xl bg-white cursor-pointer">
                <Icons type="Leftarrow" className="swiper-button-prev-btnn" />
              </div>
              {/* swiper */}
              <Swiper
                navigation={{
                  nextEl: ".swiper-button-next-btnn",
                  prevEl: ".swiper-button-prev-btnn",
                }}
                loop={true}
                slidesPerView={4}
                spaceBetween={20}
                modules={[Navigation]}
                className="mySwiper"
              >
                {Productimage.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <div
                          className={`cursor-pointer  `}
                          onClick={() => {
                            {
                              setimage(item.image);
                            }
                            {
                              setborder(index);
                            }
                          }}
                        >
                          <Image
                            width={100}
                            height={100}
                            className={`rounded-[14px] ${index === border
                              ? "border-[2px] border-light_primary"
                              : null
                              }  `}
                            src={`/images/${item.image}`}
                            alt="swiperimage"
                          />
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
              <div className="p-1 shadow-2xl bg-white rounded-[120px] cursor-pointer">
                <Icons type="Rightarrow" className="swiper-button-next-btnn" />
              </div>
            </div>
          </div>
        </div>
        {/* Buttons for adding to cart and buying now, displayed on medium and larger screens */}
        <div className="hidden md:flex gap-x-[30px] mt-[30px] ">
          <Button navroute="/cart"
            varient="thirdly"
            className="w-full rounded-lg py-[10px] px-4 md:py-4 md:px-6 text_20_16"
          >
            Add to cart
          </Button>
          <Button navroute="/checkout"
            varient="primary"
            className="w-full rounded-lg py-[10px] px-4 md:py-4 md:px-6 text_20_16"
          >
            Buy Now
          </Button>
        </div>
      </div>

    </>
  );
};

export default ProductView;
